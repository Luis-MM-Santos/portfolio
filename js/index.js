async function fetchRepos() {
    try {
      const response = await fetch("https://api.github.com/users/Luis-MM-Santos/repos");
      const repos = await response.json();
  
      // Sort by most stars and exclude forks
      const filtered = repos
        .filter(repo => !repo.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count);
  
      const repoList = document.getElementById("repo-list");
  
      filtered.forEach(repo => {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong><a href="${repo.html_url}" target="_blank">${repo.name}</a></strong>
          <p>${repo.description || "No description"}</p>
          ⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}
        `;
        repoList.appendChild(li);
      });
  
    } catch (error) {
      console.error("Failed to fetch repos:", error);
      document.getElementById("repo-list").innerHTML = "<li>Could not load repositories.</li>";
    }
  }
  
  // Call the function on page load
  fetchRepos();