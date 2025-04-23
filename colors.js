document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll("div[id^='main'], div[id^='accent'], div[id^='text']");
    const body = document.body;
  
    // Smooth background transition
    body.style.transition = "background-color 0.5s ease-in-out";
  
    const isLightColor = (rgb) => {
      const [r, g, b] = rgb.match(/\d+/g).map(Number);
      const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
      return brightness > 128;
    };
  
    let currentBg = null;
  
    const setHighlight = (bg) => {
      body.style.backgroundColor = bg;
      currentBg = bg;
  
      circles.forEach(c => {
        const cBg = getComputedStyle(c).backgroundColor;
        c.classList.remove("outline", "outline-[var(--main-2)]", "outline-[var(--main-4)]");
  
        if (cBg === bg) {
          if (isLightColor(cBg)) {
            c.classList.add("outline", "outline-[var(--main-4)]");
          } else {
            c.classList.add("outline", "outline-[var(--main-2)]");
          }
        }
      });
    };
  
    circles.forEach(circle => {
      // Animate size
      const animate = () => {
        const randomWidth = Math.random() < 0.5 ? "200px" : "100px";  // Random width: 400px or 200px
        const randomHeight = Math.random() < 0.5 ? "200px" : "100px"; // Random height: 400px or 200px
      
        circle.style.width = randomWidth;
        circle.style.height = randomHeight;
      
        const delay = Math.random() * 3000 + 2000; // Delay between animations
        setTimeout(animate, delay); // Repeat the animation after the delay
      };
      
  
      circle.style.transition = "all 0.5s ease-in-out";
  
      circle.addEventListener("mouseenter", () => {
        const bg = getComputedStyle(circle).backgroundColor;
        if (bg !== currentBg) setHighlight(bg);
      });
  
      animate();
    });
  });


  
  