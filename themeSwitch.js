const themeSwitch= document.querySelector("button");

themeSwitch.addEventListener("click", (e) => {
  if(e.target.classList.contains("dark")) {
    themeSwitch.style.transform = "translateX(0px)"
    
  } else {
    themeSwitch.style.transform = "translateX(30px)"
  }
  
})
console.log(themeSwitch)