// This file is responsible for managing the display of GitHub projects.
// It includes functions to fetch project data and render it on the projects page.

document.addEventListener('DOMContentLoaded', function() {
    const username = 'YsKara0';
    const projectsContainer = document.getElementById('projects-container');
    
    // Fetch GitHub repositories
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repos => {
            // Sort by updated date (newest first)
            repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            
            // Display only the first 6 repos or fewer if there aren't 6
            const featuredRepos = repos.slice(0, 6);
            
            featuredRepos.forEach(repo => {
                // Manual override for specific projects
                if (repo.name === 'f2pgames') {
                    repo.homepage = 'https://yskara0.github.io/f2pgames/';
                }
                
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                
                // Create buttons container
                const buttonsHTML = `
                    <div class="project-buttons">
                        <a href="${repo.html_url}" target="_blank" class="repo-link">View on GitHub</a>
                        ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" class="live-link">View Live</a>` : ''}
                    </div>
                `;
                
                projectCard.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'No description available'}</p>
                    <div class="repo-details">
                        <span>${repo.language || 'Various'}</span>
                        <span>⭐ ${repo.stargazers_count}</span>
                        <span>🍴 ${repo.forks_count}</span>
                    </div>
                    ${buttonsHTML}
                `;
                
                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(error => {
            projectsContainer.innerHTML = `<p class="error">Failed to load projects. ${error}</p>`;
            console.error('Error fetching repositories:', error);
        });
});