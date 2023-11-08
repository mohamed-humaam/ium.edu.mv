const years = [2023, 2022, 2021];
        const yearContainer = document.getElementById('yearContainer');

        const studentData = {
           2023: [
               

            ],
            2022: [
                { name: 'Student 1', batch: 'BQS36', imageUrl: './Images/convocation selection/_DSC2265.JPG' },
                { name: 'Student 2', batch: 'BTQ17', imageUrl: './Images/convocation selection/_DSC2403.JPG' },
                { name: 'Student 1', batch: 'BQS36', imageUrl: './Images/convocation selection/_DSC2483.JPG' },
                { name: 'Student 2', batch: 'BTQ17', imageUrl: './Images/convocation selection/_DSC2522.JPG' },
                { name: 'Student 1', batch: 'BQS36', imageUrl: './Images/convocation selection/_DSC2654.JPG' },
                { name: 'Student 2', batch: 'BTQ17', imageUrl: './Images/convocation selection/_DSC4933.JPG' },
                { name: 'Student 1', batch: 'BQS36', imageUrl: './Images/convocation selection/_DSC4983.JPG' },
                { name: 'Student 2', batch: 'BTQ17', imageUrl: './Images/convocation selection/_DSC5380.JPG' },
                { name: 'Student 1', batch: 'BQS36', imageUrl: './Images/convocation selection/_DSC5400.JPG' },
                { name: 'Student 2', batch: 'BTQ17', imageUrl: './Images/convocation selection/_DSC5412.JPG' },
                { name: 'Student 1', batch: 'BQS36', imageUrl: './Images/convocation selection/_DSC5420.JPG' },
                { name: 'Student 2', batch: 'BTQ17', imageUrl: './Images/convocation selection/_DSC5428.JPG' },
                { name: 'Student 1', batch: 'BQS36', imageUrl: './Images/convocation selection/_DSC5442.JPG' },
                { name: 'Student 2', batch: 'BTQ17', imageUrl: './Images/convocation selection/_DSC5450(2).JPG' },
                { name: 'Student 1', batch: 'BQS36', imageUrl: './Images/convocation selection/_DSC5471.JPG' },
                { name: 'Student 2', batch: 'BTQ17', imageUrl: './Images/convocation selection/_DSC5494.JPG' },
                { name: 'Student 1', batch: 'BQS36', imageUrl: './Images/convocation selection/_DSC5499.JPG' },
                { name: 'Student 2', batch: 'BTQ17', imageUrl: './Images/convocation selection/_DSC5511.JPG' },
                { name: 'Student 1', batch: 'BQS36', imageUrl: './Images/convocation selection/_DSC5526.JPG' },
                { name: 'Student 2', batch: 'BTQ17', imageUrl: './Images/convocation selection/_DSC5535.JPG' },
                { name: 'Student 1', batch: 'BQS36', imageUrl: './Images/convocation selection/_DSC5562.JPG' },
                { name: 'Student 2', batch: 'BTQ17', imageUrl: './Images/convocation selection/_DSC5581.JPG' },
            ],
            2021: [
                //{ name: 'Student 5', batch: 'MTL18', imageUrl: './Images/Faculties/kems/dean.jpg' },
               // { name: 'Student 6', batch: 'BQT24', imageUrl: './Images/Faculties/kems/dean.jpg' },
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
                        <div class="student-image-container">
                            <img src="${student.imageUrl}" alt="${student.name}" class="student-image">
                            <div class="download-icon">
                                <a href="${student.imageUrl}" download="${student.name}.jpg" title="Download Image">
                                    <i class="fas fa-download"></i>
                                </a>
                            </div>
                        </div>
                        <div class="student-name">
                            <h3>${student.name}</h3>
                            <p>${student.batch}</p>
                        </div>
                    `;

                    // Prevent the click event on student cards from propagating to the year card
                    studentCard.addEventListener('click', (e) => {
                        e.stopPropagation();
                    });

                    const studentImage = studentCard.querySelector('.student-image');
                    studentImage.addEventListener('click', () => {
                        const enlargedImageContainer = document.createElement('div');
                        enlargedImageContainer.classList.add('enlarged-image-container');
                        enlargedImageContainer.innerHTML = `
                            <div class="enlarged-image">
                                <img src="${student.imageUrl}" alt="${student.name}">
                            </div>
                            <div class="download-icon">
                                <a href="${student.imageUrl}" download="${student.name}.jpg" title="Download Image">
                                    <i class="fas fa-download"></i>
                                </a>
                            </div>
                        `;

                        enlargedImageContainer.addEventListener('click', () => {
                            enlargedImageContainer.remove();
                        });

                        document.body.appendChild(enlargedImageContainer);
                    });

                    studentGrid.appendChild(studentCard);
                });

                studentsContainer.appendChild(studentGrid);

                // Toggle the "expanded" class to show or hide additional information
                yearCard.classList.toggle('expanded');
            });

            yearContainer.appendChild(yearCard);
        });
