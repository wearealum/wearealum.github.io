window.addEventListener('scroll', function() {
  var footer = document.querySelector('footer');
  var content = document.querySelector('main');
  var contentHeight = content.offsetHeight;
  var yOffset = window.pageYOffset;
  var windowHeight = window.innerHeight;

  // Check if the user has scrolled to the bottom of the page
  if (yOffset + windowHeight >= contentHeight) {
    footer.style.display = 'block';
  } else {
    footer.style.display = 'none';
  }
});
