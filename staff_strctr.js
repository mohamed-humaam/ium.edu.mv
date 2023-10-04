document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const staffInfo = document.getElementById("staffInfo");
    
    let isStaffVisible = false;
    
    toggleButton.addEventListener("click", function () {
        if (isStaffVisible) {
            // If staff information is visible, hide it and clear the content
            staffInfo.innerHTML = "";
            //staffInfo.style.display = "none";
        } else {
            // If staff information is hidden, show it
            showKEDStaff();
            //staffInfo.style.display = "block";
        }
        
        // Toggle the flag
        isStaffVisible = !isStaffVisible;
    });
    
    function showKEDStaff() {
        // Clear the existing content
        staffInfo.innerHTML = "";
        
        // Create a list to display staff information
        const list = document.createElement("ul");
        
        // Iterate through KED_Admin and add staff information to the list
        KED_Admin.forEach(function (staff) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <h2>${staff.name}</h2>
                <p>Occupation: ${staff.occupation}</p>
                <img src="${staff.photo}" alt="${staff.name}" />
            `;
            list.appendChild(listItem);
        });
        
        // Append the list to the staffInfo div
        staffInfo.appendChild(list);
    }
});


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
