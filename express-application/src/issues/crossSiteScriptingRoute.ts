import { Router } from "express";

const crossSiteScriptingRoute = Router();

crossSiteScriptingRoute.get("/cross-site-scripting", (req, res) => {
  const name = req.query.name || "";

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Example Vulnerable Page</title>
      </head>
        <body>
          <div id="greeting" style="color:green;">Hello ${name}!</div>
        </body>
    </html>
  `;

  res.send(html);
});

export default crossSiteScriptingRoute;
