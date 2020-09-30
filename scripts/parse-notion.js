import _ from "lodash";
import { JSDOM } from "jsdom";

const LIST_ITEM_REGEX = /<strong>\s*(.*):\s*<\/strong>\s*(.*)\s*/;

/**
 * Returns the text for the H1 or H2 previous to the element. If the element is an H1 or H2, this
 * method returns the text for the element.
 * @param element The element whose previous header should be found.
 * @return Returns the previous element.
 */
function previousHeader(element) {
  if (_.isNil(element)) {
    return null;
  }

  if ([ "H1", "H2", null ].includes(element.tagName)) {
    return element.innerHTML;
  }

  return previousHeader(element.previousSibling);
}

/**
 * Creates a document fragment containing the given elements.
 * @param document The document where the document fragment should be created.
 * @param elements The elements to add to the document fragment.
 * @return Returns a document fragment.
 */
function createDocumentFragmentFromElements(document, elements) {
  return elements.reduce((fragment, element) => {
    fragment.appendChild(element);
    return fragment;
  }, document.createDocumentFragment());
}

/**
 * Parses an HTML list item into structured data.
 * @param element The HTML element to parse.
 * @return Returns structured data representing the list item.
 */
function parseListItem(element) {

  let match = element.innerHTML.match(LIST_ITEM_REGEX);
  console.log(element.outerHTML, element.innerHTML);

  if (_.isNil(match)) {
    return element.innerHTML;
  }

  return {
    header: match[1],
    content: match[2]
  };
}

/**
 * Parses an HTMLUnorderedList element, transforming it into structured data.
 * @param element The list element to parse.
 * @return Returns structured data representing the list.
 */
function parseList(element) {
  if (_.isNil(element)) {
    return element;
  }

  return Array.from(element.children).map(parseListItem);
}

/**
 * Parses a document fragment containing elements for a section into structured data.
 * @param fragment The document fragment to parse.
 * @return Returns structured data representing the section.
 */
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

/**
 * Parses an HTML string into structured data.
 * @param html A string containing the HTML to parse.
 * @return Returns structured data representing the HTML.
 */
export function parseHTML(html) {

  // Parse the HTML into a document
  let document = new JSDOM(html).window.document;

  // Extract the content from the document
  let content = [
    ...Array.from(document.querySelector("header").children),
    ...Array.from(document.querySelector(".page-body").children)
  ];

  // Remove the unused content, Split it into sections and parse them.
  return _(content)
    .thru(elements => {
      return _.slice(elements, 0, _.findIndex(elements, element => element.tagName === "HR"));
    })
    .groupBy(previousHeader)
    .values()
    .map(elements => createDocumentFragmentFromElements(document, elements))
    .map(parseSection)
    .value();
}
