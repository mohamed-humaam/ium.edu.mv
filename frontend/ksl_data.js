// Define data using JavaScript objects and arrays
const KSL_Dean = {
  name: "Mohamed Shaheen",
  title: "Dean",
  photo: "./Images/deans/CCE Dean Uz Shaheen.jpg",
  department: "Center for Continuing Education",
  phone: "3022148",
  email: "mohamed.shaheen@ium.edu.mv",
  website: "https://www.ium.edu.mv/cce/",
  message: `A’ssalaam Alaikum. I welcome you to the Centre for Continuing Education (CCE). The aim of CCE is to prepare students for the undergraduate courses in the university in various disciplines, and provide other courses that will prepare students to pursue formal university education.\n\nAt CCE, we offer a number of programs to address your needs. If you are seeking to do an undergraduate degree but do not meet the entry requirements of the degree, we can assist you to fulfill that requirement. Our Advanced Certificate level courses are designed to provide students with the fundamental understanding of relevant disciplines, and literacy and numeracy skills that are required to pursue an undergraduate degree in the university.\n\nThese courses offer study skills in both English and Dhivehi language and basic Arabic literacy skills.\n\nIn addition, these programs offer a particular core module for inculcating Islamic values and ethics in our students.\n\nFurthermore, we provide courses for adult learners and other prospective candidates in the area of Qira’ath al-Quran, English Language and Imaamship. These courses are mainly designed for people who are interested in pursuing higher studies but may not have completed formal education. We further endeavor to offer short courses on professional development in a variety of areas, foreign languages and personal enrichment.\n\nWe strive to provide a high-quality learning experience to our students so that they grow to become life-long learners.`,
};

const KSL_Intro = "Centre for Continuing Education was established in December 2018 after merging Centre for Foundation Studies and Language Learning Centre. The objective of establishing CCE was providing university preparation programs for students pursuing undergraduate studies and managing and coordinating all academic programs of the university in the IUM Learning Centres established in the atolls. However, in January 2020, management of administrative tasks and academic coordination of academic programs have been handed over to IUM Holdings Private Limited and the respective Kulliyahs/Centres. CCE prepares the students for entry into higher education by giving them a solid foundation in the areas of their choice. CCE currently prepares students to undertake courses in the areas of Quranic Studies, Shari’ah and Law, English Language, Business Management, Imaamship and Teaching. All programs which prepare students for undergraduate studies are one-year long and comprises of two semesters that will prepare students for a smooth transition to university studies. In addition, CCE provides courses for adult or mature learners and other prospective students who may be interested in doing short courses. These courses are ranged from certificate levels 1 to 3 and include areas such as Qira’ath al-Quran, English Language and Imaamship. These courses have a duration of one semester or less in a few courses. English language courses offered at CCE are aimed for adult learners who do not have an English language background. These programs range from certificate levels 1 to 3 and beginning with the use of language for basic needs and extending to the use of language for general purposes in a range of contexts. We also offer a certificate level 4 English language program relevant to the hospitality industry. It teaches the basic communication skills needed to communicate in a variety of different work situations in the tourism industry. Further, students at this centre will experience learning in a university learning environment and develop their self-esteem through the activities conducted at the university."; // Your overview text here

const KSL_Overview = {
    vision: {
        title: "Vision",
        text: "To be the leading centre in providing university preparation and adult education programs in the nation.",
        image: "./Images/Banners/cce_vision.png",
    },
    objectives: {
        title: "Objectives",
        list: [
            "To provide high-quality learning.",
            "To inculcate Islamic values and ethics in students.",
            "To develop students’ self-confidence.",
            "To develop students’ communication and problem-solving skills.",
            "To provide basic English language communication skills for adult learners.",
        ],
        image: "./Images/Banners/cce_philosophy.png",
    },
    mission: {
        title: "Mission",
        text: "CCE strives for excellence in providing academic skills and build confidence to undertake university education",
        image: "./Images/Banners/cce_mission.png",
    },
};


