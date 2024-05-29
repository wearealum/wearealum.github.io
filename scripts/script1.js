window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var contentHeight = document.body.scrollHeight; // Height of the entire document
    var scrollPosition = window.innerHeight + window.pageYOffset; // Current scroll position

    // If scrolled to the bottom of the page
    if (scrollPosition >= contentHeight) {
        footer.style.display = 'block'; // Show the footer
    } else {
        footer.style.display = 'none'; // Hide the footer
    }
});
