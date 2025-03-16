import express, { type Express } from "express";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer, createLogger } from "vite";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();
const BASE_PATH = "/pitch"; // Define base path constant

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  // Make sure to handle the base path in development mode
  app.use(`${BASE_PATH}/*`, async (req, res, next) => {
    // Remove BASE_PATH from URL for correct handling
    const url = req.originalUrl.replace(BASE_PATH, '');

    try {
      const clientTemplate = path.resolve(
        __dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
  
  // Also handle the exact base path
  app.use(BASE_PATH, async (req, res, next) => {
    try {
      const clientTemplate = path.resolve(
        __dirname,
        "..",
        "client",
        "index.html",
      );

      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml("/", template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
  
  // Catch-all for other routes
  app.use("*", async (req, res, next) => {
    if (!req.originalUrl.startsWith(BASE_PATH) && 
        !req.originalUrl.startsWith("/api") && 
        req.originalUrl !== "/") {
      return res.redirect(BASE_PATH);
    }
    
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        __dirname,
        "..",
        "client",
        "index.html",
      );

      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Serve static assets with the base path
  app.use(BASE_PATH, express.static(distPath));

  // Special handling for the base path - serve index.html
  app.get(BASE_PATH, (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });

  // Serve root path as BASE_PATH
  app.get("/", (_req, res) => {
    res.redirect(BASE_PATH);
  });

  // Handle SPA routes under the base path
  app.get(`${BASE_PATH}/*`, (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });

  // fall through to index.html if the file doesn't exist
  app.use("*", (req, res) => {
    // If not starting with BASE_PATH and not an API route, redirect to BASE_PATH
    if (!req.originalUrl.startsWith(BASE_PATH) && !req.originalUrl.startsWith("/api")) {
      return res.redirect(BASE_PATH);
    }
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
