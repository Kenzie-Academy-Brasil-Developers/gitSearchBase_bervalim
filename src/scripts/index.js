import { searchGitHubUser, searchGitHubRepositorie } from "./requests.js";

function handleSearchGitHubUser() {
  const inputGitHubUser = document.querySelector(".index__input");
  const buttonGitHubUser = document.querySelector(".index__button");
  const spinner = document.querySelector(".spinner");

  buttonGitHubUser.addEventListener("click", () => {
    spinner.classList.remove("hidden");
    setTimeout(() => {
      const userGitHubName = inputGitHubUser.value;
      localStorage.setItem("userName", userGitHubName);
      searchGitHubUser(userGitHubName);
      spinner.classList.add("hidden");
    }, 2000);
  });
}
handleSearchGitHubUser();
// const repositoriesArray = JSON.parse(localStorage.getItem("gitHubRepositorie"));
// renderRepositories(repositoriesArray);
