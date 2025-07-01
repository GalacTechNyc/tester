// Basic JavaScript for cats.html

document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded for cats.html');
    
    // Example: Change the heading color on click
    const heading = document.querySelector('h1');
    if (heading) {
        heading.addEventListener('click', function() {
            heading.style.color = heading.style.color === 'red' ? '#555' : 'red';
        });
    }
    
    // Additional JS functionality can go here
});
