const menuButton = document.getElementById('menu');
const Troop = document.getElementById('Troop');
const hiddenElement = document.getElementById('alt');


menuButton.addEventListener('click', function(event) {

    // Toggle stroke color between black and white
    const svg = menuButton.querySelector('svg path'); // Select the path inside the SVG

    if (svg.classList.contains('stroke-black')) {
        svg.classList.remove('stroke-black');
        svg.classList.add('stroke-white');
    } else {
        svg.classList.remove('stroke-white');
        svg.classList.add('stroke-black');
    }
});

// Show the element when mouse enters the text box
Troop.addEventListener('mouseover', function() {
    console.log("enter")
});

// Hide the element when mouse leaves the text box
Troop.addEventListener('mouseout', function() {
    console.log("exit")
});