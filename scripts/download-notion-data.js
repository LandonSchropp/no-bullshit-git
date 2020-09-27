import { JSDOM } from "jsdom";
import Notion from "notion-api-js";
import _ from "lodash";

// Returns the text for the H1 or H2 previous to the element. If the element is an H1 or H2, this
// method returns the text for the element.
function previousHeader(element) {
  if ([ "H1", "H2", null ].includes(element.tagName)) {
    return element.innerHTML;
  }

  return previousHeader(element.previousSibling);
}

function createDocumentFragmentFromElements(document, elements) {
  return elements.reduce((fragment, element) => {
    fragment.appendChild(element);
    return fragment;
  }, document.createDocumentFragment());
}

function parseList(element) {
  if (!element) {
    return element;
  }

  return Array.from(element.children).map(child => child.innerHTML);
}

function parseSection(fragment) {

  // Grab the known elements
  let header = fragment.querySelector("h1, h2");
  let subhead = fragment.querySelector("h1 + p, h2 + p");
  let list = fragment.querySelector("ul");

  // Remove the known elements from the fragment
  header?.remove();
  subhead?.remove();
  list?.remove();

  // Return the data in a structured format
  return {
    header: header?.innerHTML,
    subhead: subhead?.innerHTML,
    list: parseList(list),
    content: parseList(fragment)
  };
}

function parseHTML(html) {
  let document = new JSDOM(html).window.document;

  // Break the document down into child elements, split them into sections and then parse the
  // sections.
  return _([ ...document.querySelector("body div").children ])
    .thru(elements => {
      return _.slice(elements, 0, _.findIndex(elements, element => element.tagName === "HR"));
    })
    .groupBy(previousHeader)
    .values()
    .map(elements => createDocumentFragmentFromElements(document, elements))
    .map(parseSection)
    .value();
}

(async () => {

  // Download and parse the landing page document
  let notion = new Notion({ token: process.env.NOTION_API_TOKEN });
  let notionLandingPageHTML = (await notion.getPageById(process.env.NOTION_LANDING_PAGE_ID)).HTML;

  // Split the landing page into sections
  let sections = parseHTML(notionLandingPageHTML);
  console.log(sections);

  // Convert the sections into the appropriate data format

  // Save the results as a JSON file
})();
