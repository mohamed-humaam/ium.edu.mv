// Define data using JavaScript objects and arrays
const KAL_Dean = {
  name: "",
  occupation: "Dean",
  photo: "",
  department: "Kulliyyah of Arabic Language",
  contact: "3022145",
  email: "",
  website: "https://www.ium.edu.mv/kal/",
  message: ``,
};

const KAL_Intro = "Welcome to the Kulliyyah of Arabic Language at the Islamic University of Maldives.\n\nArabic language plays a crucial role in our lives because it is the language of Allah’s book, the Qur’an, and the Sunnah of his messenger Mohamed (PBUH). For each and every Muslim it is important to learn Arabic to make our devotion and worship to Allah much more meaningful.\n\n‘Umar (may Allah be pleased with him) said: “Learn Arabic for it is part of your Religion and learn how the estate of the deceased should be divided (al-Faraa’id) for these are part of your Religion”.\n\nKulliyyah of Arabic Language has its roots in the very first institute that was created to teach Arabic Language in the Maldives, the Institute of Islamic Studies (Mauhad) that began on 9th November 1980.  Mauhad played a major role to promote Islamic Education and Arabic Language in the Maldives. Within Mauhad, the Centre for Languages played an integral role in promoting Arabic Language learning and continued its role when Mauhad was upgraded to College of Islamic Studies. The Centre for Languages was upgrade to the Kulliyyah of Arabic Language when the College was transformed to the Islamic University of Maldives.\n\nToday, at the Kulliyyah of Arabic Language we offer a Diploma in Arabic Language. A Bachelor’s degree in Arabic Language is planned for the following year. The Kulliyyah is also considering the option of offering a Diploma of Arabic Language for Travel and Tourism, in block mode, geared for staff of resort islands, starting from January of 2017.\n\nOur aim in the Kulliyyah of Arabic Language is to teach Arabic language and to create interest in Arabic Language amongst Maldivians. The faculty offers its students with knowledge of Arabic, both theoretically and practically. We also prepare students for independent learning and communication skills.\n\nWe look forward to welcoming you to our community."; // Your overview text here

const KAL_Overview = {
    vision: {
        title: "Vision",
        text: "To become a highly regarded and leading Kulliyyah in Maldives that develops students who are proficient in use of Arabic language and competent in research skills related to Arabic language.",
        image: "./Images/Banners/cce_vision.png",
    },
    objectives: {
        title: "Objectives",
        list: [
            "To build a generation of Maldivians in whom our nation takes pride, who are well versed in Islamic knowledge and who have global awareness and value it.",
            "To ensure that our students have the knowledge and skills related to Arabic language and be academically able.",
            "Develop a system that could teach Arabic language through modern technology, and to offer language courses that would assist in national development.",
            "Offer relevant courses in Arabic language through online learning platforms and multiple media outlets.",
            
        ],
        image: "./Images/Banners/cce_philosophy.png",
    },
    mission: {
        title: "Mission",
        text: "Teaching of Arabic language that is needed for the nation’s wellbeing and development, training of Maldivians to conduct research in Arabic language, and the development of citizens who are capable of communicating in this language both orally and in written form.",
        image: "./Images/Banners/cce_mission.png",
    },
};


// Sample staff data
const KAL_Admin = [
  {
    name: "Badhoora Yahuyya",
    occupation: "Administrative Officer",
    photo: "./Images/Profile photos of staffs/badhoora.JPG",
    contact: "+960330122",
    email: "badhoora.yahya@ium.edu.mv"

  },

    {
    name: "Sana Ibrahim",
    occupation: "Administrative Officer",
    photo: "./Images/Profile photos of staffs/sana.JPG",
    contact: "+960330122",
    email: "sana.ibrahim@ium.edu.mv"

  },

  // Add more administrative staff here as needed
];

