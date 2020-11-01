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

/**
 * A helper hook that loads data for a section from the downloaded landing page data.
 * @param sectionRegex A regular expression to used to find the section from its header.
 * @return The structured data for the section.
 */
function findSectionData(sectionRegex) {
  let content = _.find(landingPageData, (section) => sectionRegex.test(section.header));
  return recursivelyParseHTML(content);
}

export const SECTIONS = _.map({
  hero: /no bullshit/i,
  learn: /learn/i,
  benefits: /different/i,
  faq: /frequently asked questions/i,
  author: /author/i,
  manyWays: /many ways/i,
  pricing: /pricing/i,
  download: /download/i
}, (sectionRegex, key) => ({ ...findSectionData(sectionRegex), key }));

// <Hero />
// <Learn />
// <Benefits />
// <FAQ />
// <Author />
// <ManyWays />
// <Pricing />
// <Download />

/**
 * A helper hook that loads data for a section from the downloaded landing page data.
 * @param key The section's key, used to find the data.
 * @return The structured data for the section.
 */
export function useSectionData(key) {
  return _.find(SECTIONS, { key });
}
