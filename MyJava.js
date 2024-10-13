// Function to toggle visibility of sections
function toggleSection(header) {
    const content = header.nextElementSibling;
    const arrow = header.textContent.includes('▼') ? '▲' : '▼';
    header.innerHTML = header.innerHTML.replace(/▲|▼/, arrow);
    
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
