import { renderHeaderGitHubInfo } from "./renderheader.js";

function showHeaderGitHubInfo() {
  const gitHubUser = JSON.parse(localStorage.getItem("gitHubUser"));
  renderHeaderGitHubInfo(gitHubUser);
}

function handleNavigation() {
  const changeUserButton = document.querySelector(".profile__header>button");

  changeUserButton.addEventListener("click", () => {
    location.replace("../../");
  });
}
showHeaderGitHubInfo();
handleNavigation();
