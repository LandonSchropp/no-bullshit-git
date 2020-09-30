import { fetchPage } from "./notion";
import { parseHTML } from "./parse-notion";

(async () => {

  // Download the landing page's HTML
  let html = await fetchPage(process.env.NOTION_API_TOKEN, process.env.NOTION_LANDING_PAGE_ID);
  console.log(parseHTML(html));

  // Split the landing page into sections
  // let sections = parseHTML(html);
  // console.log(sections);

  // Convert the sections into the appropriate data format

  // Save the results as a JSON file
})();
