import _ from "lodash";

import landingPageData from "../../data/landing-page.json";
import reactParse from "html-react-parser";

function recursivelyParseHTML(object) {

  if (_.isNil(object) || _.isBoolean(object)) {
    return object;
  }

  if (_.isArray(object)) {
    return _.map(object, recursivelyParseHTML);
  }

  if (_.isObject(object)) {
    return _.mapValues(object, recursivelyParseHTML);
  }

  return reactParse(object);
}

export const SECTIONS = landingPageData.map(recursivelyParseHTML);
export const LANDING_PAGE_SECTIONS = _.reject(SECTIONS, { component: "FreeStarterCourse" });

/**
 * A helper hook that loads data for a section from the downloaded landing page data.
 * @param key The section's key, used to find the data.
 * @return The structured data for the section.
 */
export function useSectionData(component) {
  return _.find(SECTIONS, { component });
}
