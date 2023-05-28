function CreditCardApplication() {
  const username = document.getElementById("cardName").value;
  if (!username) {
    alert("Input Missing!");
    return;
  }
  creditApplications.push(username);
  console.log(creditApplications);
}

function CarLoanApplication() {
  const value = document.getElementById("carLoanValue").value;
  const dealer = document.getElementById("carDealer").value;
  if (!value || !dealer) {
    alert("Input Missing!");
    return;
  }
  carLoanApplications.push({ value: value, dealer: dealer, username: "user" });
  console.log(carLoanApplications);
}

function PersonalLoanApplication() {
  const value = document.getElementById("personalLoanValue").value;
  const reason = document.getElementById("loanReason").value;
  if (!value || !reason) {
    alert("Input Missing!");
    return;
  }
  personalLoanApplications.push({
    value: value,
    reason: reason,
    username: "user",
  });
  console.log(personalLoanApplications);
}

function PayFullCredit() {
  if (balance < creditFees) {
    alert("Not Enough Balance!");
    return;
  }
  balance -= creditFees;
  creditFees = 0;
  setBalance();
}
function PayPartialCredit() {
  const amount = document.getElementById("PayCreditAmount").value;
  if (balance < amount) {
    alert("Not Enough Balance!");
    return;
  }
  balance -= amount;
  creditFees -= amount;
  setBalance();
}
function Transfer() {
  const amount = document.getElementById("TransferAmount").value;
  if (!amount) {
    alert("No Transfer amount entered!");
    return;
  }
  if (balance < amount) {
    alert("Not enough balance!");
    return;
  }
  balance -= amount;
  setBalance();
  alert("Transfer Done!");
}
