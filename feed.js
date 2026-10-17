

let htmlCode = '';


for (let project of projects) {
  let owner = getProfile(project.ownerID);

  let tagshtml = '';

  for (let skill of project.skills.split(',')) {
    tagshtml = tagshtml + `<span class="tag">${skill.trim()}</span>`;
  }

  htmlCode =
    htmlCode +
    `<a class="card-link" href="project.html?id=${project.id}">
    <div class="project-card">
      <div class="card-header">
        <div class="avatar">${initial(owner.name)}</div>
        <div class="card-info">
          <h3 class="card-title">${project.title}</h3>
          <p class="card-owner">Posted by ${owner.name}</p>
        </div>
      </div>

      <p class="card-description">${project.description}</p>

      <div class="card-tags">
      ${tagshtml}
      </div>

      <p class="card-footer">${project.time}, ${project.location}, ${project.groupSize} people</p>
    </div>
  </a>
  `;
}

document.getElementById('feed').innerHTML = htmlCode;