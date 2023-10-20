// Function to load student representatives
function loadStudentRepresentatives() {
  const representativesList = document.getElementById('representatives-list');
  studentRepresentatives.forEach(rep => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<img src="${rep.photo}" alt="${rep.name}"><br>${rep.name} - ${rep.position}`;
      representativesList.appendChild(listItem);
  });
}


// Function to load events as cards with links
function loadEvents() {
  const eventsList = document.getElementById('events-list');
  events.forEach(event => {
      const eventCard = document.createElement('div');
      eventCard.className = 'event-card';
      eventCard.innerHTML = `
          <h3>${event.title}</h3>
          <p>Date: ${event.date}</p>
          <a href="${event.link}" target="_blank">Learn More</a>
      `;
      eventsList.appendChild(eventCard);
  });
}

// Load student representatives and events
loadStudentRepresentatives();
loadEvents();