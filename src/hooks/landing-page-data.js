import _ from "lodash";

import landingPageData from "../../data/landing-page.json";

/**
 * A helper hook that loads data for a section from the downloaded landing page data.
 * @param sectionRegex A regular expression to used to find the section from its header.
 * @return The structured data for the section.
 */
export function useSectionData(sectionRegex) {
  return _.find(landingPageData, (section) => sectionRegex.test(section.header));
}
