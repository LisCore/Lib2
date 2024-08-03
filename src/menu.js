import { appendContent, clearContent } from './utils.js';

export function createMenu(content) {
    clearContent(content);
    let menuContent = document.createElement("div");
    menuContent.className = "page-content";

    const menuHTML = `
        <p>Here is our delicious menu.</p>
        <div class="menu-content">
            <p><strong>Appentizers</strong></p>
            <p>Crab-Patty Dip<br>
            <em>Crab, cream cheese, greens, spices</em>&emsp asdf</p>
    
        </div>

    `;

    menuContent.innerHTML = menuHTML;
    appendContent(content, menuContent);
}
