// announcements.js
const announcementsData = [
  {
    name: "Employment Announcement 1",
    number: "EMP-001",
    category: "Employment",
    date: "2023-10-01",
    url: "path/to/employment_announcement_1.pdf"
  },
  {
    name: "Academic Announcement 1",
    number: "ACA-001",
    category: "Academic",
    date: "2023-10-02",
    url: "path/to/academic_announcement_1.pdf"
  },
  {
    name: "Administrative Announcement 1",
    number: "ADM-001",
    category: "Administrative",
    date: "2023-10-03",
    url: "path/to/administrative_announcement_1.pdf"
  },
  {
    name: "Procurement Announcement 1",
    number: "PROC-001",
    category: "Procurement",
    date: "2023-10-04",
    url: "path/to/procurement_announcement_1.pdf"
  },
  {
    name: "Employment Announcement 2",
    number: "EMP-002",
    category: "Employment",
    date: "2023-10-05",
    url: "path/to/employment_announcement_2.pdf"
  },
  {
    name: "Academic Announcement 2",
    number: "ACA-002",
    category: "Academic",
    date: "2023-10-06",
    url: "path/to/academic_announcement_2.pdf"
  },
  {
    name: "Administrative Announcement 2",
    number: "ADM-002",
    category: "Administrative",
    date: "2023-10-07",
    url: "path/to/administrative_announcement_2.pdf"
  },
  {
    name: "Procurement Announcement 2",
    number: "PROC-002",
    category: "Procurement",
    date: "2023-10-08",
    url: "path/to/procurement_announcement_2.pdf"
  },
  {
    name: "Employment Announcement 3",
    number: "EMP-003",
    category: "Employment",
    date: "2023-10-09",
    url: "path/to/employment_announcement_3.pdf"
  },
  {
    name: "Academic Announcement 3",
    number: "ACA-003",
    category: "Academic",
    date: "2023-10-10",
    url: "path/to/academic_announcement_3.pdf"
  },
  {
    name: "Administrative Announcement 3",
    number: "ADM-003",
    category: "Administrative",
    date: "2023-10-11",
    url: "path/to/administrative_announcement_3.pdf"
  },
  {
    name: "Procurement Announcement 3",
    number: "PROC-003",
    category: "Procurement",
    date: "2023-10-12",
    url: "path/to/procurement_announcement_3.pdf"
  },
  // Add more announcements here
];



// announcements.js

// Function to populate the table with announcements
function populateTable() {
    const tableBody = document.querySelector("#announcements-table tbody");
    tableBody.innerHTML = "";
  
    const checkboxes = document.querySelectorAll(".filter-checkbox");
    const selectedCategories = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
  
    announcementsData.forEach(announcement => {
      if (
        selectedCategories.length === 0 ||
        selectedCategories.includes(announcement.category)
      ) {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${announcement.name}</td>
          <td>${announcement.number}</td>
          <td>${announcement.category}</td>
          <td>${announcement.date}</td>
        `;
  
        row.addEventListener("click", () => {
          // Handle click event to download the corresponding PDF
          window.location.href = announcement.url;
        });
  
        tableBody.appendChild(row);
      }
    });
  }
  
  // Event listener to update the table when checkboxes change
  const filterCheckboxes = document.querySelectorAll(".filter-checkbox");
  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", populateTable);
  });
  
  // Initially populate the table
  populateTable();
  