// Define data using JavaScript objects and arrays
const KIRK_Dean = {
  name: "Ahmed Saleem",
  occupation: "Dean",
  photo: "./Images/deans/KIRK Dean Uz. Saleem.jpg",
  department: "Kulliyyah of Islamic Revealed Knowledge and Human Sciences",
  contact: "3022147",
  email: "ahmed.saleem@ium.edu.mv",
  website: "https://www.ium.edu.mv/kirk/",
  message: `Acquisition of Islamic knowledge is the key to success. Without Islamic knowledge, it is impossible to attain real success both in this world and Hereafter. Hence, Kulliyyah of Islamic Revealed Knowledge and Human Science of Islamic University of Maldives aims at producing professionals embedded with revealed and human knowledge capable of dealing with contemporary Islamic issues. If you are interested to become an expert in revealed and human science knowledge choose this Kulliyyah, in your higher education journey. We welcome both male and female students.`,
};

const KIRK_Intro = "The Kulliyyah focuses on teaching and researching Islamic knowledge and human sciences in accordance with Islamic values. The Kulliyyah aims at producing ethically, religiously, and intellectually competent individuals who are beneficial to the society. Additionally, we aim to produce knowledgeable and culturally competent graduates who are capable in facing contemporary challenges. The cornerstone of our Kulliyyah is to disseminate Islamic knowledge and inculcate that Islamic thought is basis of individual’s success. Programs offered in this Kulliyyah are designed to promote Islamic knowledge and strengthen Islamic and national identity in the society. Further, it is aimed at providing higher education, comprised with fundamentals required for a civilized society, which is beneficial to the nation and Ummah at large."; // Your overview text here

const KIRK_Overview = {
    vision: {
        title: "Vision",
        text: "To be the excellent centre for teaching and researching of Islamic knowledge and human sciences based on Shariah and Islamic values.",
        image: "./Images/Banners/cce_vision.png",
    },
    objectives: {
        title: "Objectives",
        list: [
            "To teach human sciences based on Islamic framework",
            "To enable students to be conscious of modern Islamic jurisprudence issues",
            "To clarify Shariah principles based on correct Islamic creed",
            "To produce innovative professionals knowledgeable in both Shariah and human sciences",
            "To produce experts proficient in conducting research in diverse areas of Shariah",
            "To produce experts capable of dealing with intellectual challenges",
            "To disseminate true Islamic knowledge within the society",
        ],
        image: "./Images/Banners/cce_philosophy.png",
    },
    mission: {
        title: "Mission",
        text: "To produce professionals educated in both Islamic knowledge and human sciences who are competent in facing contemporary challenges.",
        image: "./Images/Banners/cce_mission.png",
    },
};


// Sample staff data
const KIRK_Admin = [
  {
  
    name: "Aishath Shuzy Ahmed",
    occupation: "Administrative Officer",
    photo: "",
    contact: "",
    email: "aishath.shuzy@ium.edu.mv"

  },
  {
  
    name: "Mohamed Minvaal",
    occupation: "Administrative Officer",
    photo: "./Images/Profile photos of staffs/minvaal.JPG",
    contact: "",
    email: "mohamed.minvaal@ium.edu.mv"

  },
  // Add more administrative staff here as needed
];

const KIRK_Academic = [
    {
  
    name: "Fareedha Mohamed",
    occupation: "Lecturer",
    photo: "./Images/Profile photos of staffs/fareedha.JPG",
    contact: "+960330122",
    email: "fareedha.mohamed@ium.edu.mv",
    faculty: "Kulliyyah of Islamic Revealed Knowledge and Human Sciences",

  },

   {
  
    name: "Ismail Najee",
    occupation: "Lecturer",
    photo: "./Images/Profile photos of staffs/naajy.JPG",
    contact: "+960330122",
    email: "ismail.najee@ium.edu.mv",
    faculty: "Kulliyyah of Islamic Revealed Knowledge and Human Sciences",

  },

    {
  
    name: "Aminath Afiya Abdul Hakeem",
    occupation: "Senior Lecturer",
    photo: "./Images/Profile photos of staffs/aafiya.JPG",
    contact: "+960330122",
    email: "aminath.afiya@ium.edu.mv",
    faculty: "Kulliyyah of Islamic Revealed Knowledge and Human Sciences",

  },

  
  // Add more academic staff here as needed
];




//....................................................





// Sample course data (replace with your actual data)
const KIRK_Courses = [
  {
    name: 'Diploma of Imaamship',
    mnqfLevel: 'Level 5',
    duration: '1 Year',
    medium: 'Dhivehi',
    fee: '9,365 ރ',
    center: 'Kulliyyah of Islamic Revealed Knowledge and Human Sciences',
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
    name: 'Associate Degree of Imaamship',
    mnqfLevel: 'Level 6',
    duration: '2 Year',
    medium: 'Dhivehi',
    fee: '16,475',
    center: 'Kulliyyah of Islamic Revealed Knowledge and Human Sciences',
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
    name: 'Bachelor of Imaamship',
    mnqfLevel: 'Level 7',
    duration: '3 Year',
    medium: 'Dhivehi',
    fee: 'FREE',
    center: 'Kulliyyah of Islamic Revealed Knowledge and Human Sciences',
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
    name: 'Bachelor of Islamic Studies',
    mnqfLevel: 'Level 7',
    duration: '3 Year',
    medium: 'Dhivehi',
    fee: 'FREE',
    center: 'Kulliyyah of Islamic Revealed Knowledge and Human Sciences',
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
    name: 'Master of Arts in Journalism and Media Communications',
    mnqfLevel: 'Level 9',
    duration: '1 Year',
    medium: 'English',
    fee: '30,950 ރ',
    center: 'Kulliyyah of Islamic Revealed Knowledge and Human Sciences',
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
    name: 'Master of Aqidah and Islamic Thoughts',
    mnqfLevel: 'Level 9',
    duration: '1 Year',
    medium: 'Dhivehi and English (Mixed)',
    fee: '35,370 ރ',
    center: 'Kulliyyah of Islamic Revealed Knowledge and Human Sciences',
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
    name: 'Master of Islamic Revealed knowledge and Leadership',
    mnqfLevel: 'Level 9',
    duration: '1 Year',
    medium: 'Dhivehi and English (Mixed)',
    fee: '35,370 ރ',
    center: 'Kulliyyah of Islamic Revealed Knowledge and Human Sciences',
    label: 'Under Graduate',
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
    name: 'Doctor of Philosophy in Fiqh and Usul-al-Fiqh',
    mnqfLevel: 'Level 10',
    duration: '3 Year',
    medium: 'Arabic',
    fee: '97,205 ރ',
    center: 'Kulliyyah of Islamic Revealed Knowledge and Human Sciences',
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
