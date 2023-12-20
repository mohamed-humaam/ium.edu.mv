// Define data using JavaScript objects and arrays
const KQS_Dean = {
  name: "Mohamed Mansoor",
  occupation: "Dean",
  photo: "./Images/deans/KQS Dean Uz Mansoor.jpg",
  department: "Kulliyyah of Quran and Sunnah",
  contact: "3022144",
  email: "mohamed.mansoor@ium.edu.mv",
  website: "https://www.ium.edu.mv/kqs/",
  message: `The College of the Qur’an and Sunnah provides opportunities to study the two main sources that adopted Islamic law, and their correct sciences.\n\nMy goal is to expand the field of teaching the sciences of the Qur’an and Sunnah and fully develop them and develop a skilled person rich in their sciences and open the doors of the college for new scientific research, new translations, and academic debates.\n\nTherefore, I recommend you join this college to learn authentic knowledge based on Quran and Sunnah and develop a well-behaved personality.`,
};

const KQS_Intro = "This Kulliyyah strives on extensive teaching and circulating the knowledge of Quran and Sunnah.\n\nIn order to attain this, the Kulliyyah endeavours in numerous works; hence, Diploma, Degree, Postgraduate courses and Master degree courses in Quranic Knowledge and various courses related to Sunnah is being conducted by the Centre. Further, a more significant attention is being given for special courses for Memorizing the Holy Quran and offering courses for visually impaired students to learn and memorize Quran. Additionally, the Kulliyyah offers and teaches the students, various skills to strive in a practical field, post their studies."; // Your overview text here

const KQS_Overview = {
    vision: {
        title: "Vision",
        text: "Researching the Quran and Sunnah, and creating a generation that is able to achieve the highest levels of creativity in learning from and teaching about these two sources, and to spread the invitation of Islam through the known and stated moderate philosophy of Islam that is encompassed in the Quran and Sunnah, and that has been put forward by the pious predecessors.",
        image: "./Images/Banners/cce_vision.png",
    },
    objectives: {
        title: "Objectives",
        list: [
            "Establishing a vast number of people who adore and revere Quran and Sunnah.",
            "Establishing people who recites Quran competently and affluently.",
            "Establishing people who attain Knowledge of Quran and teach forward by utilizing the modern techniques and strategies.",
            "Establishing people who learns and obtain knowledge of hadith and obey the modest and moderate principles.",
            "Memorizing, safeguarding and preserving the Noble Quran.",
            "Establishing people who can recite Quran by heart and lead Tarawih Prayers in Mosques of Maldives.",
        ],
        image: "./Images/Banners/cce_philosophy.png",
    },
    mission: {
        title: "Mission",
        text: "To develop a community with Maldivian values that forges its path through the inspiration of the Quran and Sunnah.",
        image: "./Images/Banners/cce_mission.png",
    },
};





// Sample staff data
const KQS_Admin = [
  {
    name: "Aishath Rishfa",
    occupation: "Administrative Officer",
    photo: "",
    contact: "+9603022144",
    email: "aishath.rishfa@ium.edu.mv"
  },
  {
    name: "Mohamed Ihulal",
    occupation: "Administrative Officer",
    photo: "",
    contact: "+9603022144",
    email: "mohamed.ihulaal@ium.edu.mv"
  },
  
  
  
  // Add more administrative staff here as needed
];

