const years = [2023, 2022, 2021];
const yearContainer = document.getElementById('yearContainer');

const studentData = {
    2023: [
        { name: 'Student 1', batch: 'Batch 2023', imageUrl: './Images/Faculties/kems/dean.jpg' },
        { name: 'Student 2', batch: 'Batch 2023', imageUrl: 'student2.jpg' },
    ],
    2022: [
        { name: 'Student 3', batch: 'Batch 2022', imageUrl: 'student3.jpg' },
        { name: 'Student 4', batch: 'Batch 2022', imageUrl: 'student4.jpg' },
    ],
    2021: [
        { name: 'Student 5', batch: 'Batch 2021', imageUrl: 'student5.jpg' },
        { name: 'Student 6', batch: 'Batch 2021', imageUrl: 'student6.jpg' },
    ],
};

years.forEach((year) => {
    const yearCard = document.createElement('div');
    yearCard.classList.add('year-card');

    const yearTitle = document.createElement('h2');
    yearTitle.innerText = year;

    yearCard.appendChild(yearTitle);

    const studentsContainer = document.createElement('div');
    studentsContainer.classList.add('student-card-container');

    yearCard.appendChild(studentsContainer);

    yearCard.addEventListener('click', () => {
        const students = studentData[year];
        studentsContainer.innerHTML = '';

        const studentGrid = document.createElement('div');
        studentGrid.classList.add('student-card-grid');

        students.forEach((student) => {
            const studentCard = document.createElement('div');
            studentCard.classList.add('student-card');
            studentCard.innerHTML = `
                <img src="${student.imageUrl}" alt="${student.name}">
                <div>
                    <h3>${student.name}</h3>
                    <p>${student.batch}</p>
                </div>
            `;
            studentGrid.appendChild(studentCard);
        });

        studentsContainer.appendChild(studentGrid);

        // Toggle the "expanded" class to show or hide additional information
        yearCard.classList.toggle('expanded');
    });

    yearContainer.appendChild(yearCard);
});
