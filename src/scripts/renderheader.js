export function renderHeaderGitHubInfo(gitHubUser) {
  // const profileDiv = document.querySelector(".profile_div");
  // const imgProfile = profileDiv.querySelector("img");
  // const paragraphDiv = profileDiv.querySelector("p");
  const imgProfile = document.querySelector("img");
  const paragraphDiv = document.querySelector("p");
  imgProfile.src = gitHubUser.avatar_url;
  paragraphDiv.innerText = gitHubUser.name || gitHubUser.login;
}
// ul apenas para fazer o append
// const repositoriesArray = JSON.parse(localStorage.getItem("gitHubRepositorie"));
export function renderRepositories(repositories) {
  const unorderedRepositorieList = document.querySelector(".profile__ul");
  repositories.forEach((repositorie) => {
    const listItemRepositorie = document.createElement("li");
    const repositorieTitle = document.createElement("h4");
    const paragraphRepositorie = document.createElement("p");
    const anchorRepositorie = document.createElement("a");

    repositorieTitle.innerText = repositorie.name;

    if (paragraphRepositorie.innerText == null) {
      paragraphRepositorie.innerText = "Repositório sem descrição";
    } else {
      paragraphRepositorie.innerText = repositorie.description;
    }

    anchorRepositorie.innerText = "Repositório";
    anchorRepositorie.href = repositorie.html_url;
    anchorRepositorie.target = "_blanck";

    listItemRepositorie.append(
      repositorieTitle,
      paragraphRepositorie,
      anchorRepositorie
    );
    unorderedRepositorieList.append(listItemRepositorie);
  });
}

//name
// description
// html_url
