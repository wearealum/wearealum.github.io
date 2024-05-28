window.addEventListener('scroll', function() {
  var footer = document.getElementById('myFooter');
  var scrollPosition = window.innerHeight + window.scrollY;
  var documentHeight = document.body.offsetHeight;
  
  if (scrollPosition >= documentHeight) {
    footer.style.display = 'block'; // Show the footer when user scrolls to the end
  } else {
    footer.style.display = 'none'; // Hide the footer otherwise
  }
});
