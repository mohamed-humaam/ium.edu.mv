// Generate the news items
function generateNewsItems() {
  const newsCarousel = document.getElementById('news-carousel');

  // Create news items dynamically
  newsData.forEach((news) => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = news.image;

    const content = document.createElement('div');
    content.classList.add('card-content');

    const title = document.createElement('h3');

    // Limit the title length to 20 words
    const words = news.title.split(' ');
    if (words.length > 10) {
      title.textContent = words.slice(0, 10).join(' ') + '...';
    } else {
      title.textContent = news.title;
    }

    content.appendChild(title);

    card.appendChild(image);
    card.appendChild(content);

    newsItem.appendChild(card);

    newsCarousel.appendChild(newsItem);
  });
}

// Call the function to generate news items
generateNewsItems();
// Generate the news items on page load
window.addEventListener('load', generateNewsItems);

// Carousel functionality
const carousel = document.getElementById('news-carousel');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: -300,
    behavior: 'smooth',
  });
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: 300,
    behavior: 'smooth',
  });
});





// JavaScript code to handle popup and close behavior
function verifyCertificate() {
  const certificateNumber = document.getElementById('certificate-number').value;
  const popup = document.getElementById('popup');
  const certificateResult = document.querySelector('.certificate-result');
  const details = document.querySelectorAll('.details');
  const studentName = document.getElementById('student-name');
  const studentID = document.getElementById('student-id');
  const courseName = document.getElementById('course-name');

  // Find the certificate object with the given certificateNumber
  const certificate = certificates.find(cert => cert.certificateNumber === certificateNumber);

  if (certificate) {
      // Certificate is valid
      studentName.textContent = certificate.studentName;
      studentID.textContent = certificate.studentID;
      courseName.textContent = certificate.courseName;

      // Set the message for a valid certificate
      certificateResult.textContent = 'Certificate is valid';
      certificateResult.style.color = 'green';
      popup.classList.add('valid');

      // Show the additional details for a valid certificate
      details.forEach(element => {
          element.style.display = 'block';
      });
  } else {
      // Certificate is invalid
      // Set the message for an invalid certificate
      certificateResult.textContent = 'Certificate is invalid';
      certificateResult.style.color = 'red';
      popup.classList.add('invalid');

      studentName.textContent = '';
      studentID.textContent = '';
      courseName.textContent = '';

      // Hide the additional details for an invalid certificate
      details.forEach(element => {
          element.style.display = 'none';
      });
  }

  popup.style.display = 'block';
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
      closePopup();
  }
});

document.addEventListener('click', function (event) {
  if (event.target === document.getElementById('popup')) {
      closePopup();
  }
});

function closePopup() {
  const popup = document.getElementById('popup');
  // Remove the "valid" and "invalid" classes
  popup.classList.remove('valid', 'invalid');
  popup.style.display = 'none';
}




























  // Scroll to the top of the page when the top button is clicked
  document.querySelector('.top-button').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Open the map on clicking the address
  var addressElement = document.querySelector('.info .address');
  addressElement.addEventListener('click', function() {
    window.open('https://www.google.com/maps?q=Islamic+University+of+Maldives');
  });

  // Dial the phone number on clicking
  var phoneNumberElement = document.querySelector('.info .address span:nth-child(5) p');
  phoneNumberElement.addEventListener('click', function() {
    window.open('tel:302-100');
  });

  // Open email client on clicking the email address
  var emailElement = document.querySelector('.info .address span:last-child p');
  emailElement.addEventListener('click', function() {
    window.location.href = 'mailto:info@ium.edu.mv';
  });
  