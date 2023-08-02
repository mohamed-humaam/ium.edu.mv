// Function to create staff cards
function createStaffCards(staffData, containerId) {
    const staffContainer = document.getElementById(containerId);
  
    staffData.forEach((staff) => {
      const card = document.createElement("div");
      card.classList.add("staff-card");
  
      const image = document.createElement("img");
      image.src = staff.photo;
      image.alt = staff.name;
      card.appendChild(image);
  
      const name = document.createElement("div");
      name.classList.add("staff-name");
      name.textContent = staff.name;
      card.appendChild(name);
  
      const occupation = document.createElement("div");
      occupation.classList.add("staff-occupation");
      occupation.textContent = staff.occupation;
      card.appendChild(occupation);
  
      staffContainer.appendChild(card);
    });
  }
  
  // Call the function to populate the staff cards
  createStaffCards(CPS_Admin, "cpsAdmin");
  createStaffCards(CPS_Academic, "cpsAcademic");