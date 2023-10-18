// Sample staff data
const CRP_Admin = [
  {
    name: "Aishath Rafaahath Ibrahim",
    occupation: "Administrative Officer",
    photo: "./Images/Faculties/kems/admin.png",
    contact: "+960330122",
    email: "example@ium.edu.mv"

  },
  // Add more administrative staff here as needed
];

const CRP_Academic = [
  {
    name: "Dr. Visal Moosa",
    occupation: "Senior Lecturer",
    photo: "./Images/Faculties/kems/lecturer.png",
    contact: "+960330122",
    email: "example@ium.edu.mv",
    academic_qualifications: [
      "Ph.D. in Bioenvironmental Engineering",
      "M.S. in Chemical Engineering",
      "B.S. in Biochemical Engineering"
    ],
    profile: "Dr. Md. Zahangir Alam is a Professor and Coordinator of Bioenvironmental Engineering Research Centre (BERC), Faculty of Engineering at IIUM and was Head of the Department of Biotechnology Engineering from 2009 to 2012. Professor Alam is a member of professional bodies; American Chemical Society (ACS), International Water Association (IWA) and Fellow of the Institute of Engineers, Bangladesh. With his experience in chemical, biochemical and bioenvironmental engineering, he was appointed as the section editor and member of editorial boards of journals such as IIUM Engineering Journal and Journal of Environmental Research and Development as well as reviewer for many SCI journals. Professor Alam won the prestigious international 'Scopus Young Scientist Award' and 1st Runner Up in Asia Pacific for 2010 under energy category. He was the recipient of numerous awards such as Most Innovative Award in BioMalaysia, IIUM Outstanding Researcher Award, IIUM Quality Research Award, Special Recognition Award, Best Teacher Award and Highest Citations in Cited Journal Award. He has also been awarded 62 Gold, 54 Silver and 48 Bronze medals at university, national and international levels for various research achievements. He has been the principal and co-researcher of more than 40 research projects/grants approved by the university (IIUM), Malaysian government and industrial sector (Indah Water Konsortium/Sime Darby). He was the first recipient of pre-commercialization fund named eTechnofund at IIUM approved by the MOSTI in 2007. He was also awarded two international research grants such as TWAS and COSTECH-ISESCO. Prof Alam is well-known in his research field and has supervised more than 50 postgraduate students at the Master's (33) and PhD (20) levels as well as over 130 students at the undergraduate level. He has examined theses as an External and Internal Examiners at national and international levels. Being highly active in research, Prof. Jahangir has authored/co-authored some 450 publications including international and local refereed journals (153+) and conferences (200+), books (3), book chapters (39), patents (25) and project reports (35+). His journal papers, have a large number of citations (1160+) with high h-index (22) at Scopus Database.",
    specialization: [
      "Engineering Tech ~ Engineering And Technology ~ Agricultural Engineering ~ Agro-Waste Management - 1. Biodiesel production from waste frying oils/palm sludge oil/crude palm oil by esterfication/transesterification processes. 2. Bioreactor design and analysis for and liquid-state bioconversion. 3. Bioprocess optimization and modeling. 4. Development of biosorbents for bioseparation processes. 5. Development of carbon nanotubes (CNTs) for water treatment.",
      "Biotechnology ~ Biotechnology ~ Industrial and Environmental Biotechnology ~ Enzyme Technology",
      "Engineering Tech ~ Applied Sciences And Technologies ~ Energy Technology ~ Biomass Energy Technology (Including Biogas and Biofuel) - 1. Development of biological processes for the treatment of water/wastewater/wastewater sludge for environmentally friendly management, recycling and disposal.",
    ],
    research: {
      completed: [
          { year: "2020 - 2023", title: "Optimization of Poultry Manure and POME Composting by Highly Active Microbial Inoculation" },
          { year: "2020 - 2020", title: "Penyediaan Pelan Pengurusan Lembangan Sungai Bersepadu (IRBM) Sungai Buloh, WPKL/Selangor D.E." },
          { year: "2018 - 2019", title: "Pelan Pengurusan Lembangan Sungai Bersepadu (IRBM) Sungai Merbok, Kedah" },
      ],
      ongoing: [
          { year: "2022 - Present", title: "Characterization and Evaluation of Vermicompost Fertilizer for its High Quality and Assessment in Plant Growth" },
          { year: "2022 - Present", title: "Investigation of Water Quality Monitoring Using IoT and Machine Learning Techniques 'Sungai Pusu River IIUM Gombak Case study'" },
          { year: "2020 - Present", title: "Development of a Solid-State Bio-Conversion System for the Bulk Production of Myco-Coagulant (My-Coag) for Water Treatment" },
      ]
    },
    awards: [
      { date: "27 Apr, 2017", award: "Highest Number of Publication in Citation Indexed Journal Award 2017 - IIUM", organization: "University" },
      { date: "12 Apr, 2011", award: "Outstanding Researcher Award 2011, University Level - IIUM", organization: "University" },
      { date: "12 Apr, 2011", award: "Quality Research Award, University Level - IIUM", organization: "University" }
    ],
    publications: [
        { year: 2023, title: "Acid–base pretreatment and enzymatic hydrolysis of palm oil mill effluent in a single reactor system for production of fermentable sugars. International Journal of Polymer Science, 2023 () pp. 1-15" },
        { year: 2023, title: "Biodegradation of fats, oil and grease using microorganisms isolated from palm oil mill effluent. IIUM Engineering Journal, 24 (2) pp. 1-10" },
        { year: 2023, title: "Effect of the lignocellulolytic substrates and fermentation process parameters on myco-coagulant production for water treatment. IIUM Engineering Journal, 24 (1) pp. 13-26" }
    ],
  },
  {
    name: "Dr. Mariyam Shareefa",
    occupation: "Senior Lecturer",
    photo: "./Images/Faculties/kems/lecturer.png",
    contact: "+960330122",
    email: "example@ium.edu.mv",
    academic_qualifications: [
      "Ph.D. in Bioenvironmental Engineering",
      "M.S. in Chemical Engineering",
      "B.S. in Biochemical Engineering"
    ],
    profile: "Dr. Md. Zahangir Alam is a Professor and Coordinator of Bioenvironmental Engineering Research Centre (BERC), Faculty of Engineering at IIUM and was Head of the Department of Biotechnology Engineering from 2009 to 2012. Professor Alam is a member of professional bodies; American Chemical Society (ACS), International Water Association (IWA) and Fellow of the Institute of Engineers, Bangladesh. With his experience in chemical, biochemical and bioenvironmental engineering, he was appointed as the section editor and member of editorial boards of journals such as IIUM Engineering Journal and Journal of Environmental Research and Development as well as reviewer for many SCI journals. Professor Alam won the prestigious international 'Scopus Young Scientist Award' and 1st Runner Up in Asia Pacific for 2010 under energy category. He was the recipient of numerous awards such as Most Innovative Award in BioMalaysia, IIUM Outstanding Researcher Award, IIUM Quality Research Award, Special Recognition Award, Best Teacher Award and Highest Citations in Cited Journal Award. He has also been awarded 62 Gold, 54 Silver and 48 Bronze medals at university, national and international levels for various research achievements. He has been the principal and co-researcher of more than 40 research projects/grants approved by the university (IIUM), Malaysian government and industrial sector (Indah Water Konsortium/Sime Darby). He was the first recipient of pre-commercialization fund named eTechnofund at IIUM approved by the MOSTI in 2007. He was also awarded two international research grants such as TWAS and COSTECH-ISESCO. Prof Alam is well-known in his research field and has supervised more than 50 postgraduate students at the Master's (33) and PhD (20) levels as well as over 130 students at the undergraduate level. He has examined theses as an External and Internal Examiners at national and international levels. Being highly active in research, Prof. Jahangir has authored/co-authored some 450 publications including international and local refereed journals (153+) and conferences (200+), books (3), book chapters (39), patents (25) and project reports (35+). His journal papers, have a large number of citations (1160+) with high h-index (22) at Scopus Database.",
    specialization: [
      "Engineering Tech ~ Engineering And Technology ~ Agricultural Engineering ~ Agro-Waste Management - 1. Biodiesel production from waste frying oils/palm sludge oil/crude palm oil by esterfication/transesterification processes. 2. Bioreactor design and analysis for and liquid-state bioconversion. 3. Bioprocess optimization and modeling. 4. Development of biosorbents for bioseparation processes. 5. Development of carbon nanotubes (CNTs) for water treatment.",
      "Biotechnology ~ Biotechnology ~ Industrial and Environmental Biotechnology ~ Enzyme Technology",
      "Engineering Tech ~ Applied Sciences And Technologies ~ Energy Technology ~ Biomass Energy Technology (Including Biogas and Biofuel) - 1. Development of biological processes for the treatment of water/wastewater/wastewater sludge for environmentally friendly management, recycling and disposal.",
    ],
    research: {
      completed: [
          { year: "2020 - 2023", title: "Optimization of Poultry Manure and POME Composting by Highly Active Microbial Inoculation" },
          { year: "2020 - 2020", title: "Penyediaan Pelan Pengurusan Lembangan Sungai Bersepadu (IRBM) Sungai Buloh, WPKL/Selangor D.E." },
          { year: "2018 - 2019", title: "Pelan Pengurusan Lembangan Sungai Bersepadu (IRBM) Sungai Merbok, Kedah" },
      ],
      ongoing: [
          { year: "2022 - Present", title: "Characterization and Evaluation of Vermicompost Fertilizer for its High Quality and Assessment in Plant Growth" },
          { year: "2022 - Present", title: "Investigation of Water Quality Monitoring Using IoT and Machine Learning Techniques 'Sungai Pusu River IIUM Gombak Case study'" },
          { year: "2020 - Present", title: "Development of a Solid-State Bio-Conversion System for the Bulk Production of Myco-Coagulant (My-Coag) for Water Treatment" },
      ]
    },
    awards: [
      { date: "27 Apr, 2017", award: "Highest Number of Publication in Citation Indexed Journal Award 2017 - IIUM", organization: "University" },
      { date: "12 Apr, 2011", award: "Outstanding Researcher Award 2011, University Level - IIUM", organization: "University" },
      { date: "12 Apr, 2011", award: "Quality Research Award, University Level - IIUM", organization: "University" }
    ],
    publications: [
        { year: 2023, title: "Acid–base pretreatment and enzymatic hydrolysis of palm oil mill effluent in a single reactor system for production of fermentable sugars. International Journal of Polymer Science, 2023 () pp. 1-15" },
        { year: 2023, title: "Biodegradation of fats, oil and grease using microorganisms isolated from palm oil mill effluent. IIUM Engineering Journal, 24 (2) pp. 1-10" },
        { year: 2023, title: "Effect of the lignocellulolytic substrates and fermentation process parameters on myco-coagulant production for water treatment. IIUM Engineering Journal, 24 (1) pp. 13-26" }
    ],
  },
  // Add more academic staff here as needed
];


 