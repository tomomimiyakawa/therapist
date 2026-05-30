document.addEventListener('click', e => {
  const paragraph = document.querySelector('p');
  const dropbtn = document.querySelector('.dropbtn');
  const dropdown = document.querySelector('.dropdown');
  
  if (e.target === dropbtn && !dropdown.classList.contains('open')) {
    // Button clicked - open menu if not already open
    dropdown.classList.add('open');
    paragraph.classList.add('hidden');
    document.querySelector('.backdrop').classList.add('active');
  }
});

document.addEventListener('keydown', e => { 
  if (e.key === 'Escape') {
    const paragraph = document.querySelector('p');
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.remove('open');
    paragraph.classList.remove('hidden');
    document.querySelector('.backdrop').classList.remove('active');
  }
});


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const glow = document.querySelector('.overscroll-glow');

let glowAmount = 0;
let animating = false;

window.addEventListener('wheel', (e) => {

    const scrollPosition =
        window.innerHeight + window.pageYOffset;

    const pageHeight =
        document.body.offsetHeight;

    const nearBottom =
        scrollPosition >= pageHeight - 2;

    /* User pushing past bottom */
    if (nearBottom && e.deltaY > 0) {

        glowAmount += e.deltaY * 0.002;

        if (glowAmount > 1) {
            glowAmount = 1;
        }

        glow.style.opacity = glowAmount;

        if (!animating) {
            fadeGlow();
        }
    }

}, { passive: true });

function fadeGlow() {

    animating = true;

    glowAmount *= 0.93;

    glow.style.opacity = glowAmount;

    if (glowAmount > 0.01) {

        requestAnimationFrame(fadeGlow);

    } else {

        glow.style.opacity = 0;
        animating = false;
    }
}
/* Subtle parallax disabled */

// No parallax effect on scroll. This preserves the rest of the page behavior.

/* Fade in on scroll */

const fadeElements = document.querySelectorAll(
    'h6, p, img, .hero-slider, ul.custom-list li'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('fade-visible');

        }

    });

}, {
    threshold: 0.12
});

fadeElements.forEach(element => {
    observer.observe(element);
});

/* Cursor-aware glow */

const cursorGlow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {

    cursorGlow.style.transform =
        `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;

});

// --- FADE CAROUSEL LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.hero-track-fade');
    if (track) {
        // Use the correct selector for items based on your HTML/CSS
        const items = document.querySelectorAll('.carousel-item-fade'); 
        let currentIndex = 0;
        const totalItems = items.length;
        const intervalTime = 2000; // Time between slides in milliseconds (2 seconds)


        // Function to hide all images and then show the target image
        function showSlide(index) {
            if (totalItems === 0) return;

            // 1. Deactivate all items first (fade them out)
            items.forEach((item, i) => {
                item.classList.remove('active');
            });


            // Wait a moment for the fade-out transition to start before activating the next one
            setTimeout(() => {
                // 2. Activate only the target item (fade it in)
                items[index].classList.add('active');
            }, 50); // Small delay ensures smooth visual transition


            currentIndex = index;
        }


        // Initialize: Ensure the first slide is visible when the page loads
        if (totalItems > 0) {
            showSlide(0);
        }


        // Start the carousel loop
        setInterval(() => {
            // Calculate the next index, looping back to 0 if we reach the end
            const nextIndex = (currentIndex + 1) % totalItems;
            showSlide(nextIndex);
        }, intervalTime);
    }
});


