const themeSwitch= document.querySelector("button");

themeSwitch.addEventListener("click", (e) => {
  if(e.target.classList.contains("dark")) {
    themeSwitch.style.transform = "translateX(0px)";
    themeSwitch.classList.remove("dark");

  } else {
    themeSwitch.classList.add("dark");
    themeSwitch.style.transform = "translateX(30px)";
    e.target.parentElement.style.background = "linear gradient (to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
  }
  
})
console.log(themeSwitch)