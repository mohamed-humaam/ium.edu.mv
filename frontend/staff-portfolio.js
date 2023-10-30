document.addEventListener("DOMContentLoaded", function () {
    const staffInfo = document.getElementById("staffInfo");

    // Get the query parameter from the URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const staffName = urlParams.get("staff");

    // Function to find the staff data by name
    function findStaffByName(name) {
        return KEMS_Academic.find(staff => staff.name === name);
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

    // Find the staff data
    const staff = findStaffByName(staffName);

    if (staff) {
        // Personal Info
        const personalInfo = document.createElement("div");
        personalInfo.className = "personal-info";

        // Create the first column (details-column)
        const detailsColumn = document.createElement("div");
        detailsColumn.className = "details-column"; // Add a class for styling
        personalInfo.appendChild(detailsColumn);

        // Row 1: Person's Title and Name
        const titleDiv = document.createElement("div");
        titleDiv.textContent = staff.title;
        titleDiv.className = "title"; // Add a class for styling
        detailsColumn.appendChild(titleDiv);

        const personName = document.createElement("h2");
        personName.textContent = staff.name;
        detailsColumn.appendChild(personName);

        // Row 2: Position and Faculty Info
        const positionFacultyInfo = document.createElement("div");
        positionFacultyInfo.className = "position-faculty-info"; // Add a class for styling

        // Add QR Code to the positionFacultyInfo
        const qrCode = document.createElement("img");
        qrCode.src = "./Images/dads.png"; // Replace with the actual QR code URL
        qrCode.alt = "QR Code";
        qrCode.className = "qr-code";
        positionFacultyInfo.appendChild(qrCode);

        // Add Position in green and Faculty Name in white
        const positionFacultyDiv = document.createElement("div");
        positionFacultyDiv.className = "position-faculty";
        positionFacultyDiv.innerHTML = `
            <p class="position-green">${staff.occupation}</p>
            <p class="faculty-white">${staff.faculty || "Unknown Faculty"}</p>
        `;
        positionFacultyInfo.appendChild(positionFacultyDiv);

        detailsColumn.appendChild(positionFacultyInfo);

        // Create the div for academic qualifications, contact number, and email (academic-contact-cell)
        const academicContactCell = document.createElement("div");
        academicContactCell.className = "academic-contact-cell"; // Add a class for styling

        // Row 3: Academic Qualifications (with popup)
        const academicQualifications = document.createElement("p");
        academicQualifications.innerHTML = `<i class="fa-solid fa-user-graduate"></i> Academic Qualifications`;
        academicQualifications.className = "academic-qualifications-link";
        academicContactCell.appendChild(academicQualifications);

        // Row 4: Contact Details
        const contactDetails = document.createElement("p");
        contactDetails.innerHTML = `<i class="fa-solid fa-phone"></i>${staff.contact}`;
        contactDetails.className = "contact-link";
        contactDetails.addEventListener("click", function () {
            // Redirect to a call link (replace with your phone number)
            window.location.href = "tel:" + staff.contact;
        });
        academicContactCell.appendChild(contactDetails);

        // Row 5: Email
        const email = document.createElement("p");
        email.innerHTML = `<i class="fa-solid fa-envelope"></i> ${staff.email}`;
        email.className = "email-link";
        email.addEventListener("click", function () {
            // Redirect to email link (replace with your email)
            window.location.href = "mailto:" + staff.email;
        });
        academicContactCell.appendChild(email);

        // Append the academicContactCell to detailsColumn
        detailsColumn.appendChild(academicContactCell);

        // Create the div for the person's image (pfp-column)
        const pfpColumn = document.createElement("div");
        pfpColumn.className = "pfp-column"; // Added the class name
        personalInfo.appendChild(pfpColumn);

        const personImage = document.createElement("img");
        personImage.src = staff.photo;
        personImage.alt = staff.name;
        personImage.className = "person-image";
        pfpColumn.appendChild(personImage);

        // Append the personalInfo to the staffInfo
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

        // Event listener to show the academic qualifications modal
        const academicQualificationsLink = document.querySelector(".academic-qualifications-link");
        const academicQualificationsModal = document.createElement("div");
        academicQualificationsModal.className = "modal";
        academicQualificationsModal.style.display = "none"; // Initially hide the modal

        academicQualificationsLink.addEventListener("click", function () {
            // Build the content of the academic qualifications modal
            academicQualificationsModal.innerHTML = `<div class="modal-content">
                <span class="close-modal-button">×</span>
                <h3>Academic Qualifications</h3>
                <ul>${staff.academic_qualifications.map(qualification => `<li>${qualification}</li>`).join('')}</ul>
            </div>`;

            staffInfo.appendChild(academicQualificationsModal);
            academicQualificationsModal.style.display = "block";

            const closeModalButton = academicQualificationsModal.querySelector(".close-modal-button");
            closeModalButton.addEventListener("click", function () {
                academicQualificationsModal.style.display = "none";
                staffInfo.removeChild(academicQualificationsModal);
            });

            // Close the modal when clicking outside of it
            window.addEventListener("click", function (event) {
                if (event.target === academicQualificationsModal) {
                    academicQualificationsModal.style.display = "none";
                    staffInfo.removeChild(academicQualificationsModal);
                }
            });
        });
    }
});
