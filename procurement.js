document.addEventListener("DOMContentLoaded", function() {
    const procurementData = [
      {
        name: "Announcement 1",
        number: "ANN-001",
        category: "Announcements",
        date: "2023-10-01",
        url: "path/to/announcement_1.pdf"
      },
      {
        name: "Report 1",
        number: "RPT-001",
        category: "Reports",
        date: "2023-10-02",
        url: "path/to/report_1.pdf"
      },
      {
        name: "Screening Sheet 1",
        number: "SS-001",
        category: "Screening Sheets",
        date: "2023-10-03",
        url: "path/to/screening_sheet_1.pdf"
      },
      {
        name: "Form 1",
        number: "FRM-001",
        category: "Forms",
        date: "2023-10-04",
        url: "path/to/form_1.pdf"
      },
      {
        name: "Announcement 2",
        number: "ANN-002",
        category: "Announcements",
        date: "2023-10-05",
        url: "path/to/announcement_2.pdf"
      },
      {
        name: "Report 2",
        number: "RPT-002",
        category: "Reports",
        date: "2023-10-06",
        url: "path/to/report_2.pdf"
      },
      {
        name: "Screening Sheet 2",
        number: "SS-002",
        category: "Screening Sheets",
        date: "2023-10-07",
        url: "path/to/screening_sheet_2.pdf"
      },
      {
        name: "Form 2",
        number: "FRM-002",
        category: "Forms",
        date: "2023-10-08",
        url: "path/to/form_2.pdf"
      },
      {
        name: "Announcement 3",
        number: "ANN-003",
        category: "Announcements",
        date: "2023-10-09",
        url: "path/to/announcement_3.pdf"
      },
      {
        name: "Report 3",
        number: "RPT-003",
        category: "Reports",
        date: "2023-10-10",
        url: "path/to/report_3.pdf"
      },
      {
        name: "Screening Sheet 3",
        number: "SS-003",
        category: "Screening Sheets",
        date: "2023-10-11",
        url: "path/to/screening_sheet_3.pdf"
      },
      {
        name: "Form 3",
        number: "FRM-003",
        category: "Forms",
        date: "2023-10-12",
        url: "path/to/form_3.pdf"
      },
      // Add more objects as needed
    ];
  
    function createTableRow(data) {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const numberCell = document.createElement("td");
      const categoryCell = document.createElement("td");
      const dateCell = document.createElement("td");
  
      nameCell.textContent = data.name;
      numberCell.textContent = data.number;
      categoryCell.textContent = data.category;
      dateCell.textContent = data.date;
  
      row.appendChild(nameCell);
      row.appendChild(numberCell);
      row.appendChild(categoryCell);
      row.appendChild(dateCell);
  
      row.addEventListener("click", () => {
        // Handle click event to download the corresponding PDF
        window.location.href = data.url;
      });
  
      return row;
    }
  
    function populateTable() {
      const tableBody = document.querySelector("#procurement-table tbody");
      tableBody.innerHTML = "";
  
      const checkboxes = document.querySelectorAll(".filter-checkbox");
      const selectedCategories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
  
      procurementData.forEach(document => {
        if (
          selectedCategories.length === 0 ||
          selectedCategories.includes(document.category)
        ) {
          const row = createTableRow(document);
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
  });
  