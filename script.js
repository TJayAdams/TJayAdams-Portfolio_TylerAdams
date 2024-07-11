var mode = document.getElementById("mode");

mode.addEventListener("change", (e) => {
  if (e.target.checked === true) {
    document.documentElement.style.setProperty("--main-color", "white");
    document.documentElement.style.setProperty("--secondary-color", "black");

  }
  if (e.target.checked === false) {
    document.documentElement.style.setProperty("--main-color", "#161616");
    document.documentElement.style.setProperty("--secondary-color", "#03adea");

  }
});