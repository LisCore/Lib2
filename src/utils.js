export function appendContent(content, newContent) {
    content.appendChild(newContent);
}

export function clearContent(content) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}