const KAL_Academic = [
    {
    name: "Mohamed Uwais Mohamed Ameen",
    occupation: "Lecturer",
    photo: " ",
    contact: "+960330122",
    email: "mohamed.uwais@ium.edu.mv"

  },

      {
    name: "Ishaq Mohamed Fulhu",
    occupation: "Senior Lecturer",
    photo: " ",
    contact: "+960330122",
    email: "ishaq.mohamed@ium.edu.mv"

  },

  
      {
    name: "Hasan M-A Alkordi",
    occupation: " Lecturer",
    photo: " ",
    contact: "+960330122",
    email: "hassan.kordi@ium.edu.mv"

  },

      {
    name: "Mahmoud Mohamed Abdelmonem Hassan Metwal",
    occupation: "Associate Lecturer",
    photo: " ",
    contact: "+960330122",
    email: "mahmoud.mohamed@ium.edu.mv"

  },

        {
    name: "Mohamed Gubaad Aboobakuru",
    occupation: " Lecturer",
    photo: " ",
    contact: "+960330122",
    email: "mohamed.qubaad@ium.edu.mv"

  },

  
        {
    name: "Elsayed Elshahhat Mesilhi Ibrahim",
    occupation: "Senior Lecturer",
    photo: " ",
    contact: "+960330122",
    email: "elsayad.elshahhat@ium.edu.mv"

  },

         {
    name: "Abdul Mueed Hassan",
    occupation: "Associate Lecturer",
    photo: " ",
    contact: "+960330122",
    email: "abdul.mueed@ium.edu.mv"

  },
  // Add more academic staff here as needed
];




// Sample course data (replace with your actual data)
const KAL_Courses = [
  {
    name: 'Certificate 1 in Arabic for Travel and Tourism',
    mnqfLevel: 'Level 1',
    duration: '0.5 Years',
    medium: 'Arabic',
    fee: '1,050 ރ',
    center: 'Kulliyyah of Arabic Language',
    label: 'Certificate Programs',
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
    name: 'Certificate 1 in Arabic Language',
    mnqfLevel: 'Level 1',
    duration: '0.5 Year',
    medium: 'Arabic',
    fee: '300 ރ',
    center: 'Kulliyyah of Arabic Language',
    label: 'Certificate Programs',
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
    name: 'Certificate 2 in Arabic Language',
    mnqfLevel: 'Level 2',
    duration: '0.5 Year',
    medium: 'Arabic',
    fee: '1,950 ރ',
    center: 'Kulliyyah of Arabic Language',
    label: 'Certificate Programs',
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
    name: 'Certificate 3 in Arabic Language',
    mnqfLevel: 'Level 3',
    duration: '1 Year',
    medium: 'Arabic',
    fee: '3,600 ރ',
    center: 'Kulliyyah of Arabic Language',
    label: 'Certificate Programs',
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
    name: 'Advanced Certificate in Arabic Language',
    mnqfLevel: 'Level 4',
    duration: '1 Year',
    medium: 'Arabic',
    fee: '11,520 ރ',
    center: 'Kulliyyah of Arabic Language',
    label: 'Certificate Programs',
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
    name: 'Kulliyyah of Arabic Language',
    mnqfLevel: 'Level 5',
    duration: '1 Year',
    medium: 'Arabic',
    fee: '11,440 ރ',
    center: 'Kulliyyah of Arabic Language',
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
    name: 'Diploma in Arabic Language for Hospitality and Tourism',
    mnqfLevel: 'Level 5',
    duration: '2 Year',
    medium: 'Arabic',
    fee: '25,050   ރ',
    center: 'Kulliyyah of Arabic Language',
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
    name: 'Diploma in Arabic Language for Islamic Studies',
    mnqfLevel: 'Level 5',
    duration: '0.5 Year',
    medium: 'Arabic',
    fee: '13,829 ރ',
    center: 'Kulliyyah of Arabic Language',
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
    name: 'Diploma in Arabic Language for Journalism and Media',
    mnqfLevel: 'Level 5',
    duration: '2 Year',
    medium: 'Arabic',
    fee: '25,050 ރ',
    center: 'Kulliyyah of Arabic Language',
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
    name: 'Diploma in Arabic Language for Business and Marketing',
    mnqfLevel: 'Level 5',
    duration: '2 Year',
    medium: 'Arabic',
    fee: '25,050 ރ',
    center: 'Kulliyyah of Arabic Language',
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
    name: 'Diploma in Arabic Language for Diplomacy',
    mnqfLevel: 'Level 5',
    duration: '2 Year',
    medium: 'Arabic',
    fee: '25,050 ރ',
    center: 'Kulliyyah of Arabic Language',
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
    name: 'Master of Arts in Arabic Lingustics',
    mnqfLevel: 'Level 9',
    duration: '1 Year',
    medium: 'Dhivehi',
    fee: '35,370 ރ',
    center: 'Kulliyyah of Arabic Language',
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
