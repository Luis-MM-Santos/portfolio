function render(projects) {
    const container = document.createElement('div');
    container.className = 'row row-cols-1 row-cols-md-3 g-4';
  
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'col';
  
      card.innerHTML = `
        <div class="card h-100 text-bg-dark border-secondary">
          <div class="card-body">
            <h5 class="card-title">
              <i class="bi bi-github"></i> 
              <a href="${project.html_url}" target="_blank" class="text-decoration-none text-light">
                ${project.name}
              </a>
            </h5>
            <p class="card-text">${project.description || "No description"}</p>
          </div>
        </div>
      `;
  
      container.appendChild(card);
    });
  
    const mainContainer = document.getElementById('container');
    mainContainer.innerHTML = ''; // Clear previous content
    mainContainer.appendChild(container);
  }
  
  export default {
    render
  };
  