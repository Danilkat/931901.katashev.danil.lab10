const curtain = document.querySelector('.curtain');
const lampTop = document.querySelector('.top');
const lightElems = document.querySelectorAll('.light');
const bird = document.querySelector('.bird');
const rabbit = document.querySelector('.rabbit');

toggleLight = () => {
  lightElems.forEach(lightElem => {
    if (lightElem.classList.contains("fade-in")) {
      lightElem.classList.add("fade-out");
      setTimeout(function()
      {
        lightElem.classList.remove("fade-in");
      }, 200);
    } else {
      lightElem.classList.add("fade-in");
      setTimeout(function()
      {
        lightElem.classList.remove("fade-out");
      }, 200);
    }
  });
}

hidElem = (e, callback) => {

}

unhidElem = (e, callback) => {

}

curtain.addEventListener('click', (e) => {
  e.currentTarget.style["top"] = "-100vh";
}, { once: true });

lampTop.addEventListener('click', toggleLight);

rabbit.addEventListener('click', () => {
  rabbit.style.bottom = "10px";
  setTimeout(function()
  {
    bird.style.bottom = "130px";
  }, 500);
})

bird.addEventListener('click', () => {
  bird.style.bottom = "10px";
  setTimeout(function()
  {
    rabbit.style.bottom = "130px";
  }, 500);
})