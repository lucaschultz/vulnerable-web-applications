import express from "express";

import crossSiteScriptingRoute from "./issues/cross-site-scripting-route";
import denialOfServiceRoute from "./issues/denial-of-service-route";
import pathTraversalRoute from "./issues/path-traversal-route";
import remoteCodeExecutionRoute from "./issues/remote-code-execution-route";
import sqlInjectionRoute from "./issues/sql-injection-route";

const app = express();

app.use(crossSiteScriptingRoute);
app.use(denialOfServiceRoute);
app.use(pathTraversalRoute);
app.use(remoteCodeExecutionRoute);
app.use(sqlInjectionRoute);

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
