// script.js
const committeeMembers = [
    {
        name: "Dr. Mohamed Zahir Hussain",
        universityPosition: "Chancellor",
        committeePosition: "Chair",
        photo: "./Images/tmt/VC-Dr.jpg", // Add the image file path
    },
    {
        name: "Dr. Ibrahim Zakariyya Moosa",
        universityPosition: "Vice Chancellor",
        committeePosition: "Member",
        photo: "./Images/tmt/VC-Dr.jpg", // Add the image file path
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
