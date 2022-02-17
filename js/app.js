(function IIFE() {
  function menuFunc() {
    let navBar = document.getElementById("navBar");
    let navBarToggler = document.getElementById("navBarToggler");

    navBarToggler.addEventListener("click", () => {
      navBar.classList.toggle("show");
    });
  }

  function Init() {
    menuFunc();
  }

  window.onload = Init;
})();
