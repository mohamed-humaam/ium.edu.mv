document.addEventListener("DOMContentLoaded", function () {
    const facultyData = [
        { name: "Executives", executives: committeeMembers },
        { name: "Chancellor's Bureau", director: Bureau_Director, staff: Bureau_Staff },
        { name: "Reception", staff: Reception_Staff },
        { name: "Student Affairs", dean: [SA_Dean], staff: SA_Admin },
        { name: "Dean of Students", dean: [DOS_Dean], staff: DOS_Admin },
        { name: "Information Technology", director: IT_Director, staff: IT_Staff },
        { name: "Human Resources", director: HR_Director, staff: HR_Staff },
        { name: "Finance", director: Finance_Director, staff: Finance_Staff },
        { name: "Procurement", director: Procurement_Director, staff: Procurement_Staff },
        { name: "Library", director: Library_Director, staff: Library_Staff },
        { name: "Facilities & Administration", director: Facilities_Director, staff: Facilities_Staff },
        { name: "Curriculum Development", director: curriculumn_Director, staff: curriculumn_Staff },
        { name: "Local & International Relations", director: lir_Director },
        { name: "Kulliyyah of Education", dean: [KED_Dean], academic: KED_Academic, admin: KED_Admin },
        { name: "Kulliyyah of Economics & Management Studies", dean: [KEMS_Dean], academic: KEMS_Academic, admin: KEMS_Admin },
        { name: "Kulliyyah of Islamic Revealed Knowledge & Human Sciences", dean: [KIRK_Dean], academic: KIRK_Academic, admin: KIRK_Admin },
        { name: "Kulliyyah of Shar’iah & Law", dean: [KSL_Dean], academic: KSL_Academic, admin: KSL_Admin },
        { name: "Kulliyyah of Qur’anic Studies", dean: [KQS_Dean], academic: KQS_Academic, admin: KQS_Admin },
        { name: "Kulliyyah of Arabic Language", dean: [KAL_Dean], academic: KAL_Academic, admin: KAL_Admin },
        { name: "Center for Continuing Education", dean: [CCE_Dean], academic: CCE_Academic, admin: CCE_Admin },
        { name: "Center for Postgraduate Studies", dean: [CPS_Dean], academic: CPS_Academic, admin: CPS_Admin },
        { name: "Center for Research & Publications", dean: [CRP_Dean], academic: CRP_Academic, admin: CRP_Admin },
        // Add more departments here
    ];

    const facultyCardsContainer = document.getElementById("facultyCards");

    function createStaffCard(staff) {
        const card = document.createElement("div");
        card.className = "staff-card";

        const staffPhoto = document.createElement("div");
        staffPhoto.className = "staff-photo";

        // Check if staff has a photo and set the background image
        if (staff.photo) {
            staffPhoto.style.backgroundImage = `url(${staff.photo})`;
        } else {
            // Set a default background image or handle missing photo
            staffPhoto.style.backgroundImage = `url('./path/to/default/photo.jpg')`;
        }

        const staffInfo = document.createElement("div");
        staffInfo.className = "staff-info";

        const staffName = document.createElement("h3");
        staffName.className = "staff-name";
        staffName.textContent = staff.name;

        const staffOccupation = document.createElement("p");
        staffOccupation.className = "staff-occupation";
        staffOccupation.textContent = staff.occupation;

        const staffContact = document.createElement("p");
        staffContact.className = "staff-contact";
        staffContact.textContent = "Contact: " + staff.contact;

        const staffEmail = document.createElement("p");
        staffEmail.className = "staff-email";
        staffEmail.textContent = "Email: " + staff.email;

        staffInfo.appendChild(staffName);
        staffInfo.appendChild(staffOccupation);
        staffInfo.appendChild(staffContact);
        staffInfo.appendChild(staffEmail);

        card.appendChild(staffPhoto);
        card.appendChild(staffInfo);

        return card;
    }

    function toggleFacultyCard(facultyCard) {
        facultyCard.classList.toggle("expanded");
    }

    function initializeFacultyCards() {
        facultyData.forEach(faculty => {
            const card = createFacultyCard(faculty);
            facultyCardsContainer.appendChild(card);

            // Add click event listener to faculty card
            card.addEventListener("click", () => {
                toggleFacultyCard(card);
            });
        });
    }

    function createFacultyCard(faculty) {
        const facultyCard = document.createElement("div");
        facultyCard.className = `faculty-card ${faculty.name.toLowerCase()}`;

        const titleContainer = document.createElement("div");
        titleContainer.className = "title-container";
        titleContainer.textContent = faculty.name;

        const staffContainer = document.createElement("div");
        staffContainer.className = "staff-container";

        // Display staff information in the order defined in facultyData
        const staffTypes = [
            faculty.dean,
            faculty.academic,
            faculty.admin,
            faculty.executives,
            faculty.director,
            faculty.staff,
        ];

        staffTypes.forEach(staffArray => {
            if (Array.isArray(staffArray)) {
                staffArray.forEach(staff => {
                    const staffCard = createStaffCard(staff);
                    staffContainer.appendChild(staffCard);
                });
            }
        });

        facultyCard.appendChild(titleContainer);
        facultyCard.appendChild(staffContainer);

        return facultyCard;
    }

    initializeFacultyCards();

    facultyCardsContainer.addEventListener("click", (event) => {
        const clickedStaffCard = event.target.closest(".staff-card");
        if (clickedStaffCard) {
            const staffName = clickedStaffCard.querySelector(".staff-name").textContent;
            window.location.href = `staff-portfolio.html?staff=${staffName}`;
        }
    });
});