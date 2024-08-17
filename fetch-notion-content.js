const { Client } = require('@notionhq/client');
const { NotionToMarkdown } = require('notion-to-md');
const fs = require('fs');
const path = require('path');

// Initialize Notion client
const notion = new Client({ auth: process.env.NOTION_TOKEN });

// Initialize Notion to Markdown converter
const n2m = new NotionToMarkdown({ notionClient: notion });

const NOTION_PAGE_IDS = ['page-id-1', 'page-id-2']; // Replace with your Notion page IDs
const OUTPUT_DIR = path.join(__dirname, 'public', 'notion-content');

async function fetchAndSaveContent() {
  try {
    // Ensure the output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    for (const pageId of NOTION_PAGE_IDS) {
      // Fetch page content from Notion
      const mdblocks = await n2m.pageToMarkdown(pageId);
      const mdString = n2m.toMarkdownString(mdblocks);

      // Define the output file path
      const outputFile = path.join(OUTPUT_DIR, `${pageId}.md`);

      // Save content to the output file
      fs.writeFileSync(outputFile, mdString);
    }

    console.log('Content fetched and saved successfully!');
  } catch (error) {
    console.error('Error fetching content from Notion:', error);
  }
}

fetchAndSaveContent();