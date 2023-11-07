document.addEventListener("DOMContentLoaded", function () {
    const facultyData = [
        { name: "Executives", executives: committeeMembers },
        { name: "Chancellor's Bureau", director: Bureau_Director, staff: Bureau_Staff },
        { name: "Reception", staff: Reception_Staff },
        { name: "Student Affairs", dean: SA_Dean, staff: SA_Admin },
        { name: "Dean of Students", dean: DOS_Dean, staff: DOS_Admin },
        { name: "Information Technology", director: IT_Director, staff: IT_Staff },
        { name: "Human Resources", director: HR_Director, staff: HR_Staff },
        { name: "Finance", director: Finance_Director, staff: Finance_Staff },
        { name: "Procurement", director: Procurement_Director, staff: Procurement_Staff },
        { name: "Library", director: Library_Director, staff: Library_Staff },
        { name: "Facilities & Administration", director: Facilities_Director, staff: Facilities_Staff },
        { name: "Curriculum Development", director: curriculumn_Director, staff: curriculumn_Staff },
        { name: "Local & International Relations", dean: lir_Director, staff: lir_Staff },
        { name: "Kulliyyah of Education", dean: KED_Dean, academic: KED_Academic, admin: KED_Admin },
        { name: "Kulliyyah of Economics & Management Studies", dean: KEMS_Dean, academic: KEMS_Academic, admin: KEMS_Admin },
        { name: "Kulliyyah of Islamic Revealed Knowledge & Human Sciences", dean: KIRK_Dean, academic: KIRK_Academic, admin: KIRK_Admin },
        { name: "Kulliyyah of Shar’iah & Law", dean: KSL_Dean, academic: KSL_Academic, admin: KSL_Admin },
        { name: "Kulliyyah of Qur’anic Studies", dean: KQS_Dean, academic: KQS_Academic, admin: KQS_Admin },
        { name: "Kulliyyah of Arabic Language", dean: KAL_Dean, academic: KAL_Academic, admin: KAL_Admin },
        { name: "Center for Continuing Education", dean: CCE_Dean, academic: CCE_Academic, admin: CCE_Admin },
        { name: "Center for Postgraduate Studies", dean: CPS_Dean, academic: CPS_Academic, admin: CPS_Admin },
        { name: "Center for Research & Publications", dean: CRP_Dean, academic: CRP_Academic, admin: CRP_Admin },
        // Add more departments here
    ];

    const constExecutives = facultyData.find(entry => entry.name === "Executives");
    const constLibrary = facultyData.find(entry => entry.name === "Library");
    const constDepartmetns = facultyData.filter(entry => entry.name !== "Executives" && entry.name !== "Library");
    const constSA = facultyData.find(entry => entry.name === "Student Affairs");
    const constDOS = facultyData.find(entry => entry.name === "Dean of Students");
    const constCenters = facultyData.filter(entry => entry.name.includes("Center"));
    const constFaculties = facultyData.filter(entry => entry.name.startsWith("Kulliyyah"));

    const facultyCardsContainer = document.getElementById("facultyCards");

    function createStaffCard(staff) {
        const card = document.createElement("div");
        card.className = "staff-card";

        const staffPhoto = document.createElement("div");
        staffPhoto.className = "staff-photo";
        staffPhoto.style.backgroundImage = `url(${staff.photo})`;

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

    // Assuming you have an element with the ID 'committeeContainer'
    const committeeContainer = document.getElementById("committeeContainer");

    if (committeeContainer) {
        committeeMembers.forEach((member) => {
            const memberCard = document.createElement("div");
            memberCard.classList.add("member-card");

            const memberPhoto = document.createElement("img");
            memberPhoto.classList.add("member-photo");
            memberPhoto.src = member.photo;
            memberPhoto.alt = member.name;

            const memberName = document.createElement("div");
            memberName.classList.add("member-name");
            memberName.textContent = member.name;

            const memberUniversityPosition = document.createElement("div");
            memberUniversityPosition.classList.add("member-university-position");
            memberUniversityPosition.textContent = member.universityPosition;

            const memberCommitteePosition = document.createElement("div");
            memberCommitteePosition.classList.add("member-committee-position");
            memberCommitteePosition.textContent = member.committeePosition;

            memberCard.appendChild(memberPhoto);
            memberCard.appendChild(memberName);
            memberCard.appendChild(memberUniversityPosition);
            memberCard.appendChild(memberCommitteePosition);

            committeeContainer.appendChild(memberCard);
        });
    }

    function createStaffList(staffArray, title) {
        const list = document.createElement("div");
        list.className = "staff-list";

        const titleContainer = document.createElement("div");
        titleContainer.className = "title-container";
        const titleElement = document.createElement("h4");
        titleElement.textContent = title;
        titleContainer.appendChild(titleElement);

        const staffContainer = document.createElement("div");
        staffContainer.className = "staff-container";

        if (staffArray) {
            staffArray.forEach(function (staff) {
                const staffCard = createStaffCard(staff);
                staffContainer.appendChild(staffCard);
            });
        }

        list.appendChild(titleContainer);
        list.appendChild(staffContainer);

        return list;
    }

    // Function to create a list for Deans
    function createDeanList(dean, title) {
        const list = document.createElement("div");
        list.className = "dean-list";

        const titleContainer = document.createElement("div");
        titleContainer.className = "title-container";
        const titleElement = document.createElement("h4");
        titleElement.textContent = title;
        titleContainer.appendChild(titleElement);

        const deanContainer = document.createElement("div");
        deanContainer.className = "dean-container";

        if (dean) {
            const deanCard = createStaffCard(dean);
            deanContainer.appendChild(deanCard);
        }

        list.appendChild(titleContainer);
        list.appendChild(deanContainer);

        return list;
    }

    function createFacultyCard(faculty) {
        const card = document.createElement("div");
        card.className = `faculty-card ${faculty.name.toLowerCase()}`;

        const facultyNameContainer = document.createElement("div");
        facultyNameContainer.className = "faculty-name-container";
        facultyNameContainer.textContent = faculty.name;

        card.appendChild(facultyNameContainer);

        let adminTitle;
        if (faculty.name === "Executives") {
            adminTitle = "Executive Members";
        } else if (["KEMS", "KED", "KIRK", "KSL", "KQS", "CCE", "CPS", "CRP", "IT"].includes(faculty.name)) {
            adminTitle = "Dean, Academic Staff, and Administrative Staff";
        } else if (faculty.name === "SA") {
            adminTitle = "Registrar and Administrative Staff";
        } else if (faculty.name === "DOS") {
            adminTitle = "Dean of Students";
        } else {
            adminTitle = "Director and Administrative Staffs";
        }

        if (faculty.director || faculty.staff || faculty.admin || faculty.academic || faculty.dean || faculty.executives) {
            const adminList = createStaffList(faculty.director || faculty.staff || faculty.admin || faculty.executives, adminTitle);
            const staffList = createStaffList(faculty.staff || faculty.academic, "Staff");
            const deanList = createDeanList(faculty.dean, "Dean");

            adminList.style.display = "none"; // Initially hidden
            staffList.style.display = "none"; // Initially hidden
            deanList.style.display = "none"; // Initially hidden

            card.appendChild(adminList);
            card.appendChild(staffList);
            card.appendChild(deanList);

            facultyNameContainer.addEventListener("click", () => toggleFacultyStaff(card, adminList, staffList, deanList));
        }

        return card;
    }

    function initializeFacultyCards() {
        facultyData.forEach(faculty => {
            const card = createFacultyCard(faculty);
            facultyCardsContainer.appendChild(card);
        });
    }

    initializeFacultyCards();

    facultyCardsContainer.addEventListener("click", (event) => {
        const clickedStaffCard = event.target.closest(".staff-card");
        if (clickedStaffCard) {
            const staffName = clickedStaffCard.querySelector(".staff-name").textContent;
            window.location.href = `staff-portfolio.html?staff=${staffName}`;
        }
    });

    function toggleFacultyStaff(card, adminList, staffList, deanList) {
        if (adminList.style.display === "none") {
            adminList.style.display = "block";
            staffList.style.display = "block";
            deanList.style.display = "block";
        } else {
            adminList.style.display = "none";
            staffList.style.display = "none";
            deanList.style.display = "none";
        }
    }
});
