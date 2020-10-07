import _ from "lodash";

import landingPageData from "../../data/landing-page.json";

export function sectionData(sectionRegex) {
  return _.find(landingPageData, (section) => sectionRegex.test(section.header));
}