// Sample staff data
const KSL_Admin = [
  {
    name: "Afthim Mohamed",
    occupation: "Administrative Officer",
    photo: "",
    contact: "+960330122",
    email: "afthim.mohamed@ium.edu.mv"
  },
    {
    name: "Mariyam Noumath",
    occupation: "Administrative Officer",
    photo: "",
    contact: "+960330122",
    email: "mariyam.noumath@ium.edu.mv"
  },
  // Add more administrative staff here as needed
];

const KSL_Academic = [
  // Add more academic staff here as needed
      {
    name: "Ali Ibrahim Didi",
    occupation: "Senior Lecturer",
    photo: "",
    contact: "+960330122",
    email: "ali.ibrahim@ium.edu.mv"
  },

          {
    name: "Abdul Jaleel Hussain",
    occupation: "Senior Lecturer",
    photo: "",
    contact: "+960330122",
    email: "abdul.jaleel@ium.edu.mv"
  },

            {
    name: "Shaaz Ahmed",
    occupation: " Lecturer",
    photo: "",
    contact: "+960330122",
    email: "shaaz.ahmed@ium.edu.mv"
  },

            {
    name: "Ikram Abdul Sattar",
    occupation: " Lecturer",
    photo: "",
    contact: "+960330122",
    email: "ikram.abdulsattar@ium.edu.mv"
  },

            {
    name: "Aishath Ruhusha Nasheed",
    occupation: " Lecturer",
    photo: "",
    contact: "+960330122",
    email: "aishath.ruhusha@ium.edu.mv"
  },

              {
    name: "Dr. Mohamed Affan Shafy",
    occupation: " Senior Lecturer",
    photo: "",
    contact: "+960330122",
    email: "affan.shafy@ium.edu.mv"
  },

              {
    name: "Abdul Ghany Mohamed",
    occupation: "  Lecturer",
    photo: "",
    contact: "+960330122",
    email: "abdul.ghany@ium.edu.mv"
  },

               {
    name: "Aishath Fazna Ahmed",
    occupation: "  Lecturer",
    photo: "",
    contact: "+960330122",
    email: "aishath.fazna@ium.edu.mv"
  },

                 {
    name: "Hussain Razmeez",
    occupation: "  Lecturer",
    photo: "",
    contact: "+960330122",
    email: "hussain.rameez@ium.edu.mv"
  },
];





//....................................................





