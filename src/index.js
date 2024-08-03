import './styles/style.css';
import { createHome } from './home.js';
import { createAbout } from './about.js';
import { createMenu } from './menu.js';
// import { appendContent, clearContent } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector("#content");
    const header = document.querySelector("header");
    let welcome = document.createElement("h1");
    welcome.innerText = "Welcome to Corey's Cafe";
    header.insertBefore(welcome, header.firstChild);

    const home = document.querySelector(".home");
    const menu = document.querySelector(".menu");
    const about = document.querySelector(".about");

    home.addEventListener("click", () => createHome(content));
    menu.addEventListener("click", () => createMenu(content));
    about.addEventListener("click", () => createAbout(content));

    createHome(content);
});
