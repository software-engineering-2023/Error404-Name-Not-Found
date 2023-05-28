const navbar = document.querySelector("nav");
const footer = document.querySelector("footer");

navbar.innerHTML =
  navbarComponent +
  creditCardModal +
  carLoanModal +
  personalLoanModal +
  PaycreditCardModal +
  LostCard +
  transferModal;
footer.innerHTML = footerComponent;

if (creditAccepted.length > 0) {
  //TODO: Change score to be dynamic
  document.getElementById("creditCardP").innerHTML =
    "Already have a credit card!<br>Credit-Score:<span class='creditScore'></span>";
  document.getElementById("creditCardBtn").innerHTML = /*html*/ `
  <a
  type="button"
  data-toggle="modal"
  data-target="#redeemModal"
  data-whatever="@mdo"
  style="color: #fff;"
  onclick="redeemCreditCard()"
  >
  Redeem
  </a>
  `;
}

setBalance();
setCreditScore();
