
document.addEventListener("DOMContentLoaded", () => {
  // Placeholder for any interactive elements
});


// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Collapsible content toggling
document.querySelectorAll('.collapsible-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.classList.toggle('open');
    button.textContent = content.classList.contains('open') ? "Read Less" : "Read More";
  });
});



document.addEventListener("DOMContentLoaded", function () {
  function enterUniverse() {
    const target = document.getElementById("eert-philosophy");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Target section #eert-philosophy not found.");
    }
  }

  // Attach function globally
  window.enterUniverse = enterUniverse;
});
