window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var contentHeight = document.body.scrollHeight; // Height of the entire document
    var scrollPosition = window.innerHeight + window.scrollY; // Current scroll position

    // If scrolled to the bottom of the page
    if (scrollPosition >= contentHeight) {
        if (footer.style.display !== 'block') {
            footer.style.display = 'block'; // Show the footer only if it's not already visible
        }
    } else {
        footer.style.display = 'none'; // Hide the footer if not scrolled to the bottom
    }
});
