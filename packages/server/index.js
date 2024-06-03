import express from "express";
import { registerRouter } from "./router/registerRouter.js";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

registerRouter(app);

app.listen(3000, () => {
  console.log("启动了 3000~~");
});

app.listen(3001, () => {
  console.log("启动了 3001~~");
});
