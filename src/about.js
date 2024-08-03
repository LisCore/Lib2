import { appendContent, clearContent } from './utils.js';

export function createAbout(content) {
    clearContent(content);
    let aboutContent = document.createElement("div");
    aboutContent.className = "page-content";
    aboutContent.textContent = "Learn more about us.";

    appendContent(content, aboutContent);
}
