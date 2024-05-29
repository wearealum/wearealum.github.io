var footer = document.querySelector('footer');
var contentHeight = document.body.scrollHeight; // Height of the entire document
var footerVisible = false;

window.addEventListener('scroll', function() {
    var scrollPosition = window.innerHeight + window.scrollY; // Current scroll position

    // If scrolled to the bottom of the page and footer is not already visible
    if (scrollPosition >= contentHeight && !footerVisible) {
        footer.style.display = 'block'; // Show the footer
        footerVisible = true; // Update flag to indicate footer is visible
    } else if (scrollPosition < contentHeight && footerVisible) {
        footer.style.display = 'none'; // Hide the footer
        footerVisible = false; // Update flag to indicate footer is not visible
    }
});
