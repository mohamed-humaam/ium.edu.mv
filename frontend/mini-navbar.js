Vue.component('mini-navbar', {
    template: `
      <section class="mini-navbar">
        <div class="left-side">
          <a href="mailto:info@ium.edu.mv"><i class="fa-solid fa-envelope"></i>info@ium.edu.mv</a>
          <a href="tel:+9603022100"><i class="fa fa-phone"></i>+960 302-2100</a>
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
        </div>
        <div class="right-side">
          <a href="https://drive.google.com/drive/folders/13nZNdQxTwnGwCr0TPtQXhPPflkgdowqK">Timetable</a>
          <a href="https://moodle.ium.edu.mv/login/index.php">Moodle</a>
          <a href="https://isims.ium.edu.mv/login">ISIMS</a>
          <a href="https://students.ium.edu.mv/en/login" class="apply-button">Apply NOW</a>
        </div>
      </section>
    `
  });

  new Vue({
    el: '#mini-navbar'
  });