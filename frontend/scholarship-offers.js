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

// Create a filter section
var filterSection = document.createElement('div');
filterSection.className = 'filter-section';

// Filter by Category
var filterCategory = document.createElement('div');
filterCategory.className = 'filter-for-category';

var categoryLabel1 = document.createElement('label');
var categoryCheckbox1 = document.createElement('input');
categoryCheckbox1.type = 'checkbox';
categoryCheckbox1.className = 'filter-checkbox';
categoryCheckbox1.value = 'Active';
categoryCheckbox1.checked = true;
categoryLabel1.appendChild(categoryCheckbox1);
categoryLabel1.appendChild(document.createTextNode('Active'));

var categoryLabel2 = document.createElement('label');
var categoryCheckbox2 = document.createElement('input');
categoryCheckbox2.type = 'checkbox';
categoryCheckbox2.className = 'filter-checkbox';
categoryCheckbox2.value = 'Expired';
categoryCheckbox2.checked = true;
categoryLabel2.appendChild(categoryCheckbox2);
categoryLabel2.appendChild(document.createTextNode('Expired'));

var categoryLabel3 = document.createElement('label');
var categoryCheckbox3 = document.createElement('input');
categoryCheckbox3.type = 'checkbox';
categoryCheckbox3.className = 'filter-checkbox';
categoryCheckbox3.value = 'All';
categoryCheckbox3.checked = true;
categoryLabel3.appendChild(categoryCheckbox3);
categoryLabel3.appendChild(document.createTextNode('All'));

filterCategory.appendChild(categoryLabel1);
filterCategory.appendChild(categoryLabel2);
filterCategory.appendChild(categoryLabel3);

// Filter by Program
var filterType = document.createElement('div');
filterType.className = 'filter-for-type';
var typeHeader = document.createElement('h2');
typeHeader.appendChild(document.createTextNode('Filter by Program'));

var typeLabel1 = document.createElement('label');
var typeRadio1 = document.createElement('input');
typeRadio1.type = 'radio';
typeRadio1.name = 'doctype';
typeRadio1.value = 'all';
typeRadio1.checked = true;
typeLabel1.appendChild(typeRadio1);
typeLabel1.appendChild(document.createTextNode('All'));

var typeLabel2 = document.createElement('label');
var typeRadio2 = document.createElement('input');
typeRadio2.type = 'radio';
typeRadio2.name = 'doctype';
typeRadio2.value = 'PhD';
typeLabel2.appendChild(typeRadio2);
typeLabel2.appendChild(document.createTextNode('PhD'));

var typeLabel3 = document.createElement('label');
var typeRadio3 = document.createElement('input');
typeRadio3.type = 'radio';
typeRadio3.name = 'doctype';
typeRadio3.value = 'Masters';
typeLabel3.appendChild(typeRadio3);
typeLabel3.appendChild(document.createTextNode('Masters'));

var typeLabel4 = document.createElement('label');
var typeRadio4 = document.createElement('input');
typeRadio4.type = 'radio';
typeRadio4.name = 'doctype';
typeRadio4.value = 'Degree';
typeLabel4.appendChild(typeRadio4);
typeLabel4.appendChild(document.createTextNode('Degree'));

var typeLabel5 = document.createElement('label');
var typeRadio5 = document.createElement('input');
typeRadio5.type = 'radio';
typeRadio5.name = 'doctype';
typeRadio5.value = 'Diploma';
typeLabel5.appendChild(typeRadio5);
typeLabel5.appendChild(document.createTextNode('Diploma'));

filterType.appendChild(typeHeader);
filterType.appendChild(typeLabel1);
filterType.appendChild(typeLabel2);
filterType.appendChild(typeLabel3);
filterType.appendChild(typeLabel4);
filterType.appendChild(typeLabel5);

// Filter by Provider
var filterEligibility = document.createElement('div');
filterEligibility.className = 'filter-for-eligibility';
var eligibilityHeader = document.createElement('h2');
eligibilityHeader.appendChild(document.createTextNode('Filter by Provider'));

var eligibilityLabel1 = document.createElement('label');
var eligibilityRadio1 = document.createElement('input');
eligibilityRadio1.type = 'radio';
eligibilityRadio1.name = 'eligibility';
eligibilityRadio1.value = 'All';
eligibilityRadio1.checked = true;
eligibilityLabel1.appendChild(eligibilityRadio1);
eligibilityLabel1.appendChild(document.createTextNode('All'));

