const navbarComponent = /*html*/ `
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
    <span class="navbar-text">Balance: <span class="balance"></span></span>
</div>
`;
const footerComponent = /*html*/ `
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

const creditCardModal = /*html*/ `
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

const carLoanModal = /*html*/ `
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

const personalLoanModal = /*html*/ `
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

const PaycreditCardModal = /*html*/ `
<div class="modal fade" id="PaycreditCardModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <label for="PayCreditAmount" class="col-form-label">Amount to be Paid:</label>
            <input type="number" class="form-control" id="PayCreditAmount">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="PayFullCredit()">Pay All Fees</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="PayPartialCredit()">Pay Selected Amount</button>
      </div>
        
    </div>
  </div>
</div>
`;

const LostCard = /*html*/ ` 
<!-- The Modal -->
<div class="modal fade" id="transferModal" tabindex="-1" role="dialog" aria-labelledby="transferModalLabel" aria-hidden="true">

<div class="modal fade" id="cardStatusModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Card Status</h4>
        <button type="button" class="close" data-dismiss="modal">
          &times;
        </button>
      </div>
<!-- Modal Body -->
<div class="modal-body">
  <form>
    <div class="form-group">
      <label for="cardStatus">Select Card Status:</label><br />
      <div class="form-check-inline">
        <label class="form-check-label">
          <input
            type="radio"
            class="form-check-input"
            name="cardStatus"
            value="lost"
          />
          Lost
        </label>
      </div>
      <div class="form-check-inline">
        <label class="form-check-label">
          <input
            type="radio"
            class="form-check-input"
            name="cardStatus"
            value="stolen"
          />
          Stolen
        </label>
      </div>
    </div>
  </form>
</div>

<!-- Modal Footer -->
<div class="modal-footer">
  <button type="button" class="btn btn-primary" data-dismiss="modal">
    Save
  </button>
</div>
</div> `;

const transferModal = /*html*/ `
<!-- Modal -->
<div class="modal fade" id="transferModal" tabindex="-1" role="dialog" aria-labelledby="transferModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Modal header -->
      <div class="modal-header">
        <h4 class="modal-title" id="transferModalLabel">Transfer Options</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <!-- Transfer options -->
        <div class="form-group">
          <label for="transferOption">Select Transfer Option:</label>
          <select class="form-control" id="transferOption">
            <option value="internal">Internal Transfer</option>
            <option value="domestic">Domestic Transfer</option>
            <option value="international">International Transfer</option>
          </select>
        </div>

        <!-- Requirements -->
        <div id="requirements" style="display: none">
          <h5>Requirements:</h5>
          <div id="internalTransfer" style="display: none">
            <p>Internal Transfer Requirements:</p>
            <div class="form-group">
              <label for="UsernameReciever">Username of Receiver:</label>
              <input
                type="text"
                class="form-control"
                id="UsernameReciever"
              />
            </div>
          </div>
          <div id="domesticTransfer" style="display: none">
            <p>Domestic Transfer Requirements:</p>
            <div class="form-group">
              <label for="BankName">Bank Name:</label>
              <input type="text" class="form-control" id="BankName" />
            </div>
            <div class="form-group">
              <label for="BankBranch">Bank Branch:</label>
              <input type="text" class="form-control" id="BankBranch" />
            </div>
            <div class="form-group">
              <label for="AccountNumber">Account Number:</label>
              <input type="text" class="form-control" id="AccountNumber" />
            </div>
          </div>
          <div id="internationalTransfer" style="display: none">
            <p>International Transfer Requirements:</p>
            <div class="form-group">
              <label for="beneficiaryName">Beneficiary's Name:</label>
              <input
                type="text"
                class="form-control"
                id="beneficiaryName"
              />
            </div>
            <div class="form-group">
              <label for="beneficiaryAccNo"
                >Beneficiary's Bank Account Number:</label
              >
              <input
                type="text"
                class="form-control"
                id="beneficiaryAccNo"
              />
            </div>
            <div class="form-group">
              <label for="SwiftCode">Beneficiary's Bank Swift Code:</label>
              <input type="text" class="form-control" id="SwiftCode" />
            </div>
            <div class="form-group">
              <label for="PurposeofPayment">Purpose of Payment:</label>
              <input
                type="text"
                class="form-control"
                id="PurposeofPayment"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="TransferAmount">Amount:</label>
          <input type="number" class="form-control" id="TransferAmount" />
        </div>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
        >
          Close
        </button>
        <button
          type="button"
          class="btn btn-primary"
          data-dismiss="modal"
          onclick="Transfer()"
        >
          Transfer
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<!-- Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<script>
  // Show requirements based on selected transfer option
  $(document).ready(function() {
    $("#transferOption").change(function() {
      var selectedOption = $(this).val();
      $("#requirements").show();
      $("#internalTransfer").hide();
      $("#domesticTransfer").hide();
      $("#internationalTransfer").hide();

      if (selectedOption === "internal") {
        $("#internalTransfer").show();
      } else if (selectedOption === "domestic") {
        $("#domesticTransfer").show();
      } else if (selectedOption === "international") {
        $("#internationalTransfer").show();
      }
    });
  });
</script>`;
