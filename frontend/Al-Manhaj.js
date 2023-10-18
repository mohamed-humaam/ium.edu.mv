const years = [2023, 2022, 2021,2020];
const yearContainer = document.getElementById('yearContainer');

const pdfData = {
    2023: [
        { name: 'Al-Manhaj', batch: '2023', imageUrl: './Images/Research/al-manhaj/icon.png', pdfUrl: './Images/Research/al-manhaj/al-manhaj-2022.pdf' },
    ],
    2022: [
        { name: 'Al-Manhaj', batch: '2022', imageUrl: './Images/Research/al-manhaj/icon.png', pdfUrl: './Images/Research/al-manhaj/al-manhaj-2022.pdf' },
    ],
    2021: [
        { name: 'Al-Manhaj', batch: '2021', imageUrl: './Images/Research/al-manhaj/icon.png', pdfUrl: './Images/Research/al-manhaj/al-manhaj-2022.pdf' },
    ],
    2020: [
        { name: 'Al-Manhaj', batch: '2020', imageUrl: './Images/Research/al-manhaj/icon.png', pdfUrl: './Images/Research/al-manhaj/al-manhaj-2022.pdf' },
    
    ],
};


years.forEach((year) => {
    const yearCard = document.createElement('div');
    yearCard.classList.add('year-card');

    const yearTitle = document.createElement('h2');
    yearTitle.innerText = year;

    yearCard.appendChild(yearTitle);

    const pdfsContainer = document.createElement('div');
    pdfsContainer.classList.add('pdf-card-container');

    yearCard.appendChild(pdfsContainer);

    yearCard.addEventListener('click', () => {
        const pdfs = pdfData[year];
        pdfsContainer.innerHTML = '';

        const pdfGrid = document.createElement('div');
        pdfGrid.classList.add('pdf-card-grid');

        pdfs.forEach((pdf) => {
            const pdfCard = document.createElement('div');
            pdfCard.classList.add('pdf-card');
            pdfCard.innerHTML = `
                <img src="${pdf.imageUrl}" alt="${pdf.name}">
                <div>
                    <h3>${pdf.name}</h3>
             
                    <a href="${pdf.pdfUrl}" target="_blank" class="pdf-button">View PDF</a>
                </div>
            `;
            pdfGrid.appendChild(pdfCard);
        });

        pdfsContainer.appendChild(pdfGrid);

        // Toggle the "expanded" class to show or hide additional information
        yearCard.classList.toggle('expanded');
    });

    yearContainer.appendChild(yearCard);
});