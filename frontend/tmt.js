// script.js
const committeeMembers = [
    {
        name: "Dr. Ibrahim Zakariyya Moosa",
        universityPosition: "Vice Chancellor",
        committeePosition: "Chair",
        photo: "./Images/tmt/VC-Dr.png", // Add the image file path
        occupation: "Vice Chancellor",
        contact: "+960330122",
        email: "example@ium.edu.mv"
    },
    {
        name: "Mohamed Mahid Shareef",
        universityPosition: "Deputy Vice-Chancellor ( Administration and Finance )",
        committeePosition: "Member",
        photo: "./Images/tmt/DVC%20Uz%20Mahid.jpg", // Add the image file path
        occupation: "DVC - Administration and Finance",
        contact: "+960330122",
        email: "example@ium.edu.mv"
    },
     {
        name: "Dr. Saudullah Ali",
        universityPosition: "Deputy Vice-Chancellor ( Academic Affairs)",
        committeePosition: "Member",
        photo: "./Images/tmt/DVC%20DR%20Saud.jpg", // Add the image file path
        occupation: "DVC - Academic Affairs",
        contact: "+960330122",
        email: "example@ium.edu.mv"
    },
        {
        name: "Dr. Dheeba Moosa",
        universityPosition: "Deputy Vice-Chancellor (Research and Innovation)",
        committeePosition: "Member",
        photo: "./Images/tmt/DVC%20DR%20Dheeba.jpg", // Add the image file path
        occupation: "DVC - Reserch and Innovations",
        contact: "+960330122",
        email: "example@ium.edu.mv"
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
