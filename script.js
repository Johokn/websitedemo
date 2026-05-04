function toggleSection(header) {
    const content = header.nextElementSibling;
    const isOpen = content.style.display === "block";

    content.style.display = isOpen ? "none" : "block";
    header.classList.toggle("open");
}
