document.addEventListener("DOMContentLoaded", function () {
    const staffInfo = document.getElementById("staffInfo");
    // Get the query parameter from the URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const staffName = urlParams.get("staff");
    // Function to find the staff data by name
    function findStaffByName(name, staffData) {
        return staffData.find(staff => staff.name === name);
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
    const staff = findStaffByName(staffName, staffData);
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

        // Get the faculty from the corresponding academic array
        const facultyName = getFacultyName(staff);
        
        positionFacultyDiv.innerHTML = `
            <p class="position-green">${staff.occupation}</p>
            <p class="faculty-white">${facultyName}</p>
        `;

        positionFacultyInfo.appendChild(positionFacultyDiv);
        detailsColumn.appendChild(positionFacultyInfo);
        // Function to get faculty name from academic array
        function getFacultyName(staff) {
            const academicArray = staff.academic;
        
            // Check if academicArray is defined and has a name property
            if (academicArray && academicArray[0] && academicArray[0].name) {
                // Find the faculty name based on the name property of the academic array
                const facultyMap = {
                    "KQS_Academic": "Kulliyyah of Qur’anic Studies",
                    "CCE_Academic": "Center for Continuing Education",
                    "KAL_Academic": "Kulliyyah of Arabic Language",
                    "KED_Academic": "Kulliyyah of Education",
                    "KSL_Academic": "Kulliyyah of Shar’iah & Law",
                    "KEMS_Academic": "Kulliyyah of Economics & Management Studies",
                    "KIRK_Academic": "Kulliyyah of Islamic Revealed Knowledge & Human Sciences",
                    "CRP_Academic": "Center for Research & Publications",
                    "CPS_Academic": "Center for Postgraduate Studies"
                };
        
                const facultyName = facultyMap[academicArray[0].name] || "Unknown Faculty";
                return facultyName;
            } else {
                return "Unknown Faculty";
            }
        }
        
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
        // Function to create a pop-up message
        function createPopupMessage(title, content) {
            const modal = document.createElement("div");
            modal.className = "modal";
            modal.style.display = "none";
            const modalContent = document.createElement("div");
            modalContent.className = "modal-content";
            const closeModalButton = document.createElement("span");
            closeModalButton.className = "close-modal-button";
            closeModalButton.innerHTML = "×";
            closeModalButton.addEventListener("click", function () {
                modal.style.display = "none";
            });
            const modalTitle = document.createElement("h3");
            modalTitle.textContent = title;

            const modalText = document.createElement("p");
            modalText.textContent = content;

            if (title === "Areas of Specialization" || title === "Awards and Recognition") {
                const contentList = document.createElement("ul");
                const contentItems = content.split('\n').map(item => item.trim());
                contentItems.forEach(item => {
                    const contentItem = document.createElement("li");
                    contentItem.textContent = item;
                    contentList.appendChild(contentItem);
                });
                modalText.appendChild(contentList);
            } else if (title === "Research and Publications") {
                const researchContent = content.split('\n').map(item => item.trim());
                const completedResearchIndex = researchContent.indexOf("Completed Research");
                const ongoingResearchIndex = researchContent.indexOf("Ongoing Research");

                if (completedResearchIndex !== -1) {
                    const completedResearch = researchContent.slice(completedResearchIndex + 1, ongoingResearchIndex !== -1 ? ongoingResearchIndex : undefined);
                    const completedResearchList = document.createElement("ul");
                    completedResearch.forEach(item => {
                        const researchItem = document.createElement("li");
                        researchItem.textContent = item;
                        completedResearchList.appendChild(researchItem);
                    });
                    const completedResearchHeading = document.createElement("h4");
                    completedResearchHeading.textContent = "Completed Research";
                    modalText.appendChild(completedResearchHeading);
                    modalText.appendChild(completedResearchList);
                }

                if (ongoingResearchIndex !== -1) {
                    const ongoingResearch = researchContent.slice(ongoingResearchIndex + 1);
                    const ongoingResearchList = document.createElement("ul");
                    ongoingResearch.forEach(item => {
                        const researchItem = document.createElement("li");
                        researchItem.textContent = item;
                        ongoingResearchList.appendChild(researchItem);
                    });
                    const ongoingResearchHeading = document.createElement("h4");
                    ongoingResearchHeading.textContent = "Ongoing Research";
                    modalText.appendChild(ongoingResearchHeading);
                    modalText.appendChild(ongoingResearchList);
                }
            } else {
                modalText.textContent = content;
            }

            modalContent.appendChild(closeModalButton);
            modalContent.appendChild(modalTitle);
            modalContent.appendChild(modalText);
            modal.appendChild(modalContent);
            return modal;
        }
        // Add Expert Profile section
        const expertProfileSection = document.createElement("div");
        expertProfileSection.className = "expert-profile";
        const profileHeading = document.createElement("h3");
        profileHeading.textContent = "Profile";
        expertProfileSection.appendChild(profileHeading);
        expertProfileSection.addEventListener("click", function () {
            const popupMessage = createPopupMessage("Profile", staff.profile);
            staffInfo.appendChild(popupMessage);
            popupMessage.style.display = "block";
        });
        profileSection.appendChild(expertProfileSection);
        // Add Areas of Specialization section
        const specializationSection = document.createElement("div");
        specializationSection.className = "area-of-specialization";
        const specializationHeading = document.createElement("h3");
        specializationHeading.textContent = "Areas of Specialization";
        specializationSection.appendChild(specializationHeading);
        specializationSection.addEventListener("click", function () {
            const popupMessage = createPopupMessage("Areas of Specialization", staff.specialization.join('\n'));
            staffInfo.appendChild(popupMessage);
            popupMessage.style.display = "block";
        });
        profileSection.appendChild(specializationSection);
        // Add Awards and Recognition section
        const awardsSection = document.createElement("div");
        awardsSection.className = "awards-and-recognition";
        const awardsHeading = document.createElement("h3");
        awardsHeading.textContent = "Awards and Recognition";
        awardsSection.appendChild(awardsHeading);
        awardsSection.addEventListener("click", function () {
            const awardsContent = staff.awards.map(award => `${award.date}: ${award.award} (${award.organization})`).join('\n');
            const popupMessage = createPopupMessage("Awards and Recognition", awardsContent);
            staffInfo.appendChild(popupMessage);
            popupMessage.style.display = "block";
        });
        profileSection.appendChild(awardsSection);
        // Function to create the "Research and Publications" section
        function createResearchSection(title) {
            const section = document.createElement("div");
            section.className = "research-and-publications";
            // Create a title for the section (e.g., "Research and Publications")
            const sectionTitle = document.createElement("h3");
            sectionTitle.textContent = title;
            section.appendChild(sectionTitle);
            section.addEventListener("click", function () {
                const researchContent = [...staff.research.completed, ...staff.research.ongoing].map(item => `${item.year}: ${item.title}`).join('\n');
                const popupMessage = createPopupMessage("Research and Publications", researchContent);
                staffInfo.appendChild(popupMessage);
                popupMessage.style.display = "block";
            });
            return section;
        }
        // Create the "Research and Publications" section
        const researchSection = createResearchSection("Research and Publications");
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
            });
            // Close the modal when clicking outside of it
            window.addEventListener("click", function (event) {
                if (event.target === academicQualificationsModal) {
                    academicQualificationsModal.style.display = "none";
                }
            });
        });
    }
});