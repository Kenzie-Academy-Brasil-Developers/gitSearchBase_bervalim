import { searchGitHubUser } from "./requests.js";

function handleSearchGitHubUser() {
  const inputGitHubUser = document.querySelector(".index__input");
  const buttonGitHubUser = document.querySelector(".index__button");
  const spinner = document.querySelector(".spinner");

  buttonGitHubUser.addEventListener("click", () => {
    spinner.classList.remove("hidden");
    setTimeout(() => {
      const userGitHubName = inputGitHubUser.value;
      if (userGitHubName == "") {
        location.replace("../../");
      }
      localStorage.setItem("userName", userGitHubName);
      searchGitHubUser(userGitHubName);
      spinner.classList.add("hidden");
    }, 1000);
  });
}
handleSearchGitHubUser();
// const repositoriesArray = JSON.parse(localStorage.getItem("gitHubRepositorie"));
// renderRepositories(repositoriesArray);
