document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");

    // The content you provided
    const historyContent = `
        
        <h2>Profile & History</h2>
        <div class="history">
        <div class="image-container">
            <img src="./Images/History/old-building.jpg" alt="Previous Building">
        </div>
        <p>Islamic University of Maldives, formerly known as the College of Islamic Studies (Kulliyah Al- Dhirasaathil Islamiyah) became a full-fledged higher education institution on 21st February 2004 (1st Muharram 1425). This change in status was initiated with the intention to widen the scope of Islamic education provided to Maldivian students who were desperately seeking Islamic education within the country without having to travel abroad.</p>
        </div>
        
        <h3>Upgrading to Islamic University</h3>
        <div class="upgrade">
        <p>With the new developments, College of Islamic Studies continued to offer a number of academic programs with special focus on diploma and degrees in areas such as Quranic Studies, Arabic language, Islamic Studies and Sharia and Law until it was upgraded to the first ever Islamic University of Maldives (IUM) by a presidential decree in 2015 to realize one of the highest priorities of the current government; to promote and to protect the Islamic faith in the Maldives.</p>
        <div class="image-container">
            <img src="./Images/History/current-building.jpg" alt="Current Building">
        </div>
        </div>

        <h3>Integration of Research and Innovation</h3>
        <div class="research">
        <div class="image-container">
            <img src="./Images/History/inside-ium.jpg" alt="Research and Innovation">
        </div>
        <p>With the change in status, College of Islamic Studies adopted an approach to teaching which focused mainly on integration of research and innovation. The purpose was to promote higher level of thinking informed by research to ensure provision of holistic understanding of Islam considered from varying perspectives and contexts.</p>
        </div>

        <!-- Add more headings, images, and content here -->
    `;

    content.innerHTML = historyContent;
});
