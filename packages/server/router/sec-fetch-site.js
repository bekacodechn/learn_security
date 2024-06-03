import { getHost } from "../util/index.js";

export default function router(app) {
  app.get("/sec-fetch-site", (req, res, next) => {
    const host = getHost(req);
    console.log("host :>> ", host);
    res.send("ok");
  });
}
