document.addEventListener("DOMContentLoaded", function () {
  // Sample data for rules and regulations (you can replace this with your data)
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

  // Function to filter and display rules and regulations
  function displayRulesAndRegulations() {
      const filters = {
          category: [],
          type: [],
      };

      // Get selected category filters
      const categoryCheckboxes = document.querySelectorAll(".filter-for-category input[type='checkbox']");
      categoryCheckboxes.forEach((checkbox) => {
          if (checkbox.checked) {
              filters.category.push(checkbox.value);
          }
      });

      // Get selected type filter
      const selectedType = document.querySelector(".filter-for-type input[name='center']:checked").value;

      // Filter and display rules and regulations
      const rulesAndRegulationsListContainer = document.getElementById("rules-and-regulations-list-container");
      rulesAndRegulationsListContainer.innerHTML = "";

      rulesAndRegulationsData.forEach((item) => {
          if (
              (filters.category.includes(item.category) || filters.category.length === 0) &&
              (selectedType === "all" || selectedType === item.type)
          ) {
              const ruleItem = document.createElement("div");
              ruleItem.className = "document-item";

              // Create an Adobe Acrobat logo/icon
              const pdfLogo = document.createElement("img");
              pdfLogo.src = "./Images/Logo/pdf.png"; // Replace with your file path
              pdfLogo.alt = "PDF Icon";

              const ruleTitle = document.createElement("h3");
              ruleTitle.textContent = item.title;

              // Create a link to the PDF file
              const pdfLink = document.createElement("a");
              pdfLink.href = item.pdfUrl;
              pdfLink.target = "_blank"; // Open in a new tab

              // Append the logo/icon, title, and link to the document item
              ruleItem.appendChild(pdfLogo);
              pdfLink.appendChild(ruleTitle);
              ruleItem.appendChild(pdfLink);

              rulesAndRegulationsListContainer.appendChild(ruleItem);
          }
      });
  }

  // Attach event listeners to filters
  const categoryCheckboxes = document.querySelectorAll(".filter-for-category input[type='checkbox']");
  categoryCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", displayRulesAndRegulations);
  });

  const typeRadios = document.querySelectorAll(".filter-for-type input[name='center']");
  typeRadios.forEach((radio) => {
      radio.addEventListener("change", displayRulesAndRegulations);
  });

  // Initial display of rules and regulations
  displayRulesAndRegulations();
});
