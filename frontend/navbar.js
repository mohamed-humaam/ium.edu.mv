Vue.component('custom-navbar', {
    template: `
      <section class="navbar">
        <div class="navbar-logo">
          <a href="index.html"><img src="./Images/Logo/ium_logo_black_text.png" alt="Logo"></a>
        </div>
        <ul class="navbar-menu">
          <li><a href="">IUM</a>
            <ul class="dropdown-menu">
              <li><a href="#">IUM <i class="fa-solid fa-chevron-right"></i></a>
                <ul class="sidebar-menu">
                  <li><a href="history.html">History</a></li>
                  <li><a href="logo.html">Logo</a></li>
                  <li><a href="vision.html">Vision & Mission</a></li>
                  <li><a href="philosophy.html">Philosophy</a></li>
                  <li><a href="values.html">Core Values</a></li>
                  <li><a href="responsibilities.html">Objectives & Responsibilities</a></li>
                </ul>
              </li>
              <li><a href="#">Kulliyyah & Centers <i class="fa-solid fa-chevron-right"></i></a>
                <ul class="sidebar-menu">
                  <li><a href="ksl.html">Kulliyyah of Shari’ah and Law</a></li>
                  <li><a href="ked.html">Kulliyyah of Education</a></li>
                  <li><a href="kems.html">Kulliyyah of Economics and Management Studies</a></li>
                  <li><a href="kirk.html">Kulliyyah of Islamic Revealed Knowledge and Human Sciences</a></li>
                  <li><a href="kqs.html">Kulliyah of Quran & Sunnah</a></li>
                  <li><a href="kal.html">Kulliyyah of Arabic Language</a></li>
                  <li><a href="cce.html">Centre For Continuing Education</a></li>
                  <li><a href="cps.html">Centre For Postgraduate Studies</a></li>
                  <li><a href="crp.html">Centre For Research and Publications</a></li>
                </ul>
              </li>
              <li><a href="majilis.html">IUM Majilis</i></a></li>
              <li><a href="#">Committees <i class="fa-solid fa-chevron-right"></i></a>
                <ul class="sidebar-menu">
                  <li><a href="tmt.html">Top Management</a></li>
                  <li><a href="smt.html">Senior Management</a></li>
                  <li><a href="ab.html">Academic Board</a></li>
                  <li><a href="dc.html">Dean's Committee</a></li>
                  <li><a href="cc.html">Curriculumn Committee</a></li>
                  <li><a href="hrmd.html">HRMD Committee</a></li>
                </ul>
              </li>
              <li><a href="collaborators.html">Academic Collaborators</a></li>
              <li><a href="staff.html">Staff</a></li>
              <li><a href="contact-us.html">Contact Us</a></li>
            </ul>
          </li>
          <li><a href="#">Programmes</a>
            <ul class="dropdown-menu">
              <li><a href="phd-courses.html">Post Graduate</a></li>
              <li><a href="undergrad-courses.html">Undergraduate</a></li>
              <li><a href="certificate-courses.html">Certificate & Diploma</a></li>
              <li><a href="scholarship-offers.html">Scholarship Opportunities</a></li>
            </ul>
          </li>
          <li><a href="#">Students</a>
            <ul class="dropdown-menu">
              <li><a href="sa.html">Student Affairs</a></li>
              <li><a href="dos.html">Dean of Students</a></li>
              <li><a href="su.html">Student Union</a></li>
              <li><a href="alumni.html">Alumni</a></li>
              <li><a href="law-society.html">IUM Law Society</a></li>
              <li><a href="top-achievers.html">Top Achievers</a></li>
            </ul>
          </li>
          <li><a href="#">Publications</a>
            <ul class="dropdown-menu">
              <li><a href="gazette.html">Gazette</a></li>
              <li><a href="procurement.html">Public Procurement</a></li>
              <li><a href="Al-Manhaj.html">Al-Manhaj</a></li>
              <li><a href="Adhaahama.html">Adhaahama</a></li>
              <li><a href="research.html">Research</a></li>
              <li><a href="https://icia.mv/">ICIA</a></li>
              <li><a href="rules-and-regulations.html">Rules & Regulations</a></li>
              <li><a href="annual-report.html">Annual Reports</a></li>
              <li><a href="convocation.html">Convocations</a></li>
            </ul>
          </li>
                <div id="search-form">
                    <custom-search-form></custom-search-form>
                </div>
        </ul>
      </section>
    `
  });

  new Vue({
    el: '#navbar'
  });