const themeSwitcher = document.querySelector("button");
const toggleBox =document.querySelector(".toggle-box")
let lightTheme = localStorage.getItem("lightTheme");

const enableLightTheme = () => {
  document.documentElement.classList.add("theme-light");
  themeSwitcher.style.transform = "translateX(30px)";
  // update theme in LS
  localStorage.setItem("lightTheme", "enabled");
}
const disableLightTheme = () => {
  document.documentElement.classList.remove("theme-light");
  themeSwitcher.style.transform = "translateX(0px)";
  // update theme in LS
  localStorage.setItem("lightTheme", null);
}

if (lightTheme === "enabled") {
  enableLightTheme();
}

toggleBox.addEventListener("click", (e) => {
lightTheme = localStorage.getItem("lightTheme");
if (lightTheme !== "enabled") {
  enableLightTheme();
} else {
  disableLightTheme();
}});

