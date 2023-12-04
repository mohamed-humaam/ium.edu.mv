// Content for the logo
const logoContent = `
    <p>The logo of Islamic University of Maldives (IUM) includes several key symbols representative of and drawing inspiration from the Maldivian history, traditions, and our religion; Islam. The central element of the logo is an open book symbolizing the Qur’an. It is indicative of the fact that the basis of all knowledge and true enlightenment comes from the Qur’an. The Qur’an also encourages the pursuit of knowledge.</p>
    <img src="./Images/Logo/logo.svg" alt="Qur'an Image">

        <div class="logo-description">
        <div class="logo-item">
            <img src="./Images/Logo/rope.svg" alt="Rope Image">
            <p>The intertwined rope represents Maldivian workmanship and is symbolic of national unity, strength, and confluence.</p>
        </div>
        <div class="logo-item">
            <img src="./Images/Logo/quran-symbol.svg" alt="Minaret Image">
            <p>The symbol of Qur’an is encompassed in a circle representing the Minaret, a key Islamic landmark in Maldives and an important symbol of Maldivian Islamic national identity. The circle representing the Minaret is indicative of continuity of human civilization and Islamic Ummah.</p>
        </div>
        <div class="logo-item">
            <img src="./Images/Logo/islamic-star.svg" alt="Islamic Star Image">
            <p>The Islamic star is symbolic of Islamic faith, identity, and enlightenment.</p>
        </div>
        </div>
`;

// Add the logo content to the page
const logoDescription = document.querySelector('.logo-description');
logoDescription.innerHTML = logoContent;
