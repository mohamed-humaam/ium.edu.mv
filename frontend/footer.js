Vue.component('custom-footer', {
    template: `
      <section id="footer">
      <div class="content">

          <span class="blue-back"></span>
          <div class="info">
            <a href="index.html"><img src="./Images/Logo/ium_logo_white_text.png" alt=""></a>

            <div class="address">
              <span><i class="fa-solid fa-building-columns"></i> <p>Islamic University of Maldives - IUM</p> </span>
              <span><i class="fa-solid fa-road"></i> <p>Violet Magu, Henveiru,</p> </span>
              <span><i class="fa-solid fa-tree-city"></i> <p>Male' City, 20037,</p> </span>
              <span><i class="fa-solid fa-earth-asia"></i> <p>Republic of Maldives</p> </span>
              <span><i class="fa-solid fa-phone-volume"></i> <p>302-100</p> </span>
              <span><i class="fa-regular fa-envelope"></i> <p>info@ium.edu.mv</p> </span>
            </div>

          </div>

          <div class="university">
            <h3>University</h3>
            <a href="#">About Us</a>
            <a href="#">Chanellor and Executives</a>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
          </div>
          <div class="links">
            <h3>Media</h3>
            <a href="#">News</a>
            <a href="#">Gallery</a>
            <a href="#">Publications</a>
            <a href="#">Gazette</a>
          </div>
          <div class="top-button">
            <span class="arrow-border">
              <i class="fa-solid fa-arrow-up"></i>
            </span>
          </div>
      </div>
  
      <div class="copyright">
  
          <a href="#" class="twitter-circle">
              <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#" class="facebook-circle">
              <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" class="linkedin-circle">
              <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#" class="instagram-circle">
              <i class="fa-brands fa-instagram"></i>
          </a>
  
          <p> &copy; 2023 - All rights reserved by Islamic University of Maldives</p>
  
          <div class="right-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Condition</a>
              <a href="#">Help & Support</a>
          </div>
  
      </div>
    </section>
    `
  });

  new Vue({
    el: '#footer'
  });