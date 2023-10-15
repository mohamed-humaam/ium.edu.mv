document.addEventListener("DOMContentLoaded", function () {
    const facultyData = [
        { name: "KED", admin: KED_Admin, academic: KED_Academic },
        { name: "KEMS", admin: KEMS_Admin, academic: KEMS_Academic },
        { name: "KIRK", admin: KIRK_Admin, academic: KIRK_Academic },
        { name: "KSL", admin: KSL_Admin, academic: KSL_Academic },
        { name: "KQS", admin: KQS_Admin, academic: KQS_Academic },
        { name: "KAL", admin: KAL_Admin, academic: KAL_Academic },
        { name: "CCE", admin: CCE_Admin, academic: CCE_Academic },
        { name: "CPS", admin: CPS_Admin, academic: CPS_Academic },
        // Add more faculties here
    ];

    const facultyCardsContainer = document.getElementById("facultyCards");

    function createFacultyCard(faculty) {
        const card = document.createElement("div");
        card.className = `faculty-card ${faculty.name.toLowerCase()}`;
        card.textContent = faculty.name;

        const adminList = createStaffList(faculty.admin, "Admin Staff");
        const academicList = createStaffList(faculty.academic, "Academic Staff");

        adminList.style.display = "none"; // Initially hidden
        academicList.style.display = "none"; // Initially hidden

        card.appendChild(adminList);
        card.appendChild(academicList);

        card.addEventListener("click", () => toggleFacultyStaff(card, adminList, academicList));
        return card;
    }

    function createStaffList(staffArray, title) {
        const list = document.createElement("div");
        list.className = "staff-list";
        const titleElement = document.createElement("h4");
        titleElement.textContent = title;
        list.appendChild(titleElement);

        staffArray.forEach(function (staff) {
            const staffCard = createStaffCard(staff);
            list.appendChild(staffCard);
        });

        return list;
    }

    function createStaffCard(staff) {
        const card = document.createElement("div");
        card.className = "staff-card";

        const photo = document.createElement("img");
        photo.src = staff.photo;
        photo.alt = staff.name;
        photo.className = "staff-photo";
        card.appendChild(photo);

        const name = document.createElement("p");
        name.textContent = staff.name;
        name.className = "staff-name";
        card.appendChild(name);

        const occupation = document.createElement("p");
        occupation.textContent = staff.occupation;
        occupation.className = "staff-occupation";
        card.appendChild(occupation);

        return card;
    }

    function toggleFacultyStaff(facultyCard, adminList, academicList) {
        adminList.style.display = adminList.style.display === "none" ? "block" : "none";
        academicList.style.display = academicList.style.display === "none" ? "block" : "none";
        facultyCard.classList.toggle("expanded");
    }

    function initializeFacultyCards() {
        facultyData.forEach(faculty => {
            const card = createFacultyCard(faculty);
            facultyCardsContainer.appendChild(card);
        });
    }

    // Initialize faculty cards
    initializeFacultyCards();
});
