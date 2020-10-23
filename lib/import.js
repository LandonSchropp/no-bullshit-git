import _ from "lodash";
import { renderToString } from "react-dom/server";

export function importHash(requireContext) {
  return _.fromPairs(requireContext.keys().map(key => [ key, requireContext(key) ]));
}

export function findImage(images, item) {
  return _.find(images, (image, path) => {
    let pathWords = path
      .replace(/\.\w*$/, "")
      .replace(/[^-\w]+/g, "")
      .split("-");

    return _.every(pathWords, word => _.includes(renderToString(item).toLowerCase(), word));
  });
}
