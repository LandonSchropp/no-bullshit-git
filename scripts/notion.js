import fetch from "node-fetch";
import { Parse } from "unzipper";

async function sleep(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

async function notionPost(token, path, body) {

  let response = await fetch(`https://www.notion.so${ path }`, {
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "cookie": `token_v2=${ token };`
    },
    "body": JSON.stringify(body)
  });

  return await response.json();
}

/**
 * Using the internal Notion API, this method enqueues a task to download the page.
 * @param token The Notion API token.
 * @param pageId The ID of the page to download.
 * @return Returns a task ID that can be used to fetch the download URL.
 */
async function enqueueExportHTMLTask(token, pageId) {
  let responseBody = await notionPost(
    token,
    "/api/v3/enqueueTask",
    {
      "task": {
        "eventName": "exportBlock",
        "request": {
          "blockId": pageId,
          "recursive": false,
          "exportOptions": {
            "exportType": "html",
            "timeZone": "America/Chicago",
            "locale": "en"
          }
        }
      }
    }
  );

  return responseBody.taskId;
}

async function fetchNotionDownloadURL(token, taskId) {
  let responseBody = await notionPost(token, "/api/v3/getTasks", { taskIds: [ taskId ] });
  return responseBody.results[0].status.exportURL;
}

/**
 * Downloads a text file and returns its contents.
 * @param URL The URL of the file to download.
 * NOTE: The implementation to this function is a bit cryptic. I copied and pasted from this
 * comment: https://github.com/node-fetch/node-fetch/issues/375#issuecomment-495953540, as well as
 * the examples from the unzipper library.
 */
async function downloadFile(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`unexpected response ${ response.statusText }`);
  }

  return new Promise(resolve => {
    response.body
      .pipe(Parse()) // eslint-disable-line new-cap
      .on("entry", entry => {
        resolve(entry.buffer().then(buffer => buffer.toString()));
      });
  });
}

/**
 * Downloads a page from Notion.
 * @param token The Notion API token.
 * @param pageId The ID of the page to save.
 * @return Returns a promise that resolves to the page's HTML.
 */
export async function fetchPage(token, pageId) {
  let taskId = await enqueueExportHTMLTask(token, pageId);
  await sleep(5000);
  let downloadUrl = await fetchNotionDownloadURL(token, taskId);
  return await downloadFile(downloadUrl, "/tmp/landingPage.zip");
}
