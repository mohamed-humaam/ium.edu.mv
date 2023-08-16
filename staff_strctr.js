// Your existing code...

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
    {
        name: "KED",
        data: {
            admin: KED_Admin,
            academic: KED_Academic
        }
    },
    {
        name: "KEMS",
        data: {
            admin: KEMS_Admin,
            academic: KEMS_Academic
        }
    },
    {
        name: "KIRK",
        data: {
            admin: KIRK_Admin,
            academic: KIRK_Academic
        }
    },
    {
        name: "KQS",
        data: {
            admin: KQS_Admin,
            academic: KQS_Academic
        }
    },
    {
        name: "KSL",
        data: {
            admin: KSL_Admin,
            academic: KSL_Academic
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

function toggleFacultyStaff(faculty) {
    console.log('Clicked:', faculty.name); // Add this line
    
    staffContainer.innerHTML = "";

    faculty.data.admin.forEach(staff => {
        const card = createStaffCard(staff);
        staffContainer.appendChild(card);
    });

    faculty.data.academic.forEach(staff => {
        const card = createStaffCard(staff);
        staffContainer.appendChild(card);
    });

    const facultyCards = document.querySelectorAll(".faculty-card");
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
