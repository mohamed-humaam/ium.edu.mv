// Sample staff data
const administrativeStaff = [
  {
    name: "Aminath Raaziya",
    occupation: "Administrative Officer",
    photo: "./Images/Faculties/kems/admin.png",
  },
  {
    name: "Ali Ahnaf",
    occupation: "Administrative Officer",
    photo: "./Images/Faculties/kems/admin1.png",
  },
  // Add more administrative staff here as needed
];

const academicStaff = [
  {
    name: "Aishath Sinaau",
    occupation: "Lecturer",
    photo: "./Images/Faculties/kems/lecturer.png",
  },

  // Add more academic staff here as needed
];

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
createStaffCards(administrativeStaff, "adminStaff");
createStaffCards(academicStaff, "academicStaff");





//....................................................







const boxes = document.querySelectorAll('.box');
const tableBody = document.querySelector('tbody');

// Sample course data (replace with your actual data)
const courseData = [
  { name: 'Vaahaka Dhehkumuge Hunaruverikan Dhaskohdhey Course Level 1', mnqfLevel: 'Level 1', duration: '0.5 Years', medium: 'Dhivehi', fee: '900 ރ', center: 'Center for Continuing Education', label: 'Professional Programs' },
  { name: 'Certificate 1 in Basic English', mnqfLevel: 'Level 1', duration: '0.5 Year', medium: 'English', fee: '900 ރ', center: 'Center for Continuing Education', label: 'Professional Programs' },
  { name: 'Certificate 1 in English for General Purpose', mnqfLevel: 'Level 1', duration: '0.5 Year', medium: 'English', fee: '900 ރ', center: 'Center for Continuing Education', label: 'Professional Programs' },
  { name: 'Certificate 2 in English for General Purpose', mnqfLevel: 'Level 2', duration: '0.5 Year', medium: 'English', fee: '2,000 ރ', center: 'Center for Continuing Education', label: 'Professional Programs' },
  { name: 'Certificate 3 in English for General Purpose', mnqfLevel: 'Level 3', duration: '0.5 Year', medium: 'English', fee: '2,300 ރ', center: 'Kulliyyah of Economics & Management Studies', label: 'Under Graduate' },
  { name: 'Associate Degree in Local Governance and Administration', mnqfLevel: 'Level 6', duration: '1 Year', medium: 'English', fee: '20,220 ރ', center: 'Kulliyyah of Economics & Management Studies', label: 'Under Graduate' },
  { name: 'Associate Degree in Human Resources Management', mnqfLevel: 'Level 6', duration: '2 Year', medium: 'English', fee: '24,355 ރ', center: 'Kulliyyah of Economics & Management Studies', label: 'Under Graduate' },
  { name: 'Advance Diploma in Public Financial Management', mnqfLevel: 'Level 6', duration: '2 Year', medium: 'English', fee: '25,575 ރ', center: 'Kulliyyah of Economics & Management Studies', label: 'Under Graduate' },
  { name: 'Diploma in Local Governance and Administration', mnqfLevel: 'Level 5', duration: '1 Year', medium: 'English', fee: '10,460 ރ', center: 'Kulliyyah of Economics & Management Studies', label: 'Under Graduate' },
  { name: 'Diploma in Human Resources Management', mnqfLevel: 'Level 5', duration: '1 Year', medium: 'English', fee: '13,535 ރ', center: 'Kulliyyah of Economics & Management Studies', label: 'Under Graduate' },
  { name: 'Diploma in Accounting and Finance', mnqfLevel: 'Level 5', duration: '1 Year', medium: 'English', fee: '13,340 ރ', center: 'Kulliyyah of Economics & Management Studies', label: 'Under Graduate' },
  { name: 'Diploma in Islamic Banking and Finance', mnqfLevel: 'Level 5', duration: '1 Year', medium: 'English', fee: '15,940 ރ', center: 'Kulliyyah of Economics & Management Studies', label: 'Under Graduate' },
  // Add more courses as needed
];

  // Function to toggle visibility of the course table
  function toggleTableVisibility(data) {
    if (tableBody.style.display === 'none') {
      tableBody.innerHTML = generateTableRows(data);
      tableBody.style.display = 'table-row-group';
      document.getElementById('courses').classList.add('show-table'); // Add the 'show-table' class to the #courses element
    } else {
      tableBody.style.display = 'none';
      document.getElementById('courses').classList.remove('show-table'); // Remove the 'show-table' class from the #courses element
    }
  }

  // Function to generate table rows for course data
  function generateTableRows(data) {
    let html = '';
    // Include table headings when generating table rows
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
    data.forEach(course => {
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
  boxes.forEach(box => {
    box.addEventListener('click', () => {
      // Get the corresponding course data based on the box's label
      const boxLabel = box.textContent.trim();
      const correspondingCourses = courseData.filter(course => course.label === boxLabel);

      // Toggle the visibility of the course table
      toggleTableVisibility(correspondingCourses);
    });
  });

  // Event listener for table header click (to hide the table when clicked again)
  const tableHeader = document.querySelector('th');
  tableHeader.addEventListener('click', () => {
    tableBody.style.display = 'none';
  });


  

//....................................................


  // Function to handle the click event on a course row
function handleCourseClick(courseName) {
  // Encode the course name to handle special characters in the URL
  const encodedCourseName = encodeURIComponent(courseName);
  const courseDetailsURL = `course_details.html?courseName=${encodedCourseName}`;
  window.open(courseDetailsURL, '_blank');
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
document.querySelector('.courses-table tbody').innerHTML = generateTableRows(courseData);


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
  