const baseUrl = "https://api.github.com/users";

export async function searchGitHubUser(userGitHubName) {
  const userName = await fetch(`${baseUrl}/${userGitHubName}`, {
    method: "GET",
  }).then(async (response) => {
    if (response.ok) {
      const responseConvert = await response.json();
      console.log(responseConvert);
      localStorage.setItem("gitHubUser", JSON.stringify(responseConvert));
      await searchGitHubRepositorie(userGitHubName);
      location.replace("./src/pages/profile.html");
    } else {
      location.replace("./src/pages/error.html");
    }
  });

  return userName;
}

export async function searchGitHubRepositorie(userGitHubName) {
  const repositorie = await fetch(`${baseUrl}/${userGitHubName}/repos`, {
    method: "GET",
  }).then(async (response) => {
    if (response.ok) {
      const responseConvert = await response.json();
      console.log(responseConvert);
      localStorage.setItem(
        "gitHubRepositorie",
        JSON.stringify(responseConvert)
      );
    }
  });
  return repositorie;
}

// searchGitHubRepositorie(test2);
