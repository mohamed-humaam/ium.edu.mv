document.addEventListener("DOMContentLoaded", function () {
    const facultyData = [
        { name: "Executives", admin: KED_Admin, academic: KED_Academic },
        { name: "Chancellors Bureau", admin: KED_Admin, academic: KED_Academic },
        { name: "Reception", admin: KED_Admin, academic: KED_Academic },
        { name: "Student Affairs", admin: KED_Admin, academic: KED_Academic },
        { name: "Information Technology", admin: KED_Admin, academic: KED_Academic },
        { name: "Human Recourses", admin: KED_Admin, academic: KED_Academic },
        { name: "Finance", admin: KED_Admin, academic: KED_Academic },
        { name: "Procurement", admin: KED_Admin, academic: KED_Academic },
        { name: "Library", admin: KED_Admin, academic: KED_Academic },
        { name: "Facilities & Administration", admin: KED_Admin, academic: KED_Academic },
        { name: "Curriculumn Development", admin: KED_Admin, academic: KED_Academic },
        { name: "Local & International Relations", admin: KED_Admin, academic: KED_Academic },
        { name: "Kulliyyah of Education", admin: KED_Admin, academic: KED_Academic },
        { name: "Kulliyyah of Economics & Management Studies", admin: KEMS_Admin, academic: KEMS_Academic },
        { name: "Kulliyyah of Islamic Revealed Knowledge & Human Sciences", admin: KIRK_Admin, academic: KIRK_Academic },
        { name: "Kulliyyah of Shar’iah & Law", admin: KSL_Admin, academic: KSL_Academic },
        { name: "Kulliyyah of Qur’anic Studies", admin: KQS_Admin, academic: KQS_Academic },
        { name: "Kulliyyah of Arabic Language", admin: KAL_Admin, academic: KAL_Academic },
        { name: "Center for Continuing Education", admin: CCE_Admin, academic: CCE_Academic },
        { name: "Center for Postgraduate Studies", admin: CPS_Admin, academic: CPS_Academic },
        { name: "Center for Research & Publications", admin: CRP_Admin, academic: CRP_Academic },
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
    
        // Create a container for the title
        const titleContainer = document.createElement("div");
        titleContainer.className = "title-container";
        const titleElement = document.createElement("h4");
        titleElement.textContent = title;
        titleContainer.appendChild(titleElement);
    
        // Create a container for the staff cards
        const staffContainer = document.createElement("div");
        staffContainer.className = "staff-container";
    
        staffArray.forEach(function (staff) {
            const staffCard = createStaffCard(staff);
            staffContainer.appendChild(staffCard);
        });
    
        list.appendChild(titleContainer);
        list.appendChild(staffContainer);
    
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
    
        // Create a container for contact details
        const contactContainer = document.createElement("div");
        contactContainer.className = "contact-container";
    
        // Create an icon for the phone and display it on the same line as the number
        const contactNumber = document.createElement("p");
        contactNumber.innerHTML = `<i class="fas fa-phone contact-icon"></i> ${staff.contact}`;
        contactContainer.appendChild(contactNumber);
    
        // Create an icon for email and display it on the same line as the email
        const email = document.createElement("p");
        email.innerHTML = `<i class="fas fa-envelope contact-icon"></i> ${staff.email}`;
        contactContainer.appendChild(email);
    
        card.appendChild(contactContainer);
    
        return card;
    }
    
    
    function toggleFacultyStaff(facultyCard, adminList, academicList) {
        adminList.style.display = adminList.style.display === "none" ? "" : "none";
        academicList.style.display = academicList.style.display === "none" ? "" : "none";
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
