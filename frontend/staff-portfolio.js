// JavaScript to extract staff name from the URL
const h2 = document.getElementById("staffName");
const staffInfo = document.getElementById("staffInfo");

// Get the query parameter from the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const staffName = urlParams.get("staff");

// Function to find staff data by name
function findStaffByName(name) {
    return KEMS_Academic.find(staff => staff.name === name);
}

// Set the staff name in the <h2> tag
if (staffName) {
    h2.textContent = staffName;
    
    // Find the staff data
    const staffData = findStaffByName(staffName);

    if (staffData) {
        // Populate staff information in the respective containers
        document.getElementById("photo").innerHTML = `<img src="${staffData.photo}" alt="${staffName}">`;
        document.getElementById("occupation").textContent = staffData.occupation;
        document.getElementById("contact").textContent = staffData.contact;
        document.getElementById("email").textContent = staffData.email;

        // Expert Profile
        const expertProfileContainer = document.createElement("div");
        expertProfileContainer.className = "section-container";

        const expertProfileTitle = document.createElement("h3");
        expertProfileTitle.textContent = "Expert Profile";
        expertProfileContainer.appendChild(expertProfileTitle);

        const expertProfileContent = document.createElement("p");
        expertProfileContent.className = "section-content";
        expertProfileContent.textContent = staffData.profile;
        expertProfileContainer.appendChild(expertProfileContent);

        document.getElementById("staffInfo").appendChild(expertProfileContainer);

        // Areas of Specialization
        const specializationContainer = document.createElement("div");
        specializationContainer.className = "section-container";

        const specializationTitle = document.createElement("h3");
        specializationTitle.textContent = "Areas of Specialization";
        specializationContainer.appendChild(specializationTitle);

        const specializationContent = document.createElement("p");
        specializationContent.className = "section-content";
        specializationContent.textContent = staffData.specialization.join('\n');
        specializationContainer.appendChild(specializationContent);

        document.getElementById("staffInfo").appendChild(specializationContainer);

        // Awards and Recognition
        const awardsContainer = document.createElement("div");
        awardsContainer.className = "section-container";

        const awardsTitle = document.createElement("h3");
        awardsTitle.textContent = "Awards and Recognition";
        awardsContainer.appendChild(awardsTitle);

        const awardsContent = document.createElement("ul");
        awardsContent.className = "section-list";
        staffData.awards.forEach(award => {
            const awardItem = document.createElement("li");
            awardItem.textContent = `${award.date}: ${award.award} (${award.organization})`;
            awardsContent.appendChild(awardItem);
        });
        awardsContainer.appendChild(awardsContent);

        document.getElementById("staffInfo").appendChild(awardsContainer);

        // Research (completed and ongoing)
        const researchContainer = document.createElement("div");
        researchContainer.className = "section-container";

        const researchTitle = document.createElement("h3");
        researchTitle.textContent = "Research";
        researchContainer.appendChild(researchTitle);

        const researchContent = document.createElement("ul");
        researchContent.className = "section-list";
        if (staffData.research.completed.length > 0) {
            const completedTitle = document.createElement("h4");
            completedTitle.textContent = "Completed";
            researchContent.appendChild(completedTitle);
            staffData.research.completed.forEach(item => {
                const researchItem = document.createElement("li");
                researchItem.textContent = `${item.year}: ${item.title}`;
                researchContent.appendChild(researchItem);
            });
        }
        if (staffData.research.ongoing.length > 0) {
            const ongoingTitle = document.createElement("h4");
            ongoingTitle.textContent = "Ongoing";
            researchContent.appendChild(ongoingTitle);
            staffData.research.ongoing.forEach(item => {
                const researchItem = document.createElement("li");
                researchItem.textContent = `${item.year}: ${item.title}`;
                researchContent.appendChild(researchItem);
            });
        }
        researchContainer.appendChild(researchContent);

        document.getElementById("staffInfo").appendChild(researchContainer);

        // Publications
        const publicationsContainer = document.createElement("div");
        publicationsContainer.className = "section-container";

        const publicationsTitle = document.createElement("h3");
        publicationsTitle.textContent = "Publications";
        publicationsContainer.appendChild(publicationsTitle);

        const publicationsContent = document.createElement("ul");
        publicationsContent.className = "section-list";
        staffData.publications.forEach(publication => {
            const publicationItem = document.createElement("li");
            publicationItem.textContent = `${publication.year}: ${publication.title}`;
            publicationsContent.appendChild(publicationItem);
        });
        publicationsContainer.appendChild(publicationsContent);

        document.getElementById("staffInfo").appendChild(publicationsContainer);
    }
}
