import Notion from "notion-api-js";

let notion = new Notion({ token: process.env.NOTION_API_TOKEN });

(async () => {
  console.log((await notion.getPageById(process.env.NOTION_LANDING_PAGE_ID)).HTML);
})();
