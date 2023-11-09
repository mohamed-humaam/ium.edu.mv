// Define data using JavaScript objects and arrays
const KSL_Dean = {
  name: "Dr. Mohamed Shujau Abdul Hakeem",
  occupation: "Dean",
  photo: "./Images/deans/KSL Dean Dr Shujau.JPG",
  department: "Kulliyyah of Shariah and Law",
  contact: "3022143",
  email: "mohamed.shujau@ium.edu.mv",
  website: "https://www.ium.edu.mv/ksl/",
  message: `Bismillahirahmanirahim,\n\nAs a Dean of Kulliyyah of Shari’ah and Law (KSL), Islamic University of Maldives (IUM), I am honored to welcome you.\n\nFor more than three decades, KSL has been providing quality legal education in Maldives. We have transformed immensely from our modest beginning as part of an institute to a Kulliyyah of IUM.\n\nKSL is committed to provide excellent legal education as our curriculum is based on integration of legal education. We aim to produce balanced professionals who are competent in both Shari’ah and law.\n\nOur commitment to exceptional legal education begins with our staff who are highly dedicated to students’ academic excellence. Our lecturers consist of prominent experts whose expertise and experience would enhance the students’ learning experience at KSL.\n\nIn the past we have seen a significant improvement in the opportunities available to our graduates nationally. We have produced lawyers and judges who are well-rounded in the legal field. Our graduates are employed in private sector, governmental agencies, independent bodies, judiciary, as well as international bodies. Their commitment and contribution to the society are exemplary.\n\nKSL is the perfect institution in Maldives to study law for a satisfying and rewarding learning experience.`,
};

const KSL_Intro = "Kulliyyah of Shari’ah and Laws, formerly known as Faculty of Shari’ah and Law, is among the first colleges established in Maldives. It has gone through many stages of development to reach where it stands now and has a longstanding history of producing well-known leaders in the country. The Bachelor of Shari’ah and Laws offered by the our Kulliyyah is one of the best legal education in Maldives."; // Your overview text here

const KSL_Overview = {
    vision: {
        title: "Vision",
        text: "To provide integrated legal education that is of excellent quality.",
        image: "./Images/Banners/cce_vision.png",
    },
    objectives: {
        title: "Objectives",
        list: [
            "To create exceptional legal research that contributes to policy and law making",
            "To produce high quality graduates who are prepared for the legal profession at international level.",
            "To develop and increase resources for students and faculty for a richer academic experience.",
        ],
        image: "./Images/Banners/cce_philosophy.png",
    },
    mission: {
        title: "Mission",
        text: "To produce balanced professionals competent both in Shari’ah and law who will serve the public and justice system with a high commitment to the value of justice.",
        image: "./Images/Banners/cce_mission.png",
    },
};


// Sample staff data
const KSL_Admin = [
  {
    name: "Afthim Mohamed",
    occupation: "Administrative Officer",
    photo: "",
    contact: "3022143",
    email: "afthim.mohamed@ium.edu.mv"
  },
    {
    name: "Mariyam Noumath",
    occupation: "Administrative Officer",
    photo: "./Images/Profile photos of staffs/noomath.JPG",
    contact: "3022143",
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
