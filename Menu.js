const menuButton = document.getElementById('menu');
const Troop = document.getElementById('Troop');
const hiddenElement = document.getElementById('alt');

menuButton.addEventListener('click', function(event) {
    const svg = menuButton.querySelector('svg path'); // Select the path inside the SVG

    if (svg.classList.contains('stroke-black')) {
        svg.classList.remove('stroke-black');
        svg.classList.add('stroke-white');
    } else {
        svg.classList.remove('stroke-white');
        svg.classList.add('stroke-black');
    }
});


