export function appendContent(content, newContent) {
    newContent.style.backgroundColor = "#f5efeb";
    content.appendChild(newContent);
}

export function clearContent(content) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

export function markButtonAsClicked(button) {
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('clicked'));
    button.classList.add('clicked');
}