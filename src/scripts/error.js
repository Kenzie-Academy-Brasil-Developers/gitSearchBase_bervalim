function handleNavigationError() {
  const changeUserButton = document.querySelector(".error__div-first>button");

  changeUserButton.addEventListener("click", () => {
    location.replace("../../");
  });
}
handleNavigationError();
