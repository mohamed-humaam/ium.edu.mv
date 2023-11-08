// script.js
const committeeMembers = [
    
        {
       name: "Dr. Saudullah Ali",
       universityPosition: "Deputy Vice-Chancellor ( Academic Affairs)",
       committeePosition: "Member",
       photo: "./Images/tmt/DVC%20DR%20Saud.jpg", // Add the image file path
   },
      
    {
       name: "Ahmed Rauf Abdulla",
       universityPosition: "Registrar",
       committeePosition: "Member",
       photo: "./Images/Profile photos of staffs/rauf.JPG", // Add the image file path
   },


        {
       name: "Mohamed Imran",
       universityPosition: "Curriculum, Instruction and Assessment Specialist ",
       committeePosition: "Member",
       photo: " ", // Add the image file path
      // photo: "./Images/smt/mohamed imran.JPG", // Add the image file path
   },

        {
       name: "Dr. Aishath Waheeda",
       universityPosition: "Examinations Controller",
       committeePosition: "Member",
       photo: "./Images/Profile photos of staffs/dr aisha exam.JPG", // Add the image file path
   },


         {
       name: "Aroosha Mahir ",
       universityPosition: "Lecturer, Kulliyyah of Quran and Sunnah",
       committeePosition: "Member",
       photo: "./Images/Profile photos of staffs/aroosha.JPG ", // Add the image file path
   },

         {
       name: "Mohamed Uwais",
       universityPosition: "Lecturer, Kulliyyah of Arabic Language",
       committeePosition: "Member",
       photo: " ", // Add the image file path
   },
         {
       name: "Saamiya Zakariyya ",
       universityPosition: "Senior Lecturer, Kulliyyah of Education",
       committeePosition: "Member",
       photo: " ", // Add the image file path
   },
         {
       name: "Fareedha Mohamed",
       universityPosition: "Lecturer, Kulliyyah of Islamic Revealed Knowledge, and Human Sciences",
       committeePosition: "Member",
       photo: "./Images/Profile photos of staffs/fareedha.JPG ", // Add the image file path
   },
         {
       name: "Aminath Zuhudha",
       universityPosition: "Lecturer, Center for Continuing Education",
       committeePosition: "Member",
       photo: " ", // Add the image file path
   },

   {
    name: "Aishath Sinaau  ",
    universityPosition: " Lecturer, Kulliyyah of Economics and Management Studies",
    committeePosition: "Member",
    photo: "./Images/Profile photos of staffs/sinaau.JPG", // Add the image file path
},
{
    name: "•	Ikram Abdul Sattar   ",
    universityPosition: " Lecturer, Kulliyyah of Shari'ah and Law",
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
