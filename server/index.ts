import express, { type Request, Response, NextFunction } from "express";
import cors from "cors";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { createServer } from "http";

// Base path for the application
const BASE_PATH = "/pitch";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Function to start server and try alternate ports if needed
const startServer = async (server: any, initialPort: number) => {
  let port = initialPort;
  const maxRetries = 10;
  let retries = 0;

  const tryListen = () => {
    return new Promise<number>((resolve, reject) => {
      server.once('error', (err: any) => {
        if (err.code === 'EADDRINUSE') {
          log(`Port ${port} is already in use, trying ${port + 1}`);
          port += 1;
          retries += 1;
          if (retries < maxRetries) {
            server.removeAllListeners('listening');
            server.removeAllListeners('error');
            tryListen().then(resolve).catch(reject);
          } else {
            reject(new Error(`Could not find an available port after ${maxRetries} attempts`));
          }
        } else {
          reject(err);
        }
      });

      server.once('listening', () => {
        resolve(port);
      });

      server.listen(port, "0.0.0.0");
    });
  };

  return tryListen();
};

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Use dynamic port routing with fallback ports
  const initialPort = Number(process.env.PORT || 3000);
  try {
    const finalPort = await startServer(server, initialPort);
    // Log the server URL with clickable links
    log(`Server is running on port ${finalPort}`);
    console.log(`\n🚀 App is running at:`);
    console.log(`  > Local:   \x1b[36mhttp://localhost:${finalPort}${BASE_PATH}/\x1b[0m`);
    console.log(`  > Network: \x1b[36mhttp://127.0.0.1:${finalPort}${BASE_PATH}/\x1b[0m\n`);
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
})();
