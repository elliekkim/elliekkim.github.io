(() => {
  const motion = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) and (forced-colors: none)");
  const root = document.documentElement;
  let idleTimer;

  function rest() {
    clearTimeout(idleTimer);
    root.classList.remove("hand-moving");
  }

  document.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse" || !motion.matches) return;
    root.classList.add("hand-moving");
    clearTimeout(idleTimer);
    idleTimer = setTimeout(rest, 140);
  }, { passive: true });

  root.addEventListener("pointerleave", rest);
  window.addEventListener("blur", rest);
  window.addEventListener("pagehide", rest);
})();
