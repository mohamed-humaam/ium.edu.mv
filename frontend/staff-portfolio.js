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

    // Merge all staff data arrays into one array
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

    // Find the staff data for the given name
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
        contactDetails.innerHTML = `<i class="fa-solid fa-phone"></i> ${staff.contact}`;
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

        // Add the person's image
        const personImage = document.createElement("img");
        personImage.src = staff.photo;
        personImage.alt = staff.name;
        personImage.className = "person-image";
        pfpColumn.appendChild(personImage);

        // Append the personalInfo to the staffInfo
        staffInfo.appendChild(personalInfo);

        // Profile Info
        const profileSection = document.createElement("div");
        profileSection.className = "profile";

        // Function to create a section within the profile
        function createProfileSection(title, content, sectionClass) {
            const section = document.createElement("div");
            section.className = sectionClass;

            const sectionTitle = document.createElement("h3");
            sectionTitle.textContent = title;
            section.appendChild(sectionTitle);

            const sectionContent = document.createElement("p");
            sectionContent.className = "section-content";

            // Display the first 200 characters of the content
            const contentPreview = content.substring(0, 200);
            const contentFull = content.length > 200 ? content : "";

            sectionContent.textContent = contentPreview;

            // Create a "Read More" button
            const readMoreButton = document.createElement("button");
            readMoreButton.textContent = "Read More";
            let isExpanded = false;

            // Add an event listener to toggle between full content and preview
            readMoreButton.addEventListener("click", function () {
                if (!isExpanded) {
                    sectionContent.textContent = contentFull;
                    readMoreButton.textContent = "Read Less";
                } else {
                    sectionContent.textContent = contentPreview;
                    readMoreButton.textContent = "Read More";
                }
                isExpanded = !isExpanded;
            });

            section.appendChild(sectionContent);

            // Only add the "Read More" button if the content exceeds 200 characters
            if (content.length > 200) {
                section.appendChild(readMoreButton);
            }

            return section;
        }

        // Add Expert Profile section
        const expertProfileSection = createProfileSection("Expert Profile", staff.profile, "expert-profile");
        profileSection.appendChild(expertProfileSection);

        // Add Areas of Specialization section
        const specializationSection = createProfileSection("Areas of Specialization", staff.specialization.join('\n'), "area-of-specialization");
        profileSection.appendChild(specializationSection);

        // Add Awards and Recognition section
        const awardsSection = createProfileSection("Awards and Recognition", staff.awards.map(award => `${award.date}: ${award.award} (${award.organization})`).join('\n'), "awards-and-recognition");
        profileSection.appendChild(awardsSection);

        // Function to create the "Research and Publications" section
        function createResearchSection(title, researchContent, sectionClass) {
            const section = document.createElement("div");
            section.className = sectionClass;

            // Create a title for the section (e.g., "Research and Publications")
            const sectionTitle = document.createElement("h3");
            sectionTitle.textContent = title;
            section.appendChild(sectionTitle);

            // Split the research content into "Completed Research" and "Ongoing Research"
            const completedResearch = researchContent.slice(0, researchContent.indexOf("Ongoing Research"));
            const ongoingResearch = researchContent.slice(researchContent.indexOf("Ongoing Research") + 1);

            // Create a subheading for "Completed Research"
            const completedResearchContent = document.createElement("h2");
            completedResearchContent.textContent = "Completed Research";
            section.appendChild(completedResearchContent);

            // Create an unordered list for "Completed Research"
            const completedResearchList = document.createElement("ul");
            for (let i = 0; i < completedResearch.length; i++) {
                const itemText = completedResearch[i];
                const item = document.createElement("li");
                item.textContent = itemText;
                completedResearchList.appendChild(item);
            }
            section.appendChild(completedResearchList);

            // Create a subheading for "Ongoing Research"
            const ongoingResearchContent = document.createElement("h2");
            ongoingResearchContent.textContent = "Ongoing Research";
            section.appendChild(ongoingResearchContent);

            // Create an unordered list for "Ongoing Research"
            const ongoingResearchList = document.createElement("ul");
            for (let i = 0; i < ongoingResearch.length; i++) {
                const itemText = ongoingResearch[i];
                const item = document.createElement("li");
                item.textContent = itemText;
                ongoingResearchList.appendChild(item);
                item.style.display = 'none'; // Initially hide ongoing research items
            }
            section.appendChild(ongoingResearchList);

            // Create a button to toggle between "Read More" and "Read Less"
            const toggleButton = document.createElement("button");
            toggleButton.textContent = "Read More";

            // Maintain the state of the expanded content
            let isExpanded = false;

            toggleButton.addEventListener("click", function () {
                isExpanded = !isExpanded;
                toggleButton.textContent = isExpanded ? "Read Less" : "Read More";
            
                // Toggle the display of ongoing research list items
                for (let i = 0; i < ongoingResearchList.children.length; i++) {
                    const item = ongoingResearchList.children[i];
                    item.style.display = isExpanded ? 'list-item' : 'none';
                }
            });

            section.appendChild(toggleButton);

            // Return the completed section
            return section;
        }



        // Prepare the content for the "Research and Publications" section
        const researchContent = staff.research.completed.map(item => `${item.year}: ${item.title}`);
        if (staff.research.ongoing.length > 0) {
            researchContent.push("Ongoing Research");
            researchContent.push(...staff.research.ongoing.map(item => `${item.year}: ${item.title}`));
        }

        // Create the "Research and Publications" section
        const researchSection = createResearchSection("Research and Publications", researchContent, "research-and-publications");
        profileSection.appendChild(researchSection);

        // Append the profileSection to the staffInfo
        staffInfo.appendChild(profileSection);

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
