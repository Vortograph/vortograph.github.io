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


//just some fun
document.addEventListener('keydown', () => {
    const konamiCode = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
      'KeyB', 'KeyA', 'Enter'
    ];
    
    let currentCodeIndex = 0;
    
    document.addEventListener('keydown', (event) => {
      const key = event.code;
      
      if (key === konamiCode[currentCodeIndex]) {
        currentCodeIndex++;
        
        if (currentCodeIndex === konamiCode.length) {
            window.location.href = 'colors.html'; // Redirect to colors.html
          currentCodeIndex = 0; // Reset the code sequence after successful input
        }
      } else {
        currentCodeIndex = 0; // Reset if the key sequence is incorrect
      }
    });
  });


