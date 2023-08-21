import express from "express";

import exampleDataRoute from "./issues/example-data-route";
import genresRoute from "./issues/genres-route";
import greetRoute from "./issues/greet-route";
import helloRoute from "./issues/hello-route";
import listUsersRoute from "./issues/list-users-route";

const app = express();

app.use(greetRoute);
app.use(listUsersRoute);
app.use(exampleDataRoute);
app.use(helloRoute);
app.use(genresRoute);

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
