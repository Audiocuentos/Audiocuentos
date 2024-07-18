document.querySelector('nav ul').addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        // Add your functionality here
    }
});
$('.stories article').click(function() {
    // Display a modal window or redirect the user to a new page
});
$(window).scroll(function() {
    // Add a parallax effect or animate the article sections
});
