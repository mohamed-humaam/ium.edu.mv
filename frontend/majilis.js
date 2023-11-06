// script.js
const committeeMembers = [
    {
        name: "Dr. Mohamed Zahir Hussain",
        universityPosition: "Chancellor",
        committeePosition: "Chair",
        photo: "./Images/majlis/Chancellor-Dr-zahir.png", // Add the image file path
    },
    {
        name: "Dr. Ibrahim Zakariyya Moosa",
        universityPosition: "Vice Chancellor",
        committeePosition: "Member",
        photo: "./Images/tmt/VC-Dr.jpg", // Add the image file path
    },

     {
        name: "Dr. Saudullah Ali",
        universityPosition: "Deputy Vice Chancellor - Academic",
        committeePosition: "Member",
        photo: "./Images/tmt/DVC DR Saud.jpg", // Add the image file path
    },

         {
        name: "Mohamed Mahid Shareef",
        universityPosition: "Deputy Vice Chancellor - Administration and Finance",
        committeePosition: "Member (Member appointed by majlis for a specific time period)",
        photo: "./Images/tmt/DVC Uz Mahid.jpg", // Add the image file path
    },

            {
        name: "Dr. Aishath Waheeda",
        universityPosition: "Examinations Controller",
        committeePosition: "Member (on behalf of the Deans)",
        photo: "./Images/majlis/dr aishath waheeda.JPG", // Add the image file path
    },

      {
        name: "Mohamed Mansoor",
        universityPosition: "Dean - Kulliyyah of Quran and Sunnah",
        committeePosition: "Member (on behalf of the Deans)",
        photo: "./Images/majlis/KQS Dean Uz Mansoor.jpg ", // Add the image file path
    },

        {
        name: "Mohamed Imran",
        universityPosition: "Curriculum, Instruction and Assessment Specialist ",
        committeePosition: "Member (on behalf of Academic Board)",
        photo: "./Images/majlis/mohamed imran.JPG", // Add the image file path
    },

    
      {
        name: "Al-Ustaz Hussain Mohamed Haneef",
        committeePosition: "Member (Sharia and Law)",
        photo: "./Images/majlis/uz h m haneeef.JPG", // Add the image file path
    },
      {
        name: "Ibrahim Ali",
        committeePosition: "Member (on behalf of Lecturers)",
        photo: "./Images/majlis/ibrahim ali.JPG", // Add the image file path
    },

        {
        name: "Hawwa Latheef ",
        committeePosition: "Member  (on behalf of Alumni)",
        photo: "./Images/majlis/hawwa latheef.JPG", // Add the image file path
    },

        {
        name: "Maryam Simana ",
        committeePosition: "Member (on behalf of Students)",
        photo: "./Images/majlis/maryam simaana.JPG", // Add the image file path
    },

           {
        name: "Mohamed Yaaniu Hashim ",
        committeePosition: "Member (on behalf of Admin Staffs)",
        photo: "./Images/majlis/yaaniu.JPG", // Add the image file path
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
