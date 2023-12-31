// Populate HTML elements with the data
document.getElementById("dean-name").textContent = KAL_Dean.name;
document.getElementById("dean-title").textContent = KAL_Dean.title;
document.getElementById("dean-department").textContent = KAL_Dean.department;
document.getElementById("dean-photo").src = KAL_Dean.photo;
document.getElementById("dean-phone").href = "tel:" + KAL_Dean.phone;
document.getElementById("dean-phone").lastChild.textContent = KAL_Dean.contact;
document.getElementById("dean-email").href = "mailto:" + KAL_Dean.email;
document.getElementById("dean-email").lastChild.textContent = KAL_Dean.email;
document.getElementById("dean-website").href = KAL_Dean.website;
document.getElementById("dean-website").lastChild.textContent = KAL_Dean.website;
document.getElementById("dean-message").textContent = KAL_Dean.message;

const deanMessage = KAL_Dean.message.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('');

document.getElementById("dean-message").innerHTML = deanMessage;



document.getElementById("intro-text").textContent = KAL_Intro;

document.getElementById("vision-title").textContent = KAL_Overview.vision.title;
document.getElementById("vision-text").textContent = KAL_Overview.vision.text;
document.getElementById("vision-image").src = KAL_Overview.vision.image;

document.getElementById("objectives-title").textContent = KAL_Overview.objectives.title;
const objectivesList = document.getElementById("objectives-list");
KAL_Overview.objectives.list.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    objectivesList.appendChild(li);
});
document.getElementById("objectives-image").src = KAL_Overview.objectives.image;

document.getElementById("mission-title").textContent = KAL_Overview.mission.title;
document.getElementById("mission-text").textContent = KAL_Overview.mission.text;
document.getElementById("mission-image").src = KAL_Overview.mission.image;



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
  createStaffCards(KAL_Admin, "kalAdmin");
  createStaffCards(KAL_Academic, "kalAcademic");
  
  


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
      const correspondingCourses = KAL_Courses.filter(course => course.label === boxLabel);
      toggleTableVisibility(correspondingCourses);
    });
  });
  
  // Event listener for table header click (to hide the table when clicked again)
  const tableHeader = document.querySelector('th');
  tableHeader.addEventListener('click', () => {
    const tableBody = document.querySelector('.courses-table tbody');
    tableBody.style.display = 'none';
  });
  
    
  
  //....................................................
  
  
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
  document.querySelector('.courses-table tbody').innerHTML = generateTableRows(KAL_Courses);
  
  
  
  //....................................................
  
  
  
    // Scroll to the top of the page when the top button is clicked
    document.querySelector('.top-button').addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    // Open the map on clicking the address
    var addressElement = document.querySelector('.info .address');
    addressElement.addEventListener('click', function() {
      window.open('https://www.google.com/maps?q=Islamic+University+of+Maldives');
    });
  
    // Dial the phone number on clicking
    var phoneNumberElement = document.querySelector('.info .address span:nth-child(5) p');
    phoneNumberElement.addEventListener('click', function() {
      window.open('tel:302-100');
    });
  
    // Open email client on clicking the email address
    var emailElement = document.querySelector('.info .address span:last-child p');
    emailElement.addEventListener('click', function() {
      window.location.href = 'mailto:info@ium.edu.mv';
    });
    