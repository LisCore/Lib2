import { appendContent, clearContent } from './utils.js';

export function createMenu(content) {
    clearContent(content);
    let menuContent = document.createElement("div");
    menuContent.className = "page-content";
    menuContent.textContent = "Here is our delicious menu.";

    appendContent(content, menuContent);
}
