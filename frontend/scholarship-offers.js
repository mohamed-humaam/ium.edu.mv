// Create an array of scholarship data
var scholarships = [
    {
        name: "Scholarship 1",
        type: "Diploma",
        provider: "Government",
        programs: "Diploma, Degree",
        expiryDate: "January 31, 2024",
        pdfLink: "sample1.pdf"
    },
    {
        name: "Scholarship 2",
        type: "Degree",
        provider: "IUM",
        programs: "Degree, Masters",
        expiryDate: "March 15, 2024",
        pdfLink: "sample2.pdf"
    },
    {
        name: "Scholarship 3",
        type: "Masters",
        provider: "Government",
        programs: "Masters, PhD",
        expiryDate: "April 30, 2024",
        pdfLink: "sample3.pdf"
    },
    {
        name: "Scholarship 4",
        type: "PhD",
        provider: "IUM",
        programs: "PhD",
        expiryDate: "May 15, 2024",
        pdfLink: "sample4.pdf"
    },
    {
        name: "Scholarship 5",
        type: "Diploma",
        provider: "Government",
        programs: "Diploma, Degree",
        expiryDate: "June 30, 2024",
        pdfLink: "sample5.pdf"
    },
    {
        name: "Scholarship 6",
        type: "Degree",
        provider: "IUM",
        programs: "Degree, Masters",
        expiryDate: "July 15, 2024",
        pdfLink: "sample6.pdf"
    },
    {
        name: "Scholarship 7",
        type: "Masters",
        provider: "Government",
        programs: "Masters, PhD",
        expiryDate: "August 31, 2024",
        pdfLink: "sample7.pdf"
    },
    {
        name: "Scholarship 8",
        type: "PhD",
        provider: "IUM",
        programs: "PhD",
        expiryDate: "September 15, 2024",
        pdfLink: "sample8.pdf"
    },
    {
        name: "Scholarship 9",
        type: "Diploma",
        provider: "Government",
        programs: "Diploma, Degree",
        expiryDate: "October 31, 2024",
        pdfLink: "sample9.pdf"
    },
    {
        name: "Scholarship 10",
        type: "Degree",
        provider: "IUM",
        programs: "Degree, Masters",
        expiryDate: "November 15, 2024",
        pdfLink: "sample10.pdf"
    }
];

// Get the section element by its ID
var section = document.getElementById("table");

// Create a table element
var table = document.createElement("table");

// Create table headers (th elements)
var headers = ["Scholarship Name", "Type", "Provider", "Eligible Programs", "Expiry Date"];
var headerRow = document.createElement("tr");
for (var i = 0; i < headers.length; i++) {
    var headerCell = document.createElement("th");
    headerCell.textContent = headers[i];
    headerRow.appendChild(headerCell);
}
table.appendChild(headerRow);

// Populate the table with scholarship data
for (var i = 0; i < scholarships.length; i++) {
    var scholarship = scholarships[i];
    var row = document.createElement("tr");

    var nameCell = document.createElement("td");
    var nameLink = document.createElement("a");
    nameLink.href = scholarship.pdfLink;
    nameLink.target = "_blank";
    nameLink.textContent = scholarship.name;
    nameCell.appendChild(nameLink);
    row.appendChild(nameCell);

    var typeCell = document.createElement("td");
    typeCell.textContent = scholarship.type;
    row.appendChild(typeCell);

    var providerCell = document.createElement("td");
    providerCell.textContent = scholarship.provider;
    row.appendChild(providerCell);

    var programsCell = document.createElement("td");
    programsCell.textContent = scholarship.programs;
    row.appendChild(programsCell);

    var expiryDateCell = document.createElement("td");
    expiryDateCell.textContent = scholarship.expiryDate;
    row.appendChild(expiryDateCell);

    table.appendChild(row);
}

// Append the table to the section
section.appendChild(table);
