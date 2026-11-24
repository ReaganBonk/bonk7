// Bonk7: swap ERPNext's app icon in the top-left corner for the Bonk icon on every desk page.
(function () {
  const ICON = "/assets/bonk7/images/bonk7-icon.svg";
  function swap() {
    document.querySelectorAll("img").forEach((img) => {
      if (img.classList.contains("bonk7-logo")) return;
      const r = img.getBoundingClientRect();
      const src = img.getAttribute("src") || "";
      if (r.width && r.width <= 48 && r.top < 90 && r.left < 140 && !/\/files\/|avatar/i.test(src)) {
        img.src = ICON; img.classList.add("bonk7-logo");
      }
    });
    const fav = document.querySelector('link[rel~="icon"]');
    if (fav && !fav.href.endsWith(ICON)) fav.href = ICON;
    if (document.title && document.title.indexOf("ERPNext") !== -1) document.title = document.title.replace("ERPNext", "Bonk7");
  }
  function start() {
    swap();
    new MutationObserver(swap).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