// Sample course data (replace with your actual data)
const KSL_Courses = [
  {
    name: 'Diploma in Shari’ah and Law',
    mnqfLevel: 'Level 5',
    duration: '1 Years',
    medium: 'Dhivehi',
    fee: '14,639 ރ',
    center: 'Kulliyyah of Shari’ah and Law',
    label: 'Diploma',
    session: 'Morning & Evening',
    campus: 'Male Campus',
    entry_requirements: '2 passes with E grade or above in GCE A level or C grade or above in HSC / OR / MNQF level 4 qualification in a related field.<br>OR<br>20 years old, completion of secondary school, 2 years of relevant work experience, and successful completion of an MQA approved University Preparation Programme.',
    semesters: [
      {
        semester: 'Semester 1',
        modules: [
          { code: 'QUR0002', name: 'Quran Level 2'},
          { code: 'COR0703', name: 'Islamic View of Knowledge and Civilization'},
          { code: 'RES0707', name: 'Business Research Methods'},
          { code: 'STA0502', name: 'Business Statistics'},
          { code: 'HSS0704', name: 'Historical Practices of Islamic Administration'},
          { code: 'MGT0602', name: 'Leadership and Strategic Planning'},
                 ],
      },
      {
        semester: 'Semester 2',
        modules: [
          { code: 'ARB0002', name: 'Arabic Language Level 2'},
          { code: 'COR0704', name: 'Maldivian History and Civilization'},
          { code: 'SHA0607', name: 'Fundamentals of Islamic Finance'},
          { code: 'HSS0709', name: 'Rural and Urban Development'},
          { code: 'FIN0604', name: 'Public Procurement'},
                 ],
      },
                ]
  },
  {
    name: 'Associate Degree in Shari’ah and Law',
    mnqfLevel: 'Level 6',
    duration: '2 Years',
    medium: 'Dhivehi',
    fee: '27,560 ރ',
    center: 'Kulliyyah of Shari’ah and Law',
    label: 'Associate Degree',
    session: 'Morning & Evening',
    campus: 'Male Campus',
    entry_requirements: '2 passes with E grade or above in GCE A level or C grade or above in HSC / OR / MNQF level 4 qualification in a related field.<br>OR<br>20 years old, completion of secondary school, 2 years of relevant work experience, and successful completion of an MQA approved University Preparation Programme.',
    semesters: [
      {
        semester: 'Semester 1',
        modules: [
          { code: 'QUR0002', name: 'Quran Level 2'},
          { code: 'COR0703', name: 'Islamic View of Knowledge and Civilization'},
          { code: 'RES0707', name: 'Business Research Methods'},
          { code: 'STA0502', name: 'Business Statistics'},
          { code: 'HSS0704', name: 'Historical Practices of Islamic Administration'},
          { code: 'MGT0602', name: 'Leadership and Strategic Planning'},
                 ],
      },
      {
        semester: 'Semester 2',
        modules: [
          { code: 'ARB0002', name: 'Arabic Language Level 2'},
          { code: 'COR0704', name: 'Maldivian History and Civilization'},
          { code: 'SHA0607', name: 'Fundamentals of Islamic Finance'},
          { code: 'HSS0709', name: 'Rural and Urban Development'},
          { code: 'FIN0604', name: 'Public Procurement'},
                 ],
      },
                ]
  },
  {
    name: 'Bachelor of Shari’ah and Law with Honours',
    mnqfLevel: 'Level 7',
    duration: '4 Years',
    medium: 'Dhivehi',
    fee: 'FREE ރ',
    center: 'Kulliyyah of Shari’ah and Law',
    label: 'Degree',
    session: 'Morning & Evening',
    campus: 'Male Campus',
    entry_requirements: '2 passes with E grade or above in GCE A level or C grade or above in HSC / OR / MNQF level 4 qualification in a related field.<br>OR<br>20 years old, completion of secondary school, 2 years of relevant work experience, and successful completion of an MQA approved University Preparation Programme.',
    semesters: [
      {
        semester: 'Semester 1',
        modules: [
          { code: 'QUR0002', name: 'Quran Level 2'},
          { code: 'COR0703', name: 'Islamic View of Knowledge and Civilization'},
          { code: 'RES0707', name: 'Business Research Methods'},
          { code: 'STA0502', name: 'Business Statistics'},
          { code: 'HSS0704', name: 'Historical Practices of Islamic Administration'},
          { code: 'MGT0602', name: 'Leadership and Strategic Planning'},
                 ],
      },
      {
        semester: 'Semester 2',
        modules: [
          { code: 'ARB0002', name: 'Arabic Language Level 2'},
          { code: 'COR0704', name: 'Maldivian History and Civilization'},
          { code: 'SHA0607', name: 'Fundamentals of Islamic Finance'},
          { code: 'HSS0709', name: 'Rural and Urban Development'},
          { code: 'FIN0604', name: 'Public Procurement'},
                 ],
      },
                ]
  },
  {
    name: 'Postgraduate Diploma in Law (PGDL)',
    mnqfLevel: 'Level 8',
    duration: '1 Year',
    medium: 'Dhivehi and English',
    fee: '37,845 ރ',
    center: 'Kulliyyah of Shari’ah and Law',
    label: 'Masters',
    session: 'Morning & Evening',
    campus: 'Male Campus',
    entry_requirements: '2 passes with E grade or above in GCE A level or C grade or above in HSC / OR / MNQF level 4 qualification in a related field.<br>OR<br>20 years old, completion of secondary school, 2 years of relevant work experience, and successful completion of an MQA approved University Preparation Programme.',
    semesters: [
      {
        semester: 'Semester 1',
        modules: [
          { code: 'QUR0002', name: 'Quran Level 2'},
          { code: 'COR0703', name: 'Islamic View of Knowledge and Civilization'},
          { code: 'RES0707', name: 'Business Research Methods'},
          { code: 'STA0502', name: 'Business Statistics'},
          { code: 'HSS0704', name: 'Historical Practices of Islamic Administration'},
          { code: 'MGT0602', name: 'Leadership and Strategic Planning'},
                 ],
      },
      {
        semester: 'Semester 2',
        modules: [
          { code: 'ARB0002', name: 'Arabic Language Level 2'},
          { code: 'COR0704', name: 'Maldivian History and Civilization'},
          { code: 'SHA0607', name: 'Fundamentals of Islamic Finance'},
          { code: 'HSS0709', name: 'Rural and Urban Development'},
          { code: 'FIN0604', name: 'Public Procurement'},
                 ],
      },
                ]
  },
  {
    name: 'Master of Comparative Laws',
    mnqfLevel: 'Level 9',
    duration: '1 Year',
    medium: 'Dhivehi and English',
    fee: '38,295 ރ',
    center: 'Kulliyyah of Shari’ah and Law',
    label: 'Masters',
    session: 'Morning & Evening',
    campus: 'Male Campus',
    entry_requirements: '2 passes with E grade or above in GCE A level or C grade or above in HSC / OR / MNQF level 4 qualification in a related field.<br>OR<br>20 years old, completion of secondary school, 2 years of relevant work experience, and successful completion of an MQA approved University Preparation Programme.',
    semesters: [
      {
        semester: 'Semester 1',
        modules: [
          { code: 'QUR0002', name: 'Quran Level 2'},
          { code: 'COR0703', name: 'Islamic View of Knowledge and Civilization'},
          { code: 'RES0707', name: 'Business Research Methods'},
          { code: 'STA0502', name: 'Business Statistics'},
          { code: 'HSS0704', name: 'Historical Practices of Islamic Administration'},
          { code: 'MGT0602', name: 'Leadership and Strategic Planning'},
                 ],
      },
      {
        semester: 'Semester 2',
        modules: [
          { code: 'ARB0002', name: 'Arabic Language Level 2'},
          { code: 'COR0704', name: 'Maldivian History and Civilization'},
          { code: 'SHA0607', name: 'Fundamentals of Islamic Finance'},
          { code: 'HSS0709', name: 'Rural and Urban Development'},
          { code: 'FIN0604', name: 'Public Procurement'},
                 ],
      },
                ]
  },
  {
    name: 'Master of Islamic Judicial Sciences and Shari’ah Policy',
    mnqfLevel: 'Level 9',
    duration: '1 Year',
    medium: 'Dhivehi and English',
    fee: '38,295 ރ',
    center: 'Kulliyyah of Shari’ah and Law',
    label: 'Masters',
    session: 'Morning & Evening',
    campus: 'Male Campus',
    entry_requirements: '2 passes with E grade or above in GCE A level or C grade or above in HSC / OR / MNQF level 4 qualification in a related field.<br>OR<br>20 years old, completion of secondary school, 2 years of relevant work experience, and successful completion of an MQA approved University Preparation Programme.',
    semesters: [
      {
        semester: 'Semester 1',
        modules: [
          { code: 'QUR0002', name: 'Quran Level 2'},
          { code: 'COR0703', name: 'Islamic View of Knowledge and Civilization'},
          { code: 'RES0707', name: 'Business Research Methods'},
          { code: 'STA0502', name: 'Business Statistics'},
          { code: 'HSS0704', name: 'Historical Practices of Islamic Administration'},
          { code: 'MGT0602', name: 'Leadership and Strategic Planning'},
                 ],
      },
      {
        semester: 'Semester 2',
        modules: [
          { code: 'ARB0002', name: 'Arabic Language Level 2'},
          { code: 'COR0704', name: 'Maldivian History and Civilization'},
          { code: 'SHA0607', name: 'Fundamentals of Islamic Finance'},
          { code: 'HSS0709', name: 'Rural and Urban Development'},
          { code: 'FIN0604', name: 'Public Procurement'},
                 ],
      },
                ]
  },
  {
    name: 'Master of Law (Comparative Jurisprudence)',
    mnqfLevel: 'Level 9',
    duration: '1 Year',
    medium: 'Dhivehi and English',
    fee: '34,225 ރ',
    center: 'Kulliyyah of Shari’ah and Law',
    label: 'Masters',
    session: 'Morning & Evening',
    campus: 'Male Campus',
    entry_requirements: '2 passes with E grade or above in GCE A level or C grade or above in HSC / OR / MNQF level 4 qualification in a related field.<br>OR<br>20 years old, completion of secondary school, 2 years of relevant work experience, and successful completion of an MQA approved University Preparation Programme.',
    semesters: [
      {
        semester: 'Semester 1',
        modules: [
          { code: 'QUR0002', name: 'Quran Level 2'},
          { code: 'COR0703', name: 'Islamic View of Knowledge and Civilization'},
          { code: 'RES0707', name: 'Business Research Methods'},
          { code: 'STA0502', name: 'Business Statistics'},
          { code: 'HSS0704', name: 'Historical Practices of Islamic Administration'},
          { code: 'MGT0602', name: 'Leadership and Strategic Planning'},
                 ],
      },
      {
        semester: 'Semester 2',
        modules: [
          { code: 'ARB0002', name: 'Arabic Language Level 2'},
          { code: 'COR0704', name: 'Maldivian History and Civilization'},
          { code: 'SHA0607', name: 'Fundamentals of Islamic Finance'},
          { code: 'HSS0709', name: 'Rural and Urban Development'},
          { code: 'FIN0604', name: 'Public Procurement'},
                 ],
      },
                ]
  },
  {
    name: 'Doctor of Philosophy in Islamic Judicial Sciences and Legislative Policy',
    mnqfLevel: 'Level 10',
    duration: '3 Year',
    medium: 'Arabic',
    fee: '98,865 ރ',
    center: 'Kulliyyah of Shari’ah and Law',
    label: 'PhD',
    session: 'Morning & Evening',
    campus: 'Male Campus',
    entry_requirements: '2 passes with E grade or above in GCE A level or C grade or above in HSC / OR / MNQF level 4 qualification in a related field.<br>OR<br>20 years old, completion of secondary school, 2 years of relevant work experience, and successful completion of an MQA approved University Preparation Programme.',
    semesters: [
      {
        semester: 'Semester 1',
        modules: [
          { code: 'QUR0002', name: 'Quran Level 2'},
          { code: 'COR0703', name: 'Islamic View of Knowledge and Civilization'},
          { code: 'RES0707', name: 'Business Research Methods'},
          { code: 'STA0502', name: 'Business Statistics'},
          { code: 'HSS0704', name: 'Historical Practices of Islamic Administration'},
          { code: 'MGT0602', name: 'Leadership and Strategic Planning'},
                 ],
      },
      {
        semester: 'Semester 2',
        modules: [
          { code: 'ARB0002', name: 'Arabic Language Level 2'},
          { code: 'COR0704', name: 'Maldivian History and Civilization'},
          { code: 'SHA0607', name: 'Fundamentals of Islamic Finance'},
          { code: 'HSS0709', name: 'Rural and Urban Development'},
          { code: 'FIN0604', name: 'Public Procurement'},
                 ],
      },
                ]
  },
  // Add more courses as needed
];
