import { searchGitHubUser, searchGitHubRepositorie } from "./requests.js";
import { renderRepositories } from "./renderheader.js";
function handleSearchGitHubUser() {
  const inputGitHubUser = document.querySelector(".index__input");
  const buttonGitHubUser = document.querySelector(".index__button");

  buttonGitHubUser.addEventListener("click", () => {
    const userGitHubName = inputGitHubUser.value;
    console.log("teste");
    localStorage.setItem("userName", userGitHubName);
    searchGitHubUser(userGitHubName);
    searchGitHubRepositorie(userGitHubName);
  });
}
handleSearchGitHubUser();
const repositoriesArray = JSON.parse(localStorage.getItem("gitHubRepositorie"));
renderRepositories(repositoriesArray);
