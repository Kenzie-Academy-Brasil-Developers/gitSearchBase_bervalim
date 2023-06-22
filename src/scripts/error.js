function handleNavigationError() {
  const changeUserButton = document.querySelector(".error__div-first>button");

  changeUserButton.addEventListener("click", () => {
    localStorage.clear();
    location.replace("../../");
  });
}
handleNavigationError();
