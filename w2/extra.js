const activateCSSBtn = document.getElementById("activateCSS");
const cssLink = document.querySelector("link[href='main.css']");
const extraPageSection = document.getElementById("extraPageSection");
const anchor = addCSSExtraPage();
let isCSSOn = JSON.parse(sessionStorage.getItem("isCSSOn"));
isCSSOn === null || (isCSSOn && addCSS(false));
activateCSSBtn.addEventListener("click", () => {
  let isCSSOn = JSON.parse(sessionStorage.getItem("isCSSOn"));
  isCSSOn ? manageStorage("on") : manageStorage("off");
});
JSON.parse(sessionStorage.getItem("isCSSOn")) && addCSS();

function manageStorage(action) {
  if (action === "on") {
    sessionStorage.setItem("isCSSOn", false);
    isCSSOn = JSON.parse(sessionStorage.getItem("isCSSOn"));
    addCSS(true);
  } else {
    sessionStorage.setItem("isCSSOn", true);
    isCSSOn = JSON.parse(sessionStorage.getItem("isCSSOn"));
    addCSS(false);
  }
}
function addCSS(isCSSOn) {
  if (isCSSOn) {
    cssLink.setAttribute("href", "main.css");
    activateCSSBtn.innerHTML = "Turn on Sneak Peek of CSS";
    extraPageSection.removeChild(anchor);
  } else {
    cssLink.setAttribute("href", "extra.css");
    activateCSSBtn.innerHTML = "Turn off Sneak Peek of CSS";
    extraPageSection.appendChild(anchor);
  }
}
function addCSSExtraPage() {
  const text = document.createTextNode("Learn what CSS I used");
  const anchor = document.createElement("a");
  anchor.href = "extra.html";
  anchor.appendChild(text);
  return anchor;
}
