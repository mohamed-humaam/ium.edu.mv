// Sample staff data
const KSL_Admin = [
  {
    name: "Hawwa Shuhaidha",
    occupation: "Administrative Officer",
    photo: "./Images/Faculties/kems/admin.png",
  },
  // Add more administrative staff here as needed
];

const KSL_Academic = [
  // Add more academic staff here as needed
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
    available_campuses:'null',
    entry_requirements: '2 passes with E grade or above in GCE A level or C grade or above in HSC\nOR\nMNQF level 4 qualification in a related field.\nOR\n20 years old, completion of secondary school, 2 years of relevant work experience, and successful completion of an MQA approved University Preparation Programme.',
  },
  {
    name: 'Associate Degree in Shari’ah and Law',
    mnqfLevel: 'Level 6',
    duration: '2 Years',
    medium: 'Dhivehi',
    fee: '27,560 ރ',
    center: 'Kulliyyah of Shari’ah and Law',
    label: 'Degree',
    available_campuses:'null',
    entry_requirements: '2 passes with E grade or above in GCE A level or C grade or above in HSC\nOR\nMNQF level 4 qualification in a related field.\n20 years old, completion of secondary school, 2 years of relevant work experience, and successful completion of an MQA approved University Preparation Programme.'
  },
  {
    name: 'Bachelor of Shari’ah and Law with Honours',
    mnqfLevel: 'Level 7',
    duration: '4 Years',
    medium: 'Dhivehi',
    fee: 'FREE ރ',
    center: 'Kulliyyah of Shari’ah and Law',
    label: 'Degree',
    available_campuses:'null',
    entry_requirements: '2 passes with E grade or above in GCE A level or C grade or above in HSC\nOR\nMNQF level 4 qualification in a related field.\nOR\n20 years old, completion of secondary school, 2 years of relevant work experience, and successful completion of an MQA approved University Preparation Programme.',
    modules: [
                {
                  programme_modules: 'Academic and Legal Dhivehi\nAdministrative Law\nAlternative Dispute Resolution\nBusiness Law\n\nCivil Procedure Law\nCompany Law I\nCompany Law II\nCompulsory Moot\nConstitutional Law\nCriminal Law I\nCriminal Law II\nCriminal Procedure Law\nHistory of Islamic Legal System\nIslamic Criminal Law I\nIslamic Criminal Law II\nIslamic Family Law\nIslamic Law of Evidence\nIslamic Law of Transactions I\nIslamic Law of Transactions II\nIslamic Legal Maxims\nJurisprudence\nLand Law I\nLand Law II\nLaw of Contract I\nLaw of Contract II\nLaw of Equity and Trust\nLaw of Evidence I\nLaw of Evidence II\nLaw of Islamic Banking and Finance\nLaw of Succession\nLaw of Tort I\nLaw of Tort II\nLegal Aspect of Selected Verses and Ahadith\nLegal Skills and Research Methodology\nMaldivian Legal System\nObjectives of Shari’ah in Islamic Legislative Policy\nPrinciples of Islamic Jurisprudence I\nPrinciples of Islamic Jurisprudence II\nProfessional Practice\nPublic International Law I\nPublic International Law II\nResearch Project',
                  core_modules: 'Values and Ethics for a Practical Life\nCritical Thinking and its Methodology\nIslamic View of Knowledge and Civilization\nMaldivian History and Civilization',
                  Quran_Arabic_Modules: 'Quran Level 1\nQuran Level 2\nQuran Level 3\nQuran Level 4\n\n\n\nArabic Language Level 1\nArabic Language Level 2\nArabic Language Level 3\nArabic Language Level 4\nArabic Language Level 5\nArabic Language Level 6',
                }
             ],
  },
  {
    name: 'Postgraduate Diploma in Law (PGDL)',
    mnqfLevel: 'Level 8',
    duration: '1 Year',
    medium: 'Dhivehi and English',
    fee: '37,845 ރ',
    center: 'Kulliyyah of Shari’ah and Law',
    label: 'Masters',
    available_campuses:'null',
    entry_requirements: 'Bachelor’s Degree at MNQF level 7 in a related field.\nOR\n25 years old, completion of a related Level 5 qualification, and 6 years of relevant experience (of which 3 years of experience is obtained after the completion of a Level 5 qualification),and achieved a pass rating from an interview or exam given by the institute.\nOR\n25 years old, completion of a related Level 6 qualification, and 4 years of relevant experience (of which 2 years of experience is obtained after the completion of a Level 6 qualification),and achieved a pass rating from an interview or exam given by the institute.',
  },
  {
    name: 'Postgraduate Diploma in Shari’ah (PGDS)',
    mnqfLevel: 'Level 8',
    duration: '1 Year',
    medium: 'Dhivehi and English',
    fee: '37,845 ރ',
    center: 'Kulliyyah of Shari’ah and Law',
    label: 'Masters',
    available_campuses:'null',
    entry_requirements: 'Bachelor’s Degree at MNQF level 7 in a related field.\nOR\n25 years old, completion of a related Level 5 qualification, and 6 years of relevant experience (of which 3 years of experience is obtained after the completion of a Level 5 qualification),and achieved a pass rating from an interview or exam given by the institute.\nOR\n25 years old, completion of a related Level 6 qualification, and 4 years of relevant experience (of which 2 years of experience is obtained after the completion of a Level 6 qualification),and achieved a pass rating from an interview or exam given by the institute.',
  },
  {
    name: 'Master of Comparative Laws',
    mnqfLevel: 'Level 9',
    duration: '1 Year',
    medium: 'Dhivehi and English',
    fee: '38,295 ރ',
    center: 'Kulliyyah of Shari’ah and Law',
    label: 'Masters',
    available_campuses:'null',
    entry_requirements: 'Bachelor’s Degree at MNQF level 7 in a related field.\nOR\nGraduate Diploma or Postgraduate Diploma at MNQF level 8 in a related field.\nOR\n25 years old, completion of a related Level 5 qualification, and 7 years of relevant experience (of which 3.5 years of experience is obtained after completion of a Level 5 qualification), and completion of an MQA approved Pre-Master’s Program.\nOR\n25 years old, completion of a related Level 6 qualification, and 6 years of relevant experience (of which 3 years of experience is obtained after completion of a Level 6 qualification), and completion of an MQA approved Pre-Master’s Program.',
    modules: [
              {
                programme_modules: 'Research Methodology in Law\nStudy of Islamic and Maldivian Legal System\nComparative Labour Law\nLaw of Islamic Banking and Finance\nComparative Medical Law\nStudy of Islamic Law of Evidence\nComparative Jurisprudence\nComparative Constitutional Law\nStudy of Islamic Law of Transactions\nPrinciple of Islamic Jurisprudence\nHuman Rights in Islam\nStudy of Islamic Criminal Law\nComparative Cyber Law\nAlternative Dispute Resolution Mechanism\nDissertation\nThesis',
                optional_modules: 'Tawhid, Humanity and Civilization\nInnovative Thinking in Islamic Perspective',
              }
            ],
  },
  {
    name: 'Master of Islamic Judicial Sciences and Shari’ah Policy',
    mnqfLevel: 'Level 9',
    duration: '1 Year',
    medium: 'Dhivehi and English',
    fee: '38,295 ރ',
    center: 'Kulliyyah of Shari’ah and Law',
    label: 'Masters',
    available_campuses:'null',
    entry_requirements: 'Bachelor’s Degree at MNQF level 7 in a related field.\nOR\nGraduate Diploma or Postgraduate Diploma at MNQF level 8 in a related field.\nOR\n25 years old, completion of a related Level 5 qualification, and 7 years of relevant experience (of which 3.5 years of experience is obtained after completion of a Level 5 qualification), and completion of an MQA approved Pre-Master’s Program.\nOR\n25 years old, completion of a related Level 6 qualification, and 6 years of relevant experience (of which 3 years of experience is obtained after completion of a Level 6 qualification), and completion of an MQA approved Pre-Master’s Program.',
    language_requirements: 'If Medium of Instruction is Arabic: \nShahadhaa Sanaviyya pass in all Arabic language modules,\nORMNQF Level 4 or above qualification in Arabic language.\nOR\nA pass in Arabic Competency Test of IUM or equivalent.\nIf a student has completed his/her previous qualification(s) in Arabic medium, the student will be given exemption from Arabic language requirement.',
    modules: [
                {
                  programme_modules: 'Research Methodology in Islamic Law\nIslamic Shari’ah Policy\nJuristic Study of Judiciary\nTheory of Objectives of Shari’ah\nTheory of Islamic Law of Evidence\nConflicts and Preferences on Shari’ah Issues\nIssues of Codification in Islamic Jurisprudence\nPrinciples of Islamic Jurisprudence\nAdministrative, Economic, and Financial System in Islam\nStudies in Comparative Fiqh\nStudies of Islamic Law of Transactions\nStudies of Islamic Family Law\nStudies of Maldivian Judicial System\nIslamic Criminal Law\nDissertation',
                  optional_modules: 'Tawhid, Humanity and Civilization\nInnovative Thinking in Islamic Perspective',
                }
             ],
  },
  {
    name: 'Master of Law (Comparative Jurisprudence)',
    mnqfLevel: 'Level 9',
    duration: '1 Year',
    medium: 'Dhivehi and English',
    fee: '34,225 ރ',
    center: 'Kulliyyah of Shari’ah and Law',
    label: 'Masters',
    available_campuses:'Male’ Campus',
    entry_requirements: 'A related Bachelor’s Degree at MNQF Level 7 or Above',
  },
  {
    name: 'Doctor of Philosophy in Islamic Judicial Sciences and Legislative Policy',
    mnqfLevel: 'Level 10',
    duration: '3 Year',
    medium: 'Arabic',
    fee: '98,865 ރ',
    center: 'Kulliyyah of Shari’ah and Law',
    label: 'PhD',
    available_campuses: 'null',
    entry_requirements: 'Master’s Degree at MNQF Level 9 in Shari’ah or Shari’ah and Law or Islamic Studies orJudicial Sciences or Fiqh or Usul‐al‐Fiqh or Usul‐al‐Din.\n\nAND\n\nBachelor’s Degree at MNQF Level 7 in Shari’ah or Shari’ah and Law\nOR\Islamic Studies orJudicial Sciences or Fiqh or Usul‐al‐Fiqh or Usul‐al‐Din.',
    language_requirements: 'Shahadhaa Sanaviyya pass in all Arabic language modules,\nOR\nMNQF Level 4 or above qualification in Arabic language.\nOR\nA pass in Arabic Competency Test of IUM or equivalent.\nIf a student has completed his/her previous qualification(s) in Arabic medium, the student will be given exemption from Arabic language requirement.',
  },
  // Add more courses as needed
];
