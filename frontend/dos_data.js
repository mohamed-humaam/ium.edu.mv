// Define data using JavaScript objects and arrays
const DOS_Dean = {
  name: "Mohamed Shaheen",
  title: "Dean",
  photo: "./Images/deans/CCE Dean Uz Shaheen.jpg",
  department: "Center for Continuing Education",
  phone: "3022148",
  email: "mohamed.shaheen@ium.edu.mv",
  website: "https://www.ium.edu.mv/cce/",
  message: `A’ssalaam Alaikum. I welcome you to the Centre for Continuing Education (CCE). The aim of CCE is to prepare students for the undergraduate courses in the university in various disciplines, and provide other courses that will prepare students to pursue formal university education.\n\nAt CCE, we offer a number of programs to address your needs. If you are seeking to do an undergraduate degree but do not meet the entry requirements of the degree, we can assist you to fulfill that requirement. Our Advanced Certificate level courses are designed to provide students with the fundamental understanding of relevant disciplines, and literacy and numeracy skills that are required to pursue an undergraduate degree in the university.\n\nThese courses offer study skills in both English and Dhivehi language and basic Arabic literacy skills.\n\nIn addition, these programs offer a particular core module for inculcating Islamic values and ethics in our students.\n\nFurthermore, we provide courses for adult learners and other prospective candidates in the area of Qira’ath al-Quran, English Language and Imaamship. These courses are mainly designed for people who are interested in pursuing higher studies but may not have completed formal education. We further endeavor to offer short courses on professional development in a variety of areas, foreign languages and personal enrichment.\n\nWe strive to provide a high-quality learning experience to our students so that they grow to become life-long learners.`,
};

const introData = "Centre for Continuing Education was established in December 2018 after merging Centre for Foundation Studies and Language Learning Centre. The objective of establishing CCE was providing university preparation programs for students pursuing undergraduate studies and managing and coordinating all academic programs of the university in the IUM Learning Centres established in the atolls. However, in January 2020, management of administrative tasks and academic coordination of academic programs have been handed over to IUM Holdings Private Limited and the respective Kulliyahs/Centres. CCE prepares the students for entry into higher education by giving them a solid foundation in the areas of their choice. CCE currently prepares students to undertake courses in the areas of Quranic Studies, Shari’ah and Law, English Language, Business Management, Imaamship and Teaching. All programs which prepare students for undergraduate studies are one-year long and comprises of two semesters that will prepare students for a smooth transition to university studies. In addition, CCE provides courses for adult or mature learners and other prospective students who may be interested in doing short courses. These courses are ranged from certificate levels 1 to 3 and include areas such as Qira’ath al-Quran, English Language and Imaamship. These courses have a duration of one semester or less in a few courses. English language courses offered at CCE are aimed for adult learners who do not have an English language background. These programs range from certificate levels 1 to 3 and beginning with the use of language for basic needs and extending to the use of language for general purposes in a range of contexts. We also offer a certificate level 4 English language program relevant to the hospitality industry. It teaches the basic communication skills needed to communicate in a variety of different work situations in the tourism industry. Further, students at this centre will experience learning in a university learning environment and develop their self-esteem through the activities conducted at the university."; // Your overview text here

const overviewData = {
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
const KQS_Admin = [
  {
    name: "Hana Jaufar",
    occupation: "Administrative Officer",
    photo: "./Images/Faculties/kems/admin.png",
    contact: "+960330122",
    email: "example@ium.edu.mv"
  },
  {
    name: "Yazdhan Ahmed",
    occupation: "Administrative Officer",
    photo: "./Images/Faculties/kems/admin1.png",
    contact: "+960330122",
    email: "example@ium.edu.mv"
  },
  // Add more administrative staff here as needed
];

const KQS_Academic = [
  // Add more academic staff here as needed
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
