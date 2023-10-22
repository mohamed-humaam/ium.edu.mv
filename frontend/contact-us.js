const data = [
    {
        department: "Chancellery",
        code: "3022110",
        email: "chancellor.bureau@ium.edu.mv"
    },
    {
        department: "Student Affairs",
        code: "3022120",
        email: "student.affairs@ium.edu.mv"
    },
    {
        department: "Library and Archives",
        code: "3022130",
        email: "library@ium.edu.mv"
    },
    {
        department: "Human Resource Management",
        code: "3022160",
        email: "hr@ium.edu.mv"
    },
    {
        department: "Finance",
        code: "3022170",
        email: "finance@ium.edu.mv / payments@ium.edu.mv"
    },
    {
        department: "Procurement",
        code: "3022180",
        email: "procurement@ium.edu.mv"
    },
    {
        department: "Information Community Technology",
        code: "3022150",
        email: "ict@ium.edu.mv"
    },
    {
        department: "Centre for Research and Publications",
        code: "3022140",
        email: "crp@ium.edu.mv"
    },
    {
        department: "Kulliyyah of Education",
        code: "3022142",
        email: "ked@ium.edu.mv"
    },
    {
        department: "Kulliyyah of Shari’ah and Law",
        code: "3022143",
        email: "ksl@ium.edu.mv"
    },
    {
        department: "Kulliyyah of Quran and Sunnah",
        code: "3022144",
        email: "kqs@ium.edu.mv"
    },
    {
        department: "Kulliyyah of Arabic Language",
        code: "3022145",
        email: "kal@ium.edu.mv"
    },
    {
        department: "Kulliyyah of Economics and Management Studies",
        code: "3022146",
        email: "kem@ium.edu.mv"
    },
    {
        department: "Kulliyyah of Islamic Heritage and Human Sciences",
        code: "3022147",
        email: "kirk@ium.edu.mv"
    },
    {
        department: "Centre for Continuing Education",
        code: "3022148",
        email: "cce@ium.edu.mv"
    },
    {
        department: "Centre for Postgraduate Studies",
        code: "3022149",
        email: "cps@ium.edu.mv"
    },
];






const cardContainer = document.getElementById('contact-card-container');

data.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h2>${item.department}</h2>
        <p><i class="fas fa-phone"></i> <a href="tel:${item.code}">${item.code}</a></p>
        <p><i class="fas fa-envelope-open"></i> <a href="mailto:${item.email}">${item.email}</a></p>
    `;
    cardContainer.appendChild(card);
});