async function fetchRepos() {
  try {
    const response = await fetch("https://api.github.com/users/Luis-MM-Santos/repos");
    const repos = await response.json();

   
    const filtered = repos
      .filter(repo => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);

    return filtered; 
  } catch (error) {
    console.error("Failed to fetch repos:", error);
    return []; 
  }
}

export default {
  fetchRepos
};
