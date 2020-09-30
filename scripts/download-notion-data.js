import path from "path";
import { mkdirp, writeJSON } from "fs-extra";
import { fetchPage } from "./notion";
import { parseHTML } from "./parse-notion";

(async () => {

  // Download the landing page's HTML
  let html = await fetchPage(process.env.NOTION_API_TOKEN, process.env.NOTION_LANDING_PAGE_ID);

  // Convert the HTML into structured data
  let structuredContent = parseHTML(html);

  // Save the results as a JSON file
  await mkdirp(path.join(__dirname, "../data"));
  await writeJSON(path.join(__dirname, "../data/landing-page.json"), structuredContent);
})();
