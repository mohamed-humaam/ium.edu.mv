// script.js
const committeeMembers = [
   {
        name: "Mohamed Mahid Shareef",
        universityPosition: "Deputy Vice-Chancellor ( Administration and Finance )",
        committeePosition: "Member",
        photo: "./Images/tmt/DVC%20Uz%20Mahid.jpg", // Add the image file path
    },
     {
        name: "Dr. Saudullah Ali",
        universityPosition: "Deputy Vice-Chancellor ( Academic Affairs)",
        committeePosition: "Member",
        photo: "./Images/tmt/DVC%20DR%20Saud.jpg", // Add the image file path
    },
        {
        name: "Dr. Dheeba Moosa",
        universityPosition: "Deputy Vice-Chancellor (Research and Innovation)",
        committeePosition: "Member",
        photo: "./Images/tmt/DVC%20DR%20Dheeba.jpg", // Add the image file path
    },

     {
        name: "Ahmed Rauf Abdulla",
        universityPosition: "Registrar",
        committeePosition: "Member",
        photo: "./Images/tmt/DVC%20DR%20Dheeba.jpg", // Add the image file path
    },

     {
        name: "Ahmadhulla Mauthoof",
        universityPosition: "Director (Human Resource)",
        committeePosition: "Member",
        photo: "./Images/tmt/DVC%20DR%20Dheeba.jpg", // Add the image file path
    },

     {
        name: "Dr. Aishath Reesha",
        universityPosition: "Dean (Kulliyyah of Education)",
        committeePosition: "Member",
        photo: "./Images/tmt/DVC%20DR%20Dheeba.jpg", // Add the image file path
    },

          {
        name: "Shafeeaa Mohamed Naseer",
        universityPosition: "Director  (Finance)",
        committeePosition: "Member",
        photo: "./Images/tmt/DVC%20DR%20Dheeba.jpg", // Add the image file path
    },
    // Add more committee members here
];

const committeeContainer = document.querySelector(".committee-members");

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
