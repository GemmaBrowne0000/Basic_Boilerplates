// Your JavaScript code goes here

document.addEventListener('DOMContentLoaded', function() {
    // Code to run after the DOM has loaded
    console.log('DOM content loaded');

    // Example: Change the heading color on button click
    const button = document.getElementById('changeColorButton');
    const heading = document.querySelector('h1');

    button.addEventListener('click', function() {
        heading.style.color = getRandomColor();
    });

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
