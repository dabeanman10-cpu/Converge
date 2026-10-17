function getProfile(id) {
  for (let profile of profiles) {
    if (profile.id === id) {
      return profile
    }
  }
}

function getProject(id) {
  for (let project of projects) {
    if (project.id === id) {
      return project
    }
  }
}
function initial(name){
  return name.charAt(0).toUpperCase();
}

function getProfileProjects(profileId) {
  let found = [];
  for (let project of projects) {
    if (isMember(project, profileId)) {
      found.push(project);
    }
  }

  return found;
}

function isMember(project, profileId) {
  for (let memberId of project.memberIDs) {
    if (memberId === profileId) {
      return true;
    }
  }
  return false;
}

function createProject() {
  let titleInput = document.getElementById('title-input').value;
  let despciptionInput = document.getElementById('description-input').value;
  let skillsInput = document.getElementById('skills-input').value;
  let timeInput = document.getElementById('time-input').value;
  let locationInput = document.getElementById('location-input').value;
  let groupSizeInput = document.getElementById('groupSize-input').value;

  let newProject = {
    id: makeNewProjectID(),
    ownerID: currentUserID,
    title: titleInput,
    description: despciptionInput,
    skills: skillsInput,
    time: timeInput,
    location: locationInput,
    groupSize: Number(groupSizeInput),
    memberIDs: [currentUserID]
  };

  projects.push(newProject);

  saveData();

  window.location.href = 'project.html?id=' + newProject.id;
}

function makeNewProjectID() {
  let biggest = 0;
  for (let project of projects) {
    if (project.id > biggest) {
      biggest = project.id
    }
  }
  return biggest + 1
}

function saveData() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

function loadData() {
  let saved = localStorage.getItem('projects');
  if (saved) {
    projects = JSON.parse(saved);
  }
}

function removeMemberFromProject(projectID, userID) {
  let project = getProject(projectID);
  if (project) {
    project.memberIDs = project.memberIDs.filter(id => id !== userID);
    saveData();
    window.location.reload();
  }
}

function addMemberFromProject(projectID, userID) {
  let project = getProject(projectID);
  
  if (project) {
    if (!project.memberIDs.includes(userID)) {
      project.memberIDs.push(userID); 
      saveData();
    }
    window.location.reload();
    loadData();
  }
}
loadData();