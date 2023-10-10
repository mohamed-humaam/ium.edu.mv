document.addEventListener("DOMContentLoaded", function () {
    // Define the content to be inserted
    const content = `
        <div class="philosophy-icon">
            <img src="icon.png" alt="Icon">
        </div>
        <div class="philosophy-text">
            <p>The IUM was established to serve and protect Islam and its principles in Maldivian society and the Ummah in general...</p>
        </div>
    `;
    
    // Insert the content into the div with id "philosophy-content"
    const philosophyContent = document.getElementById("philosophy-content");
    philosophyContent.innerHTML = content;
});
