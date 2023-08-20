import express from "express";

import crossSiteScriptingRoute from "./issues/crossSiteScriptingRoute";
import denialOfServiceRoute from "./issues/denialOfServiceRoute";
import pathTraversalRoute from "./issues/pathTraversalRoute";
import remoteCodeExecutionRoute from "./issues/remoteCodeExecutionRoute";
import sqlInjectionRoute from "./issues/sqlInjectionRoute";

const app = express();

app.use(crossSiteScriptingRoute);
app.use(denialOfServiceRoute);
app.use(pathTraversalRoute);
app.use(remoteCodeExecutionRoute);
app.use(sqlInjectionRoute);

app.listen(3000, () => {
  console.log("Server started on port 3000!");
});
