let params = new URLSearchParams(window.location.search);
let projectId = Number(params.get('id'));
let htmlCode = '';
membersHTML = '';

let project = getProject(projectId);
let owner = getProfile(project.ownerID);

for (let memberID of project.memberIDs) {
  let member = getProfile(memberID);
  membersHTML =
    membersHTML +
    `
  <a class = "member" href = "profile.html?id=${member.id}">
  <div class = "avatar">${initial(member.name)}</div>
  <p class = "member-name">${member.name}</p>
  </a>
  `;
}

htmlCode =
  htmlCode +
  `<div class="headersection">
  <div class="projects">
  <div class="page2-card">
    <div class="page2-header">
      <div class="card-info">
      <h3 class="card-title">${project.title}</h3>
      <a class="card-link" href="profile.html?id=${owner.id}">
      <p class="card-owner"> Posted by ${owner.name}</p>
      </a>
  </div>
</div>    
  <p class="card-description">${project.description}</p>
  
  <p class="project-skills">Project skills</p>
  <div class="card-tags">
        ${project.skills}
      </div>
  <p class="time">Time</p>
  <p class="times">${project.time}</p>
  <p class="time">Location</p>
  <p class="times">${project.location}</p>
  <p class="time">People</p>
  <p class="times">${project.groupSize}</p>
  <p class = "time">Members</p>
  <div class="members-list">${membersHTML}</div>

</div>

<button type="button" class="otherbutton">Apply Now!</button>

  `;

document.getElementById('project').innerHTML = htmlCode;
