import { getDirname } from "share";
import fs from "fs";
import { join } from "path";

const __dirname = getDirname(import.meta.url);

export const registerRouter = (app) => {
  fs.readdirSync(__dirname).forEach((item) => {
    const file = join(__dirname, item);

    if (item === "registerRouter.js") return;

    import(file).then((m) => {
      const { default: router } = m;
      router(app);
    });
  });
};
