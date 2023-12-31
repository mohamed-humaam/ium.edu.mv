// script.js
const committeeMembers = [
    {
         name: "Dr. Ibrahim Zakariyya Moosa",
        universityPosition: "Vice Chancellor",
        committeePosition: "Chair",
        photo: "./Images/tmt/VC-Dr.png", // Add the image file path
    },
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
        photo: "./Images/smt/rauf uz.JPG", // Add the image file path
    },

     {
        name: "Ahmadhulla Mauthoof",
        universityPosition: "Director (Human Resource)",
        committeePosition: "Member",
        photo: " ", // Add the image file path
    },

     {
        name: "Dr. Abdulla Jameel",
        universityPosition: "Dean (Center for Postgraduate Studies)",
        committeePosition: "Member",
        photo: "./Images/smt/CPS Dean Dr Jameel.jpg", // Add the image file path
    },

     {
        name: "Dr. Ismail Shafeeu",
        universityPosition: "Dean (Center for Research and Publications)",
        committeePosition: "Member",
        photo: "./Images/smt/CRP Dean Dr Ismail Shafeeu.jpg", // Add the image file path
    },

     {
        name: "Dr. Aishath Reesha",
        universityPosition: "Dean (Kulliyyah of Education)",
        committeePosition: "Member",
        photo: "./Images/smt/KED Dean Dr Reesha.jpg", // Add the image file path
    },

       {
        name: "Ahmed Munavar",
        universityPosition: "Dean (Kulliyyah of Economics and Management Studies)",
        committeePosition: "Member",
        photo: "./Images/smt/KEM Dean Uz Munawwar.jpg", // Add the image file path
    },

       {
        name: "Mohamed Mansoor",
        universityPosition: "Dean (Kulliyyah of Quran and Sunnah)",
        committeePosition: "Member",
        photo: "./Images/smt/KQS Dean Uz Mansoor.jpg", // Add the image file path
    },

       {
        name: "Ahmed Saleem",
        universityPosition: "Dean (Kulliyyah of Islamic Revealed Knowledge and Human Sciences)",
        committeePosition: "Member",
        photo: "./Images/smt/KIRK Dean Uz. Saleem.jpg", // Add the image file path
    },

         {
        name: "Mohamed Shaheen",
        universityPosition: "Dean (Center for Continuing Education)",
        committeePosition: "Member",
        photo: "./Images/smt/CCE Dean Uz Shaheen.jpg", // Add the image file path
    },

         {
        name: "Dr. Mohamed Shujau Abdul Hakeem",
        universityPosition: "Dean (Kulliyyah of Shari'ah and Law)",
        committeePosition: "Member",
        photo: "./Images/smt/KSL Dean Dr Shujau.JPG", // Add the image file path
    },

         {
        name: "Mohamed Imran",
        universityPosition: "Curriculum, Instruction and Assessment Specialist ",
        committeePosition: "Member",
        photo: "./Images/smt/mohamed imran.JPG", // Add the image file path
    },

         {
        name: "Dr. Aishath Waheeda",
        universityPosition: "Examinations Controller",
        committeePosition: "Member",
        photo: "./Images/smt/dr aishath waheeda.JPG", // Add the image file path
    },

         {
        name: "Moosa Adnan",
        universityPosition: "System Administrator",
        committeePosition: "Member",
        photo: " ", // Add the image file path
    },

         {
        name: "Mohamed Yaniu Hashim",
        universityPosition: "Director  (Chancellor Bureau)",
        committeePosition: "Member",
        photo: "./Images/smt/yaaniu.JPG", // Add the image file path
    },

          {
        name: "Aishath Ali",
        universityPosition: "Director  (Procurement)",
        committeePosition: "Member",
        photo: "./Images/smt/aishaaal-16436364657QF6s.png", // Add the image file path
    },

          {
        name: "Shafeeaa Mohamed Naseer",
        universityPosition: "Director  (Finance)",
        committeePosition: "Member",
        photo: "./Images/smt/shafy.png", // Add the image file path
    },

          {
        name: "Fathimath Nashath",
        universityPosition: "Chief Librarian",
        committeePosition: "Member",
        photo: "./Images/smt/nashath.JPG", // Add the image file path
    },

          {
        name: "Dr. Aishath Shina",
        universityPosition: "Acting Director  (Local and International Relations)",
        committeePosition: "Member",
        photo: "./Images/smt/shinaa-1643644944HJ3nY.png", // Add the image file path
    },
          {
        name: "Ali Fahumy",
        universityPosition: "Assistant Director  (Maintenance)",
        committeePosition: "Member",
        photo: "./Images/smt/fahmy-1643637616CCN0b.png", // Add the image file path
    },
          {
        name: "Abdul Hafeez Khalid",
        universityPosition: "Dean of Students",
        committeePosition: "Member",
        photo: " ", // Add the image file path
    },
          {
        name: "Aishath Shifa",
        universityPosition: "Quality Assuarance Controller",
        committeePosition: "Member",
        photo: " ", // Add the image file path
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
