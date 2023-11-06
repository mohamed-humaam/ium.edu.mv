// Populate HTML elements with the data
document.getElementById("dean-name").textContent = KSL_Dean.name;
document.getElementById("dean-title").textContent = KSL_Dean.title;
document.getElementById("dean-department").textContent = KSL_Dean.department;
document.getElementById("dean-photo").src = KSL_Dean.photo;
document.getElementById("dean-phone").href = "tel:" + KSL_Dean.phone;
document.getElementById("dean-phone").lastChild.textContent = KSL_Dean.phone;
document.getElementById("dean-email").href = "mailto:" + KSL_Dean.email;
document.getElementById("dean-email").lastChild.textContent = KSL_Dean.email;
document.getElementById("dean-website").href = KSL_Dean.website;
document.getElementById("dean-website").lastChild.textContent = KSL_Dean.website;
document.getElementById("dean-message").textContent = KSL_Dean.message;

const deanMessage = KSL_Dean.message.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('');

document.getElementById("dean-message").innerHTML = deanMessage;



document.getElementById("intro-text").textContent = KSL_Intro;

document.getElementById("vision-title").textContent = KSL_Overview.vision.title;
document.getElementById("vision-text").textContent = KSL_Overview.vision.text;
document.getElementById("vision-image").src = KSL_Overview.vision.image;

document.getElementById("objectives-title").textContent = KSL_Overview.objectives.title;
const objectivesList = document.getElementById("objectives-list");
KSL_Overview.objectives.list.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    objectivesList.appendChild(li);
});
document.getElementById("objectives-image").src = KSL_Overview.objectives.image;

document.getElementById("mission-title").textContent = KSL_Overview.mission.title;
document.getElementById("mission-text").textContent = KSL_Overview.mission.text;
document.getElementById("mission-image").src = KSL_Overview.mission.image;



// Function to create staff cards
function createStaffCards(staffData, containerId) {
  const staffContainer = document.getElementById(containerId);

  staffData.forEach((staff) => {
      const card = document.createElement("div");
      card.classList.add("staff-card");

      const image = document.createElement("img");
      image.src = staff.photo;
      image.alt = staff.name;
      card.appendChild(image);

      const name = document.createElement("div");
      name.classList.add("staff-name");
      name.textContent = staff.name;
      card.appendChild(name);

      const occupation = document.createElement("div");
      occupation.classList.add("staff-occupation");
      occupation.textContent = staff.occupation;
      card.appendChild(occupation);

      staffContainer.appendChild(card);
  });
}

// Call the function to populate the staff cards
createStaffCards(KSL_Admin, "kslAdmin");
createStaffCards(KSL_Academic, "kslAcademic");

// Function to toggle visibility of the course table
function toggleTableVisibility(data) {
  const tableBody = document.querySelector('.courses-table tbody');
  const coursesSection = document.getElementById('courses');

  if (tableBody.style.display === 'none') {
      tableBody.innerHTML = generateTableRows(data);
      tableBody.style.display = 'table-row-group';
      coursesSection.classList.add('show-table');
  } else {
      tableBody.style.display = 'none';
      coursesSection.classList.remove('show-table');
  }
}

// Function to generate table rows for course data
function generateTableRows(data) {
  let html = '';
  html += `
  <tr>
    <th>Course Name</th>
    <th>MNQF Level</th>
    <th>Course Duration</th>
    <th>Medium of Instruction</th>
    <th>Course Fee</th>
    <th>Kulliyyah/Center</th>
  </tr>
`;
  data.forEach((course) => {
      html += `
    <tr>
      <td>${course.name}</td>
      <td>${course.mnqfLevel}</td>
      <td>${course.duration}</td>
      <td>${course.medium}</td>
      <td>${course.fee}</td>
      <td>${course.center}</td>
    </tr>
  `;
  });
  return html;
}

// Event listener for each box click
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
  box.addEventListener('click', () => {
      const boxLabel = box.textContent.trim();
      const correspondingCourses = KSL_Courses.filter(course => course.label === boxLabel);
      toggleTableVisibility(correspondingCourses);
  });
});

// Event listener for table header click (to hide the table when clicked again)
const tableHeader = document.querySelector('th');
tableHeader.addEventListener('click', () => {
  const tableBody = document.querySelector('.courses-table tbody');
  tableBody.style.display = 'none';
});

// Function to handle the click event on a course row
function handleCourseClick(courseName) {
  // Encode the course name to handle special characters in the URL
  const encodedCourseName = encodeURIComponent(courseName);
  const courseDetailsURL = `course_details.html?courseName=${encodedCourseName}`;
  window.open(courseDetailsURL, '_self');
}

// Function to generate table rows for course data
function generateTableRows(data) {
  let html = '';
  data.forEach((course) => {
      html += `
    <tr onclick="handleCourseClick('${course.name}')">
      <td>${course.name}</td>
      <td>${course.mnqfLevel}</td>
      <td>${course.duration}</td>
      <td>${course.medium}</td>
      <td>${course.fee}</td>
      <td>${course.center}</td>
    </tr>
  `;
  });
  return html;
}

// Call the function to generate table rows
document.querySelector('.courses-table tbody').innerHTML = generateTableRows(KSL_Courses);

// Function to fetch and display sections
function fetchAndDisplaySections() {
  fetch('/api/sections/')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          // You now have the Section data in the 'data' variable
          console.log(data);
          // You can loop through the data and display it in your frontend
          data.forEach(section => {
              // Display section information, e.g., in the browser's console
              console.log(`Section Name: ${section.name}`);
              console.log(`Message: ${section.message}`);
              // You can update your frontend to display this information as needed
          });
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
}

// Call the function to fetch and display sections
fetchAndDisplaySections();
