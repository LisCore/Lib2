import { appendContent, clearContent } from './utils.js';
import fb from './assets/facebook.png';
import ig from './assets/instagram.png';
import x from './assets/twitter.png';

export function createHome(content) {
    clearContent(content);
    let homeContent = document.createElement("div");
    homeContent.className = "page-content";
    homeContent.innerHTML = `
        <div class="home-content">
            <p>Welcome to Corey's Cafe! <br>We are proud and honored that you want to experience the delicious and wonderful flavors right in the heart of Paris.</p>
            <p>Now if you have not already heard about the rat in the room or have not read the infamous food critic Ego's now highest-reviewed restaurant or are simply new to Paris, we do things a little unorthodox compared to other restaurants around the city,
            and you will be surprised at what you can expect.</p>
            <p>We do not judge nor discriminate about who can cook because, as the famous Gusteau once said, "Anyone can cook."</p>
            <br><br><br>
        </div>
        <div class="hours">
            <p>The first thing about us..</p>
            M-F: 10:00am - 7:00pm<br>
            Sat: 11:00am - 5:00pm<br>
            Sun: Closed
        </div>
        <div class="contact">
            Contact Us!<br>
            Email: corelee@pdx.edu<br>
            Socials:
            <div class="icon-links">
                <a href="https://facebook.com"><img src="${fb}" alt="fb" class="icon"></a>
                <a href="https://www.instagram.com"><img src="${ig}" alt="ig" class="icon"></a>
                <a href="https://www.x.com"><img src="${x}" alt="twitter" class="icon"></a>
            </div>
        </div>
    `;

    appendContent(content, homeContent);
}
