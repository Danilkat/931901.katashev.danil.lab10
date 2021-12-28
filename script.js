const curtain = document.querySelector('.curtain');

curtain.addEventListener('click', (e) => {
  e.currentTarget.style["top"] = "-100vh";
}, { once: true });