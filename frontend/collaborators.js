// JavaScript to populate the tables
const internationalCollaborators = [
    {
        institution: "International Arees University (Sudan)",
        signed: "Signed in 2015",
        expires: "Active + open"
    },
    {
        institution: "Centre for Excellence in Islamic Finance Institute of Business Administration",
        signed: "Expired on July 2020",
        expires: "Expired on July 2020"
    },
    {
        institution: "Centre of Islamic and Economics",
        signed: "Expired on 2018",
        expires: "Expired on 2018"
    },
    {
        institution: "Islamic Forum for International Humanitarian Law (Qatar)",
        signed: "Signed in 2016",
        expires: "Active + open"
    },
    {
        institution: "International Institute of Islamic Thoughts (IIIT)",
        signed: "Existing 2 documents",
        expires: "IIIT - signed date is not included in the document (lasts for 2 years), IIIT2 - signed date is not included in the document (lasts for 5 years)"
    },
    {
        institution: "International Islamic University, Islamabad, Pakistan",
        signed: "Signed in 2016",
        expires: "Active + open"
    },
    {
        institution: "International Islamic University of Malaysia",
        signed: "Signed on 5th Nov 2016",
        expires: "Expires on 5th Nov 2021"
    },
    {
        institution: "INCEIF, The Global University of Islamic Finance (MOA as a collaborative partner)",
        signed: "Expired in 2019",
        expires: "Expired in 2019"
    },
    {
        institution: "INCEIF, The Global University of Islamic Finance (MOA for development of curriculum)",
        signed: "Expired in 2019",
        expires: "Expired in 2019"
    },
    {
        institution: "INCEIF, The Global University of Islamic Finance (MOU)",
        signed: "Expired in 2019",
        expires: "Expired in 2019"
    },
    {
        institution: "Islamic Online University",
        signed: "Signed on 17th July 2017",
        expires: "Expires in July 2022"
    },
    {
        institution: "Islamic Research and Training Institute",
        signed: "Active + open",
        expires: "Active + open"
    },
    {
        institution: "Raabithathul Jaamiyaathul Islamiyya",
        signed: "Signature date not evident (lasts for 3 years), probably 2019",
        expires: "Signature date not evident (lasts for 3 years), probably 2019"
    },
    {
        institution: "Islamic University Madinah, Kingdom of Saudi Arabia",
        signed: "Signed on 22nd April 2018",
        expires: "Expires in April 2021"
    },
    {
        institution: "University of Malaya (MOU - academic cooperation)",
        signed: "Signed on 12th July 2017",
        expires: "Expires in July 2022"
    },
    {
        institution: "University of Malaya (MOA - Student exchange program)",
        signed: "Signed on 12th July 2017",
        expires: "Expires in July 2022"
    },
    {
        institution: "Universiti Sultan Zainul Abidin",
        signed: "Signed on 16th Dec 2019",
        expires: "Expires on 16th Dec 2022"
    },
    {
        institution: "RIFAH International University",
        signed: "Signed on 11th March 2017",
        expires: "Expires in March 2022"
    },
    {
        institution: "University of Kebangsaan Malaysia",
        signed: "Signed on 15th Aug 2017",
        expires: "Expires in Aug 2022"
    },
    {
        institution: "United Nations Development Programme",
        signed: "Expired in 2019",
        expires: "Expired in 2019"
    },
    {
        institution: "Universiti Sains Islam Malaysia",
        signed: "Expired in 2019",
        expires: "Expired in 2019"
    },
    {
        institution: "WFAAIS",
        signed: "Signed on 10th March 2019",
        expires: ""
    },
    {
        institution: "WFAAIS",
        signed: "Signed on 31st May 2017",
        expires: ""
    },
    {
        institution: "BOLGAR Academy",
        signed: "To be signed",
        expires: "To be signed"
    },
    {
        institution: "ALIGARH MUSLIM UNIVERSITY",
        signed: "Signed on 7 February 2022",
        expires: "Expired in 17 February 2026"
    },
    {
        institution: "INCEIF INTERNATIONAL CENTRE FOR EDUCATION IN ISLAMIC FINANCE (INCEIF)",
        signed: "Signed on 24th March 2022",
        expires: "Expired on 24th March 2025"
    },
    {
        institution: "ALINEA",
        signed: "Signed on 12th September 2022",
        expires: "Expired on 31st June 2023"
    },
    {
        institution: "KOLEJ Universiti Islam Antarbangsa Selangor (KUIS)",
        signed: "Signed on 29th September 2021",
        expires: "Expired on 29th September 2023"
    },
    {
        institution: "INTHI INTERNATIONAL UNIVERSITY & COLLEGES",
        signed: "Effective on 23rd August 2021",
        expires: "Expired on 23rd August 2026"
    },
    {
        institution: "The OSLO AL-DEEN University College",
        signed: "Signed on 24th October 2022",
        expires: "Expired on 24th October 2025"
    },
    {
        institution: "The KUNOOZ University College (KUC)",
        signed: "Signed on 24th October 2022",
        expires: "Expired on 24th October 2025"
    },
    {
        institution: "USKUNDAR UNIVERSITY",
        signed: "Signed on 24th October 2022",
        expires: "Expired on 24th October 2027"
    },
    {
        institution: "INTERNATIONAL ISLAMIC UNIVERSITY MALAYSIA",
        signed: "Signed on 16th May 2023",
        expires: "Expired on 16th May 2026"
    },
    {
        institution: "UNIVERSITI KEBANGSAAN MALAYSIA",
        signed: "Signed on 8th May 2023",
        expires: "Expired on 8th May 2028"
    },
    {
        institution: "INTERNATIONAL UNION OF UNIVERSITIES, ISTANBUL",
        signed: "Signed on 22nd June 2022",
        expires: "Expired on 22nd June 2028"
    }
];

