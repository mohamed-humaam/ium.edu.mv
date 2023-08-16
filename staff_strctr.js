// Your existing code for initializing the page and other elements...

// Sample staff data for different faculties
// Import data from your *_data.js files
const faculties = [
    {
        name: "CCE",
        data: {
            admin: CCE_Admin,
            academic: CCE_Academic
        }
    },
    {
        name: "CPS",
        data: {
            admin: CPS_Admin,
            academic: CPS_Academic
        }
    },
    {
        name: "KAL",
        data: {
            admin: KAL_Admin,
            academic: KAL_Academic
        }
    },
    // Add other faculties here
];

const facultyCardsContainer = document.getElementById("facultyCards");
const staffContainer = document.getElementById("staffContainer");

function createFacultyCard(faculty) {
    const card = document.createElement("div");
    card.className = `faculty-card ${faculty.name.toLowerCase()}`;
    card.textContent = faculty.name;
    card.addEventListener("click", () => toggleFacultyStaff(faculty));

    return card;
}

function createStaffCard(staff) {
    // Create and return the staff card element here
}

function toggleFacultyStaff(faculty) {
    const staffContainer = document.querySelector(".staff-container");
    staffContainer.innerHTML = "";

    faculty.data.admin.forEach(staff => {
        const card = createStaffCard(staff);
        staffContainer.appendChild(card);
    });

    faculty.data.academic.forEach(staff => {
        const card = createStaffCard(staff);
        staffContainer.appendChild(card);
    });

    facultyCards.forEach(card => card.classList.remove("expanded"));
    const clickedCard = document.querySelector(`.${faculty.name.toLowerCase()}`);
    clickedCard.classList.toggle("expanded");
}

function initializeFacultyCards() {
    faculties.forEach(faculty => {
        const card = createFacultyCard(faculty);
        facultyCardsContainer.appendChild(card);
    });
}

// Initialize faculty cards
initializeFacultyCards();
