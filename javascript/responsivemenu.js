(function () {
  const hamburgerMenu = document.getElementById("hamburger");
  const respMenuElements = document.querySelectorAll(
    "nav.header-nav, ul.nav-primary"
  );

  function toggleMenu(x) {
    x.classList.toggle("change");
  }

  hamburgerMenu.addEventListener("click", () => {
    toggleMenu(hamburgerMenu);
    for (var i = 0; i < respMenuElements.length; i++) {
      respMenuElements[i].classList.toggle("change");
    }
  });
})();
