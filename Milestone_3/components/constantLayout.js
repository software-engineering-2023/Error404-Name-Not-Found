const navbar = document.querySelector('nav');
const footer = document.querySelector('footer');

let creditApplications = [];
let carLoanApplications = [];
let personalLoanApplications = [];

let creditAccepted = [];
let carLoanAccepted = [];
let personalLoanAccepted = [];

if (creditAccepted.length > 0){
  //TODO: Change score to be dynamic
  document.getElementById('creditCardP').innerHTML = "Already have a credit card!<br>Credit-Score: 750";
  document.getElementById('creditCardBtn').innerHTML= /*html*/`
  <a
  type="button"
  data-toggle="modal"
  data-target="#redeemModal"
  data-whatever="@mdo"
  style="color: #fff;"

  >
  Redeem
  </a>
  `;  
}
 
function CreditCardApplication(){
  const username = document.getElementById('cardName').value;
  if (!username){
    alert("Input Missing!");
    return;
  }
  creditApplications.push(username);
  console.log(creditApplications);
}

function CarLoanApplication(){
  const value = document.getElementById('carLoanValue').value;
  const dealer = document.getElementById('carDealer').value;
  if (!value || !dealer){
    alert("Input Missing!");
    return;
  }
  carLoanApplications.push({"value": value, "dealer":dealer, "username": "user"});
  console.log(carLoanApplications);
}

function PersonalLoanApplication(){
  const value = document.getElementById('personalLoanValue').value;
  const reason = document.getElementById('loanReason').value;
  if (!value || !reason){
    alert("Input Missing!");
    return;
  }
  personalLoanApplications.push({"value": value, "reason":reason, "username": "user"});
  console.log(personalLoanApplications);
}



const creditCardModal = /*html*/`
<div class="modal fade" id="creditCardModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Credit Card Application</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
          <div class="form-group">
            <label for="cardName" class="col-form-label">Name on Card:</label>
            <input type="text" class="form-control" id="cardName">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="CreditCardApplication()">Apply</button>
      </div>
        
    </div>
  </div>
</div>
`;

const carLoanModal = /*html*/`
<div class="modal fade" id="carLoanModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Car Loan Application</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
      <div class="form-group">
        <label for="carLoanValue" class="col-form-label">Loan Value:</label>
        <input type="number" class="form-control" id="carLoanValue">
      </div>
      <div class="form-group">
        <label for="carDealer" class="col-form-label">Car Dealer:</label>
        <input type="text" class="form-control" id="carDealer">
      </div>
    </form>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="CarLoanApplication()">Apply</button>
  </div>
    </div>
  </div>
</div>
`;

const personalLoanModal = /*html*/`
<div class="modal fade" id="personalLoanModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Personal Loan Application</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
      <div class="form-group">
        <label for="personalLoanValue" class="col-form-label">Loan Value:</label>
        <input type="number" class="form-control" id="personalLoanValue">
      </div>
      <div class="form-group">
        <label for="loanReason" class="col-form-label">Loan Reason:</label>
        <input type="text" class="form-control" id="loanReason">
      </div>
    </form>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="PersonalLoanApplication()">Apply</button>
  </div>
    </div>
  </div>
</div>
`;


navbar.innerHTML = /*html*/`
<div class="logo"><a href="index.html"><img src="images/logo.png"></a></div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mg-auto">
        <li class="nav-item">
        <a class="nav-link" href="home.html">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="about.html">About</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="services.html">Services</a>
        </li>

        <li class="nav-item">
        <a class="nav-link" href="complaints.html">Complaints</a>
        </li>
    </ul>
    <span class="navbar-text">Balance: 100</span>
</div>
` + creditCardModal + carLoanModal + personalLoanModal;
//TODO: make balance dynamic

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