const localCollaborators = [
    {
        institution: "Anti-Corruption Commission - MOU",
        signed: "Signed on 8th May 2017",
        expires: "Still active/open"
    },
    {
        institution: "Civil Service Commission - MOU",
        signed: "Signed on 15th June 2017",
        expires: "Expires on 15th June 2022"
    },
    {
        institution: "Dhivehi Bahuge Academy MOU",
        signed: "Signed on 23rd Feb 2017",
        expires: "Expires on 23rd Feb 2022"
    },
    {
        institution: "Excel International School",
        signed: "29 Dec 2016",
        expires: "Expired on 29th Dec 2021"
    },
    {
        institution: "Maldives Islamic Bank (Sponsoring students)",
        signed: "Signed on 27th Dec 2016",
        expires: "OPEN/ACTIVE"
    },
    {
        institution: "Maldives Islamic Bank - MOU",
        signed: "Signed on 19 Oct 2016",
        expires: "Expired on 19 Oct 2019"
    },
    {
        institution: "Ministry of Higher Education - MOU",
        signed: "Signed on 20th February 2019",
        expires: "Expires on 2024"
    },
    {
        institution: "The Maldives National University - MOU",
        signed: "Signed on 6th Nov 2017",
        expires: "6th Nov 2022"
    },
    {
        institution: "National Counter Terrorism Centre - LOI",
        signed: "Signed on 8th June 2017",
        expires: "Expires on 8th June 2022"
    },
    {
        institution: "Public Service Media - MOA",
        signed: "Signed on 2020",
        expires: "Expired in 1 year on 2021"
    },
    {
        institution: "Advocating Rights of Children (ARC) - MOU",
        signed: "Signed on 29th Jan 2020",
        expires: "Expired on 29th Jan 2021"
    },
    {
        institution: "Fuvahmulah Atoll Council - MOU",
        signed: "Signed on 31 Dec 2018",
        expires: "Expires on 2032"
    },
    {
        institution: "Fonadhoo Council Idhaaraa - MOU",
        signed: "Signed on 10th Jan 2019",
        expires: "Expires on 10th Jan 2029"
    },
    {
        institution: "Ministry of Islamic Affairs - MOU",
        signed: "Signed on 04 January 2020",
        expires: "Expires on 04 January 2025"
    },
    {
        institution: "Ministry of Islamic Affairs - MOA",
        signed: "Signed on 04 January 2020",
        expires: "Expires on 04 January 2025"
    },
    {
        institution: "Maldives Broadcasting Commission",
        signed: "Signed on 24 September 2020",
        expires: "Expires on 24 September 2023"
    },
    {
        institution: "IUM Holding (MOA)",
        signed: "Signed on 15 January 2018",
        expires: "Expires on 15 January 2028"
    },
    {
        institution: "IUM Holding (MOU)",
        signed: "Signed on 1 February 2020",
        expires: "Expired on 1 February 2025"
    },
    {
        institution: "MNU (library loan hidhumai dhinumuge ehbasvun)",
        signed: "Signed on 14 January 2021",
        expires: "Expires on 14th January 2023"
    },
    {
        institution: "Capital Market Development Authority",
        signed: "Signed on 3 October 2021",
        expires: "Expires on 3 October 2023"
    },
    {
        institution: "MIB (Charity fund manage kurumah havaalukurun)",
        signed: "Signed on 23 August 2021",
        expires: "+active"
    },
    {
        institution: "Ministry of Youth Sports and Community Empowerment",
        signed: "Signed on 25 April 2022",
        expires: "Expires on 25 April 2024"
    },
    {
        institution: "Civil Service Commission",
        signed: "1st March 2023",
        expires: "Expires on 1st March 2026"
    },
    {
        institution: "Institute of Chartered Accountants of Maldives",
        signed: "27th February 2023",
        expires: "Expires on 27th February 2026"
    },
    {
        institution: "Local Government Authority",
        signed: "26th February 2023",
        expires: "Expires on 26th February 2028"
    }
];


function populateTable(table, data) {
    const tableBody = table.querySelector('tbody');
    data.forEach((item, index) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = index + 1;
        row.insertCell(1).textContent = item.institution;
        row.insertCell(2).textContent = item.signed;
        row.insertCell(3).textContent = item.expires;
    });
}

const internationalTable = document.querySelector('#international table');
const localTable = document.querySelector('#local table');

populateTable(internationalTable, internationalCollaborators);
populateTable(localTable, localCollaborators);
