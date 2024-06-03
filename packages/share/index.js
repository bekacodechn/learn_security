import { fileURLToPath } from "url";
import { dirname } from "path";

export function getFilename(metaUrl) {
  return fileURLToPath(metaUrl);
}

export function getDirname(metaUrl) {
  const __filename = getFilename(metaUrl);
  return dirname(__filename);
}