var eligibilityLabel2 = document.createElement('label');
var eligibilityRadio2 = document.createElement('input');
eligibilityRadio2.type = 'radio';
eligibilityRadio2.name = 'eligibility';
eligibilityRadio2.value = 'IUM';
eligibilityLabel2.appendChild(eligibilityRadio2);
eligibilityLabel2.appendChild(document.createTextNode('IUM'));

var eligibilityLabel3 = document.createElement('label');
var eligibilityRadio3 = document.createElement('input');
eligibilityRadio3.type = 'radio';
eligibilityRadio3.name = 'eligibility';
eligibilityRadio3.value = 'Government';
eligibilityLabel3.appendChild(eligibilityRadio3);
eligibilityLabel3.appendChild(document.createTextNode('Government'));

var eligibilityLabel4 = document.createElement('label');
var eligibilityRadio4 = document.createElement('input');
eligibilityRadio4.type = 'radio';
eligibilityRadio4.name = 'eligibility';
eligibilityRadio4.value = 'Private';
eligibilityLabel4.appendChild(eligibilityRadio4);
eligibilityLabel4.appendChild(document.createTextNode('Private'));

filterEligibility.appendChild(eligibilityHeader);
filterEligibility.appendChild(eligibilityLabel1);
filterEligibility.appendChild(eligibilityLabel2);
filterEligibility.appendChild(eligibilityLabel3);
filterEligibility.appendChild(eligibilityLabel4);

// Append filter elements to the filter section
filterSection.appendChild(filterCategory);
filterSection.appendChild(filterType);
filterSection.appendChild(filterEligibility);

// Create a table element
var table = document.createElement('table');

// Create table headers (th elements)
var headers = ["Scholarship Name", "Type", "Provider", "Eligible Programs", "Expiry Date"];
var headerRow = document.createElement('tr');
for (var i = 0; i < headers.length; i++) {
    var headerCell = document.createElement('th');
    headerCell.textContent = headers[i];
    headerRow.appendChild(headerCell);
}
table.appendChild(headerRow);

// Function to filter the table based on selected options
function filterTable() {
    var categoryFilters = Array.from(document.querySelectorAll('.filter-for-category input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
    var typeFilter = document.querySelector('.filter-for-type input[name="doctype"]:checked').value;
    var eligibilityFilter = document.querySelector('.filter-for-eligibility input[name="eligibility"]:checked').value;

    var currentDate = new Date();

    var filteredScholarships = scholarships.filter(scholarship => {
        var expiryDate = new Date(scholarship.expiryDate);
        if (categoryFilters.includes('All')) {
            return true;
        }
        return (categoryFilters.includes('All') ||
            (categoryFilters.includes('Active') && expiryDate >= currentDate) ||
            (categoryFilters.includes('Expired') && expiryDate < currentDate)) &&
            (typeFilter === 'all' || typeFilter === scholarship.type) &&
            (eligibilityFilter === 'All' || eligibilityFilter === scholarship.provider);
    });

    // Clear the table
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Populate the table with filtered scholarship data
    for (var i = 0; i < filteredScholarships.length; i++) {
        var scholarship = filteredScholarships[i];
        var row = document.createElement('tr');

        var nameCell = document.createElement('td');
        var nameLink = document.createElement('a');
        nameLink.href = scholarship.pdfLink;
        nameLink.target = '_blank';
        nameLink.textContent = scholarship.name;
        nameCell.appendChild(nameLink);
        row.appendChild(nameCell);

        var typeCell = document.createElement('td');
        typeCell.textContent = scholarship.type;
        row.appendChild(typeCell);

        var providerCell = document.createElement('td');
        providerCell.textContent = scholarship.provider;
        row.appendChild(providerCell);

        var programsCell = document.createElement('td');
        programsCell.textContent = scholarship.programs;
        row.appendChild(programsCell);

        var expiryDateCell = document.createElement('td');
        expiryDateCell.textContent = scholarship.expiryDate;
        row.appendChild(expiryDateCell);

        table.appendChild(row);
    }
}

// Attach the filter function to the change event of filter inputs
var filterInputs = document.querySelectorAll('.filter-for-category input, .filter-for-type input, .filter-for-eligibility input');
filterInputs.forEach(function (input) {
    input.addEventListener('change', filterTable);
});

// Append the filter section and the table to the container
var scholarshipContent = document.getElementById('scholarship-content');
scholarshipContent.appendChild(filterSection);
scholarshipContent.appendChild(table);

// Initial table population
filterTable();