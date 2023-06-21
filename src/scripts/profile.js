import { renderHeaderGitHubInfo } from "./renderheader.js";
import { renderRepositories } from "./renderheader.js";
function showHeaderGitHubInfo() {
  const gitHubUser = JSON.parse(localStorage.getItem("gitHubUser"));
  renderHeaderGitHubInfo(gitHubUser);
}

function showRenderRepositorieInfo() {
  const gitHubRepositorie = JSON.parse(
    localStorage.getItem("gitHubRepositorie")
  );
  renderRepositories(gitHubRepositorie);
}

function handleNavigation() {
  const changeUserButton = document.querySelector(".profile__header>button");

  changeUserButton.addEventListener("click", () => {
    location.replace("../../");
  });
}
showHeaderGitHubInfo();
handleNavigation();
showRenderRepositorieInfo();
