
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav ul");
  const links = [...document.querySelectorAll("nav a")];
  const indicator = document.querySelector(".nav-indicator");

  function moveIndicator(link, instant = false) {
    if (!nav || !indicator || !link) return;
    const a = link.getBoundingClientRect();
    const n = nav.getBoundingClientRect();

    if (instant) indicator.style.transition = "none";
    indicator.style.left = `${a.left - n.left}px`;
    indicator.style.width = `${a.width}px`;

    if (instant) {
      requestAnimationFrame(() => {
        indicator.style.transition =
          "left .45s cubic-bezier(.22,1,.36,1),width .45s cubic-bezier(.22,1,.36,1),opacity .25s ease";
      });
    }
  }

  const active = links.find(a => a.classList.contains("active")) || links[0];

  window.addEventListener("load", () => moveIndicator(active, true));
  window.addEventListener("resize", () => moveIndicator(active, true));

  links.forEach(link => {
    link.addEventListener("mouseenter", () => moveIndicator(link));
    link.addEventListener("focus", () => moveIndicator(link));
  });

  nav?.addEventListener("mouseleave", () => moveIndicator(active));

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.12});

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});
