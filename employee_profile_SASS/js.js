function toggleDescription() {
  var description = document.getElementById("matual-connection");
  if (description.style.display === "none") {
    description.style.display = "block";
  } else {
    description.style.display = "none";
  }
}


function call(name) {
    return document.querySelector(name);
  }
  
  const night = call("#dark");
  const light = call("#light");
  
  night.addEventListener("click", () => {
    night.style.display = "none";
    light.style.display = "block";
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark-theme");
  });
  
  light.addEventListener("click", () => {
    night.style.display = "block";
    light.style.display = "none";
    document.body.classList.remove("dark-theme");
    localStorage.removeItem("theme");
  });
  
  function checkTheme() {
    const localStorageTheme = localStorage.getItem("theme");
  
    if (localStorageTheme !== null && localStorageTheme === "dark-theme") {
      document.body.classList.add("dark-theme");
    }
  }
  
  checkTheme();



  // ------- for the see more and les ------