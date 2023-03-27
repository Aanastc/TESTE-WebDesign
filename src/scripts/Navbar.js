window.onload = function () {
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector("#btn");
  const logoImg = document.querySelector("#logo");

  closeBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    menuBtnChange();
  });

  function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      logoImg.setAttribute("src", "../assets/icons/Logo.svg");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      logoImg.setAttribute("src", "../assets/icons/logoMenor.svg");
    }
  }
};
