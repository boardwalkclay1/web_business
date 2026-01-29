/* CUSTOM CURSOR */
document.addEventListener("mousemove", e => {
  const c = document.getElementById("cursor");
  if (c) {
    c.style.left = e.clientX + "px";
    c.style.top = e.clientY + "px";
  }
});

/* LOADER */
window.onload = () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => loader.style.display = "none", 1500);
  }
};

/* FLOATING BUBBLES */
for (let i = 0; i < 25; i++) {
  let b = document.createElement("div");
  b.className = "bubble";
  b.style.left = Math.random() * 100 + "vw";
  b.style.animationDelay = Math.random() * 5 + "s";
  b.style.animationDuration = 6 + Math.random() * 4 + "s";
  document.body.appendChild(b);
}
