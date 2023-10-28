const rulesAndRegulationsData = [
    { title: "Academic Rule 1", category: "academic", type: "acts", pdfUrl: "academic_rule1.pdf" },
    { title: "Administrative Rule 1", category: "administrative", type: "regulations", pdfUrl: "admin_rule1.pdf" },
    { title: "Academic Rule 2", category: "academic", type: "acts", pdfUrl: "academic_rule2.pdf" },
    { title: "Administrative Rule 2", category: "administrative", type: "regulations", pdfUrl: "admin_rule2.pdf" },
    { title: "Academic Rule 3", category: "academic", type: "acts", pdfUrl: "academic_rule3.pdf" },
    { title: "Administrative Rule 3", category: "administrative", type: "regulations", pdfUrl: "admin_rule3.pdf" },
    { title: "Academic Rule 4", category: "academic", type: "acts", pdfUrl: "academic_rule4.pdf" },
    { title: "Administrative Rule 4", category: "administrative", type: "regulations", pdfUrl: "admin_rule4.pdf" },
    { title: "Academic Rule 1", category: "academic", type: "acts", pdfUrl: "academic_rule1.pdf" },
    { title: "Administrative Rule 1", category: "administrative", type: "regulations", pdfUrl: "admin_rule1.pdf" },
    { title: "Academic Rule 2", category: "academic", type: "acts", pdfUrl: "academic_rule2.pdf" },
    { title: "Administrative Rule 2", category: "administrative", type: "regulations", pdfUrl: "admin_rule2.pdf" },
    { title: "Academic Rule 3", category: "academic", type: "acts", pdfUrl: "academic_rule3.pdf" },
    { title: "Administrative Rule 3", category: "administrative", type: "regulations", pdfUrl: "admin_rule3.pdf" },
    { title: "Academic Rule 4", category: "academic", type: "acts", pdfUrl: "academic_rule4.pdf" },
    { title: "Administrative Rule 4", category: "administrative", type: "regulations", pdfUrl: "admin_rule4.pdf" },
    // Add more data objects as needed
    // ...
    { title: "Academic Rule 50", category: "academic", type: "acts", pdfUrl: "academic_rule50.pdf" },
    { title: "Administrative Rule 50", category: "administrative", type: "regulations", pdfUrl: "admin_rule50.pdf" },
];

const tableBody = document.getElementById("table-body");
const categoryCheckboxes = document.querySelectorAll('.filter-checkbox');
const typeRadios = document.querySelectorAll('input[name="doctype"]');

function createTableRow(data) {
    const row = document.createElement("tr");
    const titleCell = document.createElement("td");
    titleCell.textContent = data.title;
    const downloadCell = document.createElement("td");
    const downloadIcon = document.createElement("i");
    downloadIcon.classList.add("fa-solid", "fa-download");
    downloadIcon.style.cursor = "pointer";
    downloadIcon.addEventListener("click", () => {
        downloadDocument(data.pdfUrl);
    });
    downloadCell.appendChild(downloadIcon);
    const viewCell = document.createElement("td");
    const viewIcon = document.createElement("i");
    viewIcon.classList.add("fa-regular", "fa-eye");
    viewIcon.style.cursor = "pointer";
    viewIcon.addEventListener("click", () => {
        openDocumentInNewTab(data.pdfUrl);
    });
    viewCell.appendChild(viewIcon);

    row.appendChild(titleCell);
    row.appendChild(viewCell);
    row.appendChild(downloadCell);
    return row;
}

function downloadDocument(pdfUrl) {
    fetch(pdfUrl)
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = pdfUrl.split("/").pop();
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        });
}

function openDocumentInNewTab(pdfUrl) {
    window.open(pdfUrl, "_blank");
}

function populateTable() {
    for (const data of rulesAndRegulationsData) {
        const row = createTableRow(data);
        tableBody.appendChild(row);
    }
}

function filterDocuments() {
    const selectedCategories = Array.from(categoryCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const selectedDocumentType = Array.from(typeRadios)
        .find(radio => radio.checked)
        .value;

    // Clear the table before populating it again
    tableBody.innerHTML = '';

    for (const data of rulesAndRegulationsData) {
        if (selectedCategories.includes(data.category) && (selectedDocumentType === 'all' || selectedDocumentType === data.type)) {
            const row = createTableRow(data);
            tableBody.appendChild(row);
        }
    }
}

// Add event listeners to the filter elements
categoryCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterDocuments);
});

typeRadios.forEach(radio => {
    radio.addEventListener('change', filterDocuments);
});

// Initial population
populateTable();