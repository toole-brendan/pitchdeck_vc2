# Routing Architecture with Base URL

This document explains how the `/pitch` base URL routing is implemented in this application and why it works effectively.

## Table of Contents
- [Overview](#overview)
- [Implementation Layers](#implementation-layers)
  - [Build Configuration](#build-configuration)
  - [Client-Side Routing](#client-side-routing)
  - [Server-Side Handling](#server-side-handling)
- [Why This Approach Works](#why-this-approach-works)
- [Troubleshooting Your Implementation](#troubleshooting-your-implementation)
- [Common Issues and Solutions](#common-issues-and-solutions)

## Overview

This application employs a three-layer approach to handle base URL routing (`/pitch`):

1. **Build configuration** - Sets the base path for static assets
2. **Client-side routing** - Configures the SPA router with the base path
3. **Server-side handling** - Manages HTTP requests to support the base path pattern

This multi-layered approach ensures the application consistently works regardless of how users access it.

## Implementation Layers

### Build Configuration

In `vite.config.ts`, the base URL is set for all static assets:

```typescript
export default defineConfig({
  base: "/pitch/",
  // other configuration...
})
```

This ensures all bundled assets (JavaScript, CSS, images) have URLs prefixed with `/pitch/`. When the HTML file is loaded, it will request resources from the correct paths.

### Client-Side Routing

The client-side routing is handled using the wouter library in `App.tsx`:

```typescript
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router base="/pitch">
        <AppRoutes />
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}
```

The `Router` component with `base="/pitch"` ensures:
- All route patterns are evaluated relative to this base path
- Internal navigation maintains the base path prefix
- The router correctly matches URLs with the `/pitch` prefix

The individual routes don't need to include the base path:

```typescript
function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Slide1} />
      <Route path="/2" component={Slide2} />
      {/* other routes... */}
      <Route component={NotFound} />
    </Switch>
  );
}
```

These routes will actually correspond to `/pitch/`, `/pitch/2`, etc. in the browser's address bar.

### Server-Side Handling

The server-side handling differs between development and production modes, but both are configured to support the base path.

#### Development Mode

In development mode (`server/vite.ts`), a constant defines the base path:

```typescript
const BASE_PATH = "/pitch"; // Define base path constant
```

Then, multiple middleware handlers ensure proper routing:

```typescript
// Handle routes under the base path
app.use(`${BASE_PATH}/*`, async (req, res, next) => {
  // Remove BASE_PATH from URL for correct handling
  const url = req.originalUrl.replace(BASE_PATH, '');
  // Serve the SPA...
});

// Handle the exact base path
app.use(BASE_PATH, async (req, res, next) => {
  // Serve the SPA for the base path...
});

// Catch-all for other routes
app.use("*", async (req, res, next) => {
  if (!req.originalUrl.startsWith(BASE_PATH) && 
      !req.originalUrl.startsWith("/api") && 
      req.originalUrl !== "/") {
    return res.redirect(BASE_PATH);
  }
  // Serve the SPA...
});
```

#### Production Mode

In production mode (`serveStatic` function):

```typescript
// Serve static assets with the base path
app.use(BASE_PATH, express.static(distPath));

// Special handling for the base path
app.get(BASE_PATH, (_req, res) => {
  res.sendFile(path.resolve(distPath, "index.html"));
});

// Redirect root to BASE_PATH
app.get("/", (_req, res) => {
  res.redirect(BASE_PATH);
});

// Handle SPA routes under the base path
app.get(`${BASE_PATH}/*`, (_req, res) => {
  res.sendFile(path.resolve(distPath, "index.html"));
});

// Fallback for other routes
app.use("*", (req, res) => {
  if (!req.originalUrl.startsWith(BASE_PATH) && !req.originalUrl.startsWith("/api")) {
    return res.redirect(BASE_PATH);
  }
  res.sendFile(path.resolve(distPath, "index.html"));
});
```

## Why This Approach Works

1. **Consistency**: The same base path is used everywhere - build configuration, client routing, and server handling
2. **Complete Coverage**: The implementation handles all possible URL patterns:
   - Direct access to the base path (`/pitch`)
   - Access to specific routes under the base path (`/pitch/15`)
   - Access to the root path (`/`)
   - Invalid routes (redirected to the base path)
3. **SPA Support**: The server always serves the SPA for any route under the base path, allowing client-side routing to work properly
4. **Asset Resolution**: All static assets are correctly referenced with the base path prefix
5. **Deep Linking**: Users can bookmark or directly access any route within the application
6. **History Navigation**: Browser back/forward navigation works correctly

## Troubleshooting Your Implementation

If you're trying to implement a similar approach in your application, ensure all three layers are correctly configured:

### Common Issues and Solutions

1. **Missing Base Path in Build Config**
   - Symptom: 404 errors for static assets
   - Solution: Set the base path in your build tool configuration (Vite, Webpack, etc.)

2. **Router Base Path Mismatch**
   - Symptom: Routes work at the root but not under the base path
   - Solution: Configure your client-side router with the correct base path

3. **Server Route Handling Issues**
   - Symptom: Direct access to routes fails, but navigation within the app works
   - Solution: Ensure your server serves the SPA for all routes under the base path

4. **Inconsistent Base Path Definition**
   - Symptom: Some features work, others fail unpredictably
   - Solution: Use a constant or environment variable for the base path and use it consistently

5. **Missing Redirects**
   - Symptom: Accessing the root path doesn't take you to the app
   - Solution: Add redirects from root and other unmatched paths to your base path

6. **API Route Conflicts**
   - Symptom: API calls failing because they're being handled as SPA routes
   - Solution: Ensure API routes are excluded from SPA handling and have higher middleware priority

## Implementation Checklist

To implement a similar base URL routing in your application:

1. **Define a consistent base path constant**
   ```typescript
   const BASE_PATH = "/your-base-path";
   ```

2. **Configure your build tool**
   ```typescript
   // For Vite
   export default defineConfig({
     base: BASE_PATH + "/",
     // ...
   })
   
   // For Webpack
   module.exports = {
     output: {
       publicPath: BASE_PATH + "/",
     },
     // ...
   };
   ```

3. **Set up your client-side router**
   ```typescript
   // For wouter
   <Router base={BASE_PATH}>
     <Routes />
   </Router>
   
   // For React Router
   <BrowserRouter basename={BASE_PATH}>
     <Routes />
   </BrowserRouter>
   ```

4. **Configure your server**
   ```typescript
   // Serve the SPA for all routes under the base path
   app.get(`${BASE_PATH}/*`, (req, res) => {
     res.sendFile(path.resolve(__dirname, "index.html"));
   });
   
   // Redirect root to base path
   app.get("/", (req, res) => {
     res.redirect(BASE_PATH);
   });
   ```

5. **Handle fallback routes**
   ```typescript
   app.use("*", (req, res) => {
     if (!req.originalUrl.startsWith(BASE_PATH) && !req.originalUrl.startsWith("/api")) {
       return res.redirect(BASE_PATH);
     }
     res.sendFile(path.resolve(__dirname, "index.html"));
   });
   ```

By implementing these patterns, your application should handle base URL routing as effectively as this one does.
