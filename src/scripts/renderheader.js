export function renderHeaderGitHubInfo(gitHubUser) {
  // const imgProfile = document.querySelector("img");
  // const paragraphDiv = document.querySelector("p");
  // imgProfile.src = gitHubUser.avatar_url;
  // paragraphDiv.innerText = gitHubUser.name || gitHubUser.login;
  const headerProfile = document.querySelector(".profile__header");
  const divProfile = document.createElement("div");
  const imgProfile = document.createElement("img");
  const paragraphProfile = document.createElement("p");
  const buttonProfile = document.createElement("button");

  divProfile.classList.add("profile_div");
  imgProfile.src = gitHubUser.avatar_url;
  paragraphProfile.innerText = gitHubUser.name || gitHubUser.login;
  buttonProfile.innerHTML = "Trocar de usuário";

  divProfile.append(imgProfile, paragraphProfile);
  headerProfile.append(divProfile, buttonProfile);
}

export function renderRepositories(repositories) {
  const unorderedRepositorieList = document.querySelector(".profile__ul");
  unorderedRepositorieList.innerText = "";
  console.log(repositories);
  repositories.forEach((repositorie) => {
    const listItemRepositorie = document.createElement("li");
    const repositorieTitle = document.createElement("h4");
    const paragraphRepositorie = document.createElement("p");
    const anchorRepositorie = document.createElement("a");

    repositorieTitle.innerText = repositorie.name;

    if (repositorie.description === null) {
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
