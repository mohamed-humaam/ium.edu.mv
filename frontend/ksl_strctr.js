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
