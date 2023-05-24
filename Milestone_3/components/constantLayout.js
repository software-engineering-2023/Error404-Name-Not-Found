const navbar = document.querySelector('nav');
const footer = document.querySelector('footer');

navbar.innerHTML = /*html*/`
<div class="logo"><a href="index.html"><img src="images/logo.png"></a></div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item">
        <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="about.html">About</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="services.html">Services</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="team.html">Team</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="complaints.html">Complaints</a>
        </li>
    </ul>
</div>
`;


footer.innerHTML = /*html*/`
<div class="footer_section layout_padding margin_top_90">
<div class="container">
  <div class="row">
    <div class="col-lg-3 col-sm-6">
      <h4 class="about_text">About Financial</h4>
      <div class="location_text"><img src="images/map-icon.png"><span class="padding_left_15">Locations</span></div>
      <div class="location_text"><img src="images/call-icon.png"><span class="padding_left_15">+01 9876543210</span></div>
      <div class="location_text"><img src="images/mail-icon.png"><span class="padding_left_15">demo@gmail.com</span></div>
    </div>
    <div class="col-lg-3 col-sm-6">
      <h4 class="about_text">About Financial</h4>
      <p class="dolor_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
    </div>
    <div class="col-lg-3 col-sm-6">
      <h4 class="about_text">Instagram</h4>
      <div class="footer_images">
        <div class="footer_images_left">
          <div class="image_12"><img src="images/img-12.png"></div>
          <div class="image_12"><img src="images/img-12.png"></div>
          <div class="image_12"><img src="images/img-12.png"></div>
        </div>
        <div class="footer_images_right">
          <div class="image_12"><img src="images/img-12.png"></div>
          <div class="image_12"><img src="images/img-12.png"></div>
          <div class="image_12"><img src="images/img-12.png"></div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-sm-6">
      <h4 class="about_text">Newsletter</h4>
      <input type="text" class="mail_text" placeholder="Enter your email" name="Enter your email">
      <div class="subscribe_bt"><a href="#">Subscribe</a></div>
      <div class="footer_social_icon">
        <ul>
          <li><a href="#"><img src="images/fb-icon1.png"></a></li>
          <li><a href="#"><img src="images/twitter-icon1.png"></a></li>
          <li><a href="#"><img src="images/linkedin-icon1.png"></a></li>
          <li><a href="#"><img src="images/youtub-icon1.png"></a></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- copyright section start -->
  <div class="copyright_section">
    <div class="copyright_text">&copy Copyright 2019 All Right Reserved By <a href="https://html.design">Free html  Templates</a></div>
  </div>
  <!-- copyright section end -->
</div>
</div>
`;