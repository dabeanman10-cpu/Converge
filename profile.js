let params = new URLSearchParams(window.location.search);
let profileId = Number(params.get('id'));
let htmlCode = '';
profilehtml = '';
let myprojects = getProfileProjects(profileId);
let profile = getProfile(profileId);
for (let myproject of myprojects) {
  profilehtml =
    profilehtml +
    `
  <a class = "myprofile" href = "project.html?id=${myproject.id}">
  <p>${myproject.title}</p>
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
      <div class="avatar">${initial(profile.name)}</div>
      <h3 class="card-title">${profile.name}</h3>
      <p class="card-owner"> ${profile.username}</p>
  </div>
</div>    
  <p class="card-description">${profile.bio}</p>
  <p class="time">Email</p>
  <p class="times">${profile.email}</p>
  <p class="time">Links</p>
  <p class="times">${profile.links}</p>
  <p>${profile.links}</p>
  <div class = "projectList">${profilehtml}</div>

</div>

  `;

document.getElementById('profile').innerHTML = htmlCode;
