// GSAP Page Entry Animation
window.addEventListener("load", () => {
  gsap.to(".fade-in", { duration: 1, opacity: 1, y: 0, ease: "power2.out" });
});

// Optional: add exit animation for smooth page switching
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");
    if (href && href.endsWith(".html")) {
      e.preventDefault();
      gsap.to(".fade-in", {
        duration: 0.5,
        opacity: 0,
        y: -20,
        onComplete: () => window.location = href
      });
    }
  });
});
