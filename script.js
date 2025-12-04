// ===============================
// 🌟 Splash + Typing + Scroll Animation Script
// ===============================

window.addEventListener("load", () => {
  const splash = document.querySelector(".splash-screen");
  const typingText = "Muhammad Sharif Buriro";
  const nameElement = document.querySelector(".typing");
  const splashText = document.querySelector(".typing-text");

  let index = 0;
  let splashIndex = 0;

  // Clear old text (important fix)
  splashText.textContent = "";
  nameElement.textContent = "";

  // Splash Typing Animation
  function splashTyping() {
    if (splashIndex < typingText.length) {
      splashText.textContent += typingText.charAt(splashIndex);
      splashIndex++;
      setTimeout(splashTyping, 100);
    }
  }
  splashTyping();

  // Hide splash and show hero after animation
  setTimeout(() => {
    splash.classList.add("hide-splash");

    // Typing Animation on Main Header
    function typeEffect() {
      if (index < typingText.length) {
        nameElement.textContent += typingText.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
      }
    }
    typeEffect();
  }, 3000); // Splash duration
});

// ===============================
// 🌈 ScrollReveal Animations
// ===============================
ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 1200,
  delay: 200
});

ScrollReveal().reveal(".left-content", { origin: "left" });
ScrollReveal().reveal(".right-content", { origin: "right" });
ScrollReveal().reveal(".about-section", { origin: "bottom" });
ScrollReveal().reveal(".experience-section", { origin: "top" });
ScrollReveal().reveal(".project-card", { interval: 200, origin: "bottom" });
ScrollReveal().reveal(".contact", { origin: "bottom" });

// ===============================
// 🌟 Smooth Fade-Out for Splash (CSS via JS)
// ===============================
const style = document.createElement("style");
style.textContent = `
  .hide-splash {
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s ease, visibility 1s ease;
  }
`;
document.head.appendChild(style);
