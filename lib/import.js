import _ from "lodash";

export function importHash(requireContext) {
  return _.fromPairs(requireContext.keys().map(key => [ key, requireContext(key) ]));
}