const KQS_Academic = [
  // Add more academic staff here as needed
   {
    name: "Mohamed Shinaan Muneer",
    occupation: "Associate Lecturer",
    photo: "",
    contact: "+9603022144",
    email: "mohamed.shinan@ium.edu.mv",
    faculty: "Kulliyyah of Quranic Studies",
  },

   {
    name: "Mohamed Naeem Ahmed Fikuree",
    occupation: " Associate Lecturer",
    photo: "",
    contact: "+960330122",
    email: "mohamed.naeem@ium.edu.mv",
    faculty: "Kulliyyah of Quranic Studies",
  },

    {
    name: "Fathimath Rasheeda",
    occupation: " Lecturer",
    photo: "",
    contact: "+960330122",
    email: "fathimath.rasheeda@ium.edu.mv",
    faculty: "Kulliyyah of Quranic Studies",
  },

    {
    name: "Ibrahim Zuhair",
    occupation: " Associate Lecturer",
    photo: "",
    contact: "+960330122",
    email: "ibrahim.zuhair@ium.edu.mv",
    faculty: "Kulliyyah of Quranic Studies",
  },

     {
    name: "Mohamed Waheed",
    occupation: " Senior Lecturer",
    photo: "",
    contact: "+960330122",
    email: "mohamed.waheed@ium.edu.mv",
    faculty: "Kulliyyah of Quranic Studies",
  },

     {
    name: "Samiya zakariyya",
    occupation: " Senior Lecturer",
    photo: "",
    contact: "+960330122",
    email: "samiya.zakariyya@ium.edu.mv",
    faculty: "Kulliyyah of Quranic Studies",
  },

     {
    name: "Mohamed Thaufeeg Ali",
    occupation: "  Lecturer",
    photo: "",
    contact: "+960330122",
    email: "mohamed.thaufeeg@ium.edu.mv",
    faculty: "Kulliyyah of Quranic Studies",
  },

      {
    name: "Abdul Azeez Hussain",
    occupation: " Senior Lecturer",
    photo: "",
    contact: "+960330122",
    email: "abdul.azeez@ium.edu.mv",
    faculty: "Kulliyyah of Quranic Studies",
  },

       {
    name: "Ibrahim Ramzee",
    occupation: "  Lecturer",
    photo: "",
    contact: "+960330122",
    email: "ibrahim.ramzee@ium.edu.mv",
    faculty: "Kulliyyah of Quranic Studies",
  },

];




//....................................................





// Sample course data (replace with your actual data)
const KQS_Courses = [
  {
    name: 'Certificate 1 in Quran Memorization',
    mnqfLevel: 'Level 1',
    duration: '0.5 Years',
    medium: 'Dhivehi',
    fee: '300 ރ',
    center: 'Kulliyyah of Quran and Sunnah',
    label: 'Certificate Courses',
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
    name: 'Certificate 2 in Quran Memorization',
    mnqfLevel: 'Level 2',
    duration: '0.5 Year',
    medium: 'Dhivehi',
    fee: '300 ރ',
    center: 'Kulliyyah of Quran and Sunnah',
    label: 'Certificate Courses',
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
    name: 'Certificate 3 in Quran Memorization',
    mnqfLevel: 'Level 3',
    duration: '0.5 Years',
    medium: 'Dhivehi',
    fee: '300 ރ',
    center: 'Kulliyyah of Quran and Sunnah',
    label: 'Certificate Courses',
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
    name: 'Advanced Certificate in Quran Memorization',
    mnqfLevel: 'Level 4',
    duration: '1 Year',
    medium: 'Dhivehi',
    fee: '300 ރ',
    center: 'Kulliyyah of Quran and Sunnah',
    label: 'Certificate Courses',
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
    name: 'Bachelor of Quranic Studies',
    mnqfLevel: 'Level 7',
    duration: '3 Months',
    medium: 'Dhivehi',
    fee: 'FREE',
    center: 'Kulliyyah of Quran and Sunnah',
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
    name: 'Master of Arts in Science of Hadith',
    mnqfLevel: 'Level 9',
    duration: '1 Year',
    medium: 'Arabic',
    fee: '32,770 ރ',
    center: 'Kulliyyah of Quran and Sunnah',
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
    name: 'Master of Arts in Quranic Sciences',
    mnqfLevel: 'Level 9',
    duration: '1 Year',
    medium: 'Dhivehi or Arabic',
    fee: '32,770 ރ',
    center: 'Kulliyyah of Quran and Sunnah',
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
    name: 'Master of Qira’ath',
    mnqfLevel: 'Level 9',
    duration: '1 Year',
    medium: 'Dhivehi or Arabic',
    fee: '32,770 ރ',
    center: 'Kulliyyah of Quran and Sunnah',
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
    name: 'Master of Fiqh and Usul-Al-Fiqh',
    mnqfLevel: 'Level 9',
    duration: '1 Year',
    medium: 'Dhivehi or Arabic',
    fee: '36,995 ރ',
    center: 'Kulliyyah of Quran and Sunnah',
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
  // Add more courses as needed
];
