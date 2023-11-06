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
       photo: "./Images/ab/rauf uz.JPG", // Add the image file path
   },
  

    {
       name: "Dr. Abdulla Jameel",
       universityPosition: "Dean (Center for Postgraduate Studies)",
       committeePosition: "Member",
       photo: "./Images/ab/CPS Dean Dr Jameel.jpg", // Add the image file path
   },

    {
       name: "Dr. Ismail Shafeeu",
       universityPosition: "Dean (Center for Research and Publications)",
       committeePosition: "Member",
       photo: "./Images/ab/CRP Dean Dr Ismail Shafeeu.jpg", // Add the image file path
   },

    {
       name: "Dr. Aishath Reesha",
       universityPosition: "Dean (Kulliyyah of Education)",
       committeePosition: "Member",
       photo: "./Images/ab/KED Dean Dr Reesha.jpg", // Add the image file path
   },

      {
       name: "Ahmed Munavar",
       universityPosition: "Dean (Kulliyyah of Economics and Management Studies)",
       committeePosition: "Member",
       photo: "./Images/ab/KEM Dean Uz Munawwar.jpg", // Add the image file path
   },

      {
       name: "Mohamed Mansoor",
       universityPosition: "Dean (Kulliyyah of Quran and Sunnah)",
       committeePosition: "Member",
       photo: "./Images/ab/KQS Dean Uz Mansoor.jpg", // Add the image file path
   },

      {
       name: "Ahmed Saleem",
       universityPosition: "Dean (Kulliyyah of Islamic Revealed Knowledge and Human Sciences)",
       committeePosition: "Member",
       photo: "./Images/ab/KIRK Dean Uz. Saleem.jpg", // Add the image file path
   },

        {
       name: "Mohamed Shaheen",
       universityPosition: "Dean (Center for Continuing Education)",
       committeePosition: "Member",
       photo: "./Images/ab/CCE Dean Uz Shaheen.jpg", // Add the image file path
   },

        {
       name: "Dr. Mohamed Shujau Abdul Hakeem",
       universityPosition: "Dean (Kulliyyah of Shari'ah and Law)",
       committeePosition: "Member",
       photo: "./Images/ab/KSL Dean Dr Shujau.JPG", // Add the image file path
   },

        {
       name: "Mohamed Imran",
       universityPosition: "Curriculum, Instruction and Assessment Specialist ",
       committeePosition: "Member",
       photo: "./Images/ab/mohamed imran.JPG", // Add the image file path
   },

        {
       name: "Dr. Aishath Waheeda",
       universityPosition: "Examinations Controller",
       committeePosition: "Member",
       photo: "./Images/ab/dr aishath waheeda.JPG", // Add the image file path
   },


         {
       name: "Fathimath Nashath",
       universityPosition: "Chief Librarian",
       committeePosition: "Member",
       photo: "./Images/ab/nashath.JPG", // Add the image file path
   },

         {
       name: "Aishath Sinaau",
       universityPosition: "Lecturer)",
       committeePosition: "Member",
       photo: "./Images/ab/aishath sinaau.JPG", // Add the image file path
   },

         {
       name: "Dr. Fathimath Muna",
       universityPosition: "Senior Lecturer)",
       committeePosition: "Member",
       photo: "./Images/ab/dr fathimath muna.JPG", // Add the image file path
   },
         {
       name: "Abdul Mueed Hassan",
       universityPosition: "Associate Lecturer)",
       committeePosition: "Member",
       photo: " ", // Add the image file path
   },
         {
       name: "Nasrulla Ahmed",
       universityPosition: "Lecturer)",
       committeePosition: "Member",
       photo: " ", // Add the image file path
   },
     {
       name: "Dr. Mohamed Solih",
       universityPosition: "Senior Lecturer (Centre for Postgraduate Studies)",
       committeePosition: "Member",
       photo: "./Images/ab/solih-1643651697DgKdo.png", // Add the image file path
   },

     {
       name: "Abdul Ghanee Mohamed",
       universityPosition: "Lecturer - Contract (Kulliyah of Sharia & Law)",
       committeePosition: "Member",
       photo: " ", // Add the image file path
   },

     {
       name: "Adam Fayaz",
       universityPosition: "Associate Lecturer (Kulliyah of Education)",
       committeePosition: "Member",
       photo: "./Images/ab/fayaz-1643653028eJAJd.png", // Add the image file path
   },
     {
       name: "Fathimath Rasheeda",
       universityPosition: "Lecturer (Kulliyah of Quran & Sunnah)",
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
