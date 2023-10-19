// JavaScript to extract staff name from the URL
        const h2 = document.getElementById("staffName");
        const staffInfo = document.getElementById("staffInfo");

        // Get the query parameter from the URL
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const staffName = urlParams.get("staff");

        // Function to find staff data by name
        function findStaffByName(name) {
            return KEMS_Academic.find(staff => staff.name === name);
        }

        // Set the staff name in the <h2> tag
        if (staffName) {
            h2.textContent = staffName;
            
            // Find the staff data
            const staffData = findStaffByName(staffName);

            if (staffData) {
                // Populate staff information in the respective containers
                document.getElementById("photo").innerHTML = `<img src="${staffData.photo}" alt="${staffName}">`;
                document.getElementById("occupation").textContent = staffData.occupation;
                document.getElementById("contact").textContent = staffData.contact;
                document.getElementById("academicQualifications").textContent = staffData.academic_qualifications.join('\n');
                document.getElementById("profile").textContent = staffData.profile;
                document.getElementById("specialization").textContent = staffData.specialization.join('\n');
                
                // Research (completed and ongoing)
                const researchHtml = `<h3>Research</h3>`;
                if (staffData.research.completed.length > 0) {
                    researchHtml += `<h4>Completed</h4>`;
                    staffData.research.completed.forEach(item => {
                        researchHtml += `<p>${item.year}: ${item.title}</p>`;
                    });
                }
                if (staffData.research.ongoing.length > 0) {
                    researchHtml += `<h4>Ongoing</h4>`;
                    staffData.research.ongoing.forEach(item => {
                        researchHtml += `<p>${item.year}: ${item.title}</p>`;
                    });
                }
                document.getElementById("research").innerHTML = researchHtml;

                // Awards
                const awardsHtml = `<h3>Awards</h3>`;
                staffData.awards.forEach(award => {
                    awardsHtml += `<p>${award.date}: ${award.award} (${award.organization})</p>`;
                });
                document.getElementById("awards").innerHTML = awardsHtml;

                // Publications
                const publicationsHtml = `<h3>Publications</h3>`;
                staffData.publications.forEach(publication => {
                    publicationsHtml += `<p>${publication.year}: ${publication.title}</p>`;
                });
                document.getElementById("publications").innerHTML = publicationsHtml;
            }
        }