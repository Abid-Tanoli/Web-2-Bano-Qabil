const API_URL = "https://api.github.com/users/";
    const REPO_URL = "https://api.github.com/users/";

    const form = document.getElementById("form");
    const search = document.getElementById("search");
    const main = document.getElementById("main");
    const toggle = document.getElementById("dark-toggle");
    const historyDiv = document.getElementById("history");
    const filterInput = document.getElementById("filter");
    const sortSelect = document.getElementById("sort");

    let currentUserData = null;
    let currentRepos = [];
    let searchHistory = [];

    toggle.addEventListener("change", () => {
      document.body.classList.toggle("dark");
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = search.value.trim();
      if (username) {
        main.innerHTML = `<div class="loader"></div>`;
        try {
          const userData = await fetchUser(username);
          const repos = await fetchRepos(username);
          currentUserData = userData;
          currentRepos = repos;
          updateSearchHistory(username);
          showUser(userData, repos);
        } catch {
          main.innerHTML = `<p class="error">❌ User not found or network error</p>`;
        }
      }
    });

    async function fetchUser(username) {
      const res = await fetch(`${API_URL}${username}`);
      if (!res.ok) throw new Error("User not found");
      return res.json();
    }

    async function fetchRepos(username) {
      const res = await fetch(`${REPO_URL}${username}/repos?sort=updated`);
      if (!res.ok) return [];
      return res.json();
    }

    function showUser(user, repos) {
      let entries = Object.entries(user);

      const filterText = filterInput.value.trim().toLowerCase();
      if (filterText) {
        entries = entries.filter(([key]) => key.includes(filterText));
      }

      const sortOrder = sortSelect.value;
      if (sortOrder === "asc") {
        entries.sort(([a], [b]) => a.localeCompare(b));
      } else if (sortOrder === "desc") {
        entries.sort(([a], [b]) => b.localeCompare(a));
      }

      const dataHTML = entries.map(([key, value]) => {
        if (typeof value === "object" && value !== null) {
          value = JSON.stringify(value);
        }
        return `<tr><td>${key}</td><td>${value}</td></tr>`;
      }).join("");

      const repoHTML = repos.map(repo => `
        <li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>
      `).join("");

      const cardHTML = `
        <div class="card">
          <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
          <h2>${user.name || user.login}</h2>

          <table class="user-data">
            <thead><tr><th>Property</th><th>Value</th></tr></thead>
            <tbody>${dataHTML}</tbody>
          </table>

          <h3>🔽 Recent Repositories</h3>
          <ul class="repo-list">${repoHTML}</ul>
        </div>
      `;
      main.innerHTML = cardHTML;
    }

    function updateSearchHistory(username) {
      if (!searchHistory.includes(username)) {
        searchHistory.unshift(username);
        if (searchHistory.length > 5) searchHistory.pop();
      }
      historyDiv.innerHTML = searchHistory.map(user => `
        <button onclick="reSearch('${user}')">${user}</button>
      `).join("");
    }

    function reSearch(username) {
      search.value = username;
      form.dispatchEvent(new Event("submit"));
    }

    filterInput.addEventListener("input", () => {
      if (currentUserData) showUser(currentUserData, currentRepos);
    });

    sortSelect.addEventListener("change", () => {
      if (currentUserData) showUser(currentUserData, currentRepos);
    });