// This file is responsible for managing the display of GitHub projects.
// It includes functions to fetch project data and render it on the projects page.

document.addEventListener('DOMContentLoaded', function() {
    const username = 'YsKara0';
    const projectsContainer = document.getElementById('projects-container');
    
    // List of projects to display (in desired order)
    const projectsList = [
        {
            name: "f2pgames",
            customDescription: "A collection of free-to-play games with modern UI",
            liveUrl: "https://yskara0.github.io/f2pgames/"
        },
        {
            name: "fullstack_restaurant_website",
            customDescription: "A fullstack restaurant website written with TypeScript",
            // liveUrl: "https://yskara0.github.io/Shopping-Cart/"
        },
        {
            name: "depot_management_app",
            customDescription: "Depot management desktop app written in java",
            // liveUrl: "https://yskara0.github.io/CV-Application/"
        },
        {
            name: "ProductMarketingWebsite",
            customDescription: "A product marketing website for a medical product",
             liveUrl: "https://yskara0.github.io/ProductMarketingWebsite/"
        },
        {
            name: "logistics_dbms_project",
            customDescription: "Logistics DBMS project written in Sql",
            // liveUrl: "https://yskara0.github.io/ProductMarketingWebsite/"
        }
        // Add more projects as needed
    ];
    
    // Fetch all repos first
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(allRepos => {
            // Create a map for easy lookup
            const repoMap = {};
            allRepos.forEach(repo => {
                repoMap[repo.name] = repo;
            });
            
            // Display projects in the order specified
            projectsList.forEach(project => {
                const repoData = repoMap[project.name] || {};
                
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                
                // Use custom description if provided, otherwise use GitHub description
                const description = project.customDescription || repoData.description || 'No description available';
                
                // Create buttons container
                const buttonsHTML = `
                    <div class="project-buttons">
                        <a href="https://github.com/${username}/${project.name}" target="_blank" class="repo-link">View on GitHub</a>
                        ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="live-link">View Live</a>` : ''}
                    </div>
                `;
                
                projectCard.innerHTML = `
                    <h3>${project.name}</h3>
                    <p>${description}</p>
                    <div class="repo-details">
                        <span>${repoData.language || 'Various'}</span>
                        <span>⭐ ${repoData.stargazers_count || 0}</span>
                        <span>🍴 ${repoData.forks_count || 0}</span>
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