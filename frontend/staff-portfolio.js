// JavaScript to extract staff name from the URL
document.addEventListener("DOMContentLoaded", function () {
    const h2 = document.getElementById("staffName");
    const staffInfo = document.getElementById("staffInfo");

    // Get the query parameter from the URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const staffName = urlParams.get("staff");

    // Function to find the staff data by name
    function findStaffByName(name) {
        return staffData.find(staff => staff.name === name);
    }

    const staffData = [
        ...KQS_Academic,
        ...CCE_Academic,
        ...KAL_Academic,
        ...KED_Academic,
        ...KSL_Academic,
        ...KEMS_Academic,
        ...KIRK_Academic,
        ...CRP_Academic,
        ...CPS_Academic
    ];

    // Set the staff name in the <h2> tag
    if (staffName) {
        h2.textContent = staffName;
        
        // Find the staff data
        const staff = findStaffByName(staffName);
    
        if (staff) {
            // Personal Info
            const personalInfo = document.createElement("div");
            personalInfo.className = "personal-info";

            personalInfo.innerHTML = `
                <img src="${staff.photo}" alt="${staffName}">
                <h3>${staffName}</h3>
                <p>${staff.occupation}</p>
                <p>Contact: ${staff.contact}</p>
                <p>Email: ${staff.email}
            `;

            staffInfo.appendChild(personalInfo);

            // Profile Info
            const profileInfo = document.createElement("div");
            profileInfo.className = "profile";

            // Expert Profile
            const expertProfileContainer = document.createElement("div");
            expertProfileContainer.className = "section-container";

            const expertProfileTitle = document.createElement("h3");
            expertProfileTitle.textContent = "Expert Profile";
            expertProfileContainer.appendChild(expertProfileTitle);

            const expertProfileContent = document.createElement("p");
            expertProfileContent.className = "section-content";
            expertProfileContent.textContent = staff.profile;
            expertProfileContainer.appendChild(expertProfileContent);

            profileInfo.appendChild(expertProfileContainer);

            // Areas of Specialization
            const specializationContainer = document.createElement("div");
            specializationContainer.className = "section-container";

            const specializationTitle = document.createElement("h3");
            specializationTitle.textContent = "Areas of Specialization";
            specializationContainer.appendChild(specializationTitle);

            const specializationContent = document.createElement("p");
            specializationContent.className = "section-content";
            specializationContent.textContent = staff.specialization.join('\n');
            specializationContainer.appendChild(specializationContent);

            profileInfo.appendChild(specializationContainer);

            // Awards and Recognition
            const awardsContainer = document.createElement("div");
            awardsContainer.className = "section-container";

            const awardsTitle = document.createElement("h3");
            awardsTitle.textContent = "Awards and Recognition";
            awardsContainer.appendChild(awardsTitle);

            const awardsContent = document.createElement("ul");
            awardsContent.className = "section-list";
            staff.awards.forEach(award => {
                const awardItem = document.createElement("li");
                awardItem.textContent = `${award.date}: ${award.award} (${award.organization})`;
                awardsContent.appendChild(awardItem);
            });
            awardsContainer.appendChild(awardsContent);

            profileInfo.appendChild(awardsContainer);

            // Research (completed and ongoing)
            const researchContainer = document.createElement("div");
            researchContainer.className = "section-container";

            const researchTitle = document.createElement("h3");
            researchTitle.textContent = "Research";
            researchContainer.appendChild(researchTitle);

            const researchContent = document.createElement("ul");
            researchContent.className = "section-list";
            if (staff.research.completed.length > 0) {
                const completedTitle = document.createElement("h4");
                completedTitle.textContent = "Completed";
                researchContent.appendChild(completedTitle);
                staff.research.completed.forEach(item => {
                    const researchItem = document.createElement("li");
                    researchItem.textContent = `${item.year}: ${item.title}`;
                    researchContent.appendChild(researchItem);
                });
            }
            if (staff.research.ongoing.length > 0) {
                const ongoingTitle = document.createElement("h4");
                ongoingTitle.textContent = "Ongoing";
                researchContent.appendChild(ongoingTitle);
                staff.research.ongoing.forEach(item => {
                    const researchItem = document.createElement("li");
                    researchItem.textContent = `${item.year}: ${item.title}`;
                    researchContent.appendChild(researchItem);
                });
            }
            researchContainer.appendChild(researchContent);

            profileInfo.appendChild(researchContainer);

            // Publications
            const publicationsContainer = document.createElement("div");
            publicationsContainer.className = "section-container";

            const publicationsTitle = document.createElement("h3");
            publicationsTitle.textContent = "Publications";
            publicationsContainer.appendChild(publicationsTitle);

            const publicationsContent = document.createElement("ul");
            publicationsContent.className = "section-list";
            staff.publications.forEach(publication => {
                const publicationItem = document.createElement("li");
                publicationItem.textContent = `${publication.year}: ${publication.title}`;
                publicationsContent.appendChild(publicationItem);
            });
            publicationsContainer.appendChild(publicationsContent);

            profileInfo.appendChild(publicationsContainer);

            staffInfo.appendChild(profileInfo);
        }
    }
});
