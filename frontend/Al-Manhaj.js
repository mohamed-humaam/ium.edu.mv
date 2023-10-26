const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
const yearContainer = document.getElementById('yearContainer');

const pdfData = {
    2023: [
        { name: 'Adhaahama', imageUrl: './Images/Research/adhaahama/icon.jpg', pdfUrl: './Images/Research/adhaahama/adhaahama-2019.pdf' },
    ],
    2022: [
        { name: 'Adhaahama', imageUrl: './Images/Research/adhaahama/icon.jpg', pdfUrl: 'https://ium-media.s3.ap-southeast-1.amazonaws.com/adhaahama-3-final-1628504664qwgd6.pdf' },
    ],
    2021: [
        { name: 'Adhaahama', imageUrl: './Images/Research/adhaahama/icon.jpg', pdfUrl: 'https://ium-media.s3.ap-southeast-1.amazonaws.com/adhaahama-3-final-1628504664qwgd6.pdf' },
    ],
    2020: [
        { name: 'Adhaahama', imageUrl: './Images/Research/adhaahama/icon.jpg', pdfUrl: './Images/Research/adhaahama/adhaahama-2019.pdf' },
    ],
    2019: [
        { name: 'Adhaahama', imageUrl: './Images/Research/adhaahama/icon.jpg', pdfUrl: 'https://ium-media.s3.ap-southeast-1.amazonaws.com/adhaahama-3-final-1628504664qwgd6.pdf' },
    ],
    2018: [
        { name: 'Adhaahama', imageUrl: './Images/Research/adhaahama/icon.jpg', pdfUrl: 'https://ium-media.s3.ap-southeast-1.amazonaws.com/adhaahama-3-final-1628504664qwgd6.pdf' },
    ],
    2017: [
        { name: 'Adhaahama', imageUrl: './Images/Research/adhaahama/icon.jpg', pdfUrl: './Images/Research/adhaahama/adhaahama-2019.pdf' },
    ],
    2016: [
        { name: 'Adhaahama', imageUrl: './Images/Research/adhaahama/icon.jpg', pdfUrl: 'https://ium-media.s3.ap-southeast-1.amazonaws.com/adhaahama-3-final-1628504664qwgd6.pdf' },
    ],
    2015: [
        { name: 'Adhaahama', imageUrl: './Images/Research/adhaahama/icon.jpg', pdfUrl: 'https://ium-media.s3.ap-southeast-1.amazonaws.com/adhaahama-3-final-1628504664qwgd6.pdf' },
    ],
};

const maxItemsPerRow = 6; // Set the maximum number of items per row

years.forEach((year) => {
    const yearCard = document.createElement('div');
    yearCard.classList.add('year-card');

    if (pdfData[year] && pdfData[year].length > 0) {
        pdfData[year].forEach((pdf) => {
            const pdfsContainer = document.createElement('div');
            pdfsContainer.classList.add('pdf-card');

            const pdfLogo = document.createElement('img');
            pdfLogo.src = pdf.imageUrl;
            pdfLogo.alt = pdf.name;
            pdfLogo.classList.add('pdf-logo');
            pdfsContainer.appendChild(pdfLogo);

            const pdfInfo = document.createElement('div');
            pdfInfo.classList.add('pdf-info');

            const pdfTitle = document.createElement('h3');
            pdfTitle.innerText = pdf.name;

            const pdfYear = document.createElement('p');
            pdfYear.innerText = year;

            pdfInfo.appendChild(pdfTitle);
            pdfInfo.appendChild(pdfYear);
            pdfsContainer.appendChild(pdfInfo);

            pdfsContainer.addEventListener('click', () => {
                window.open(pdf.pdfUrl, '_blank');
            });

            yearCard.appendChild(pdfsContainer);
        });
    }

    yearContainer.appendChild(yearCard);
});

// Calculate the number of rows based on the number of items and the maximum items per row
const numRows = Math.ceil(years.length / maxItemsPerRow);
yearContainer.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;