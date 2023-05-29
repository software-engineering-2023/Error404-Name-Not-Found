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
//TODO
  // transactions_response.push({
  //   title: "Transfer",
  //   date: new Date().toISOString().slice(0, 10),
  //   amount: -amount,
  //   bankOrCredit: "Bank",
  //   type: "briefcase",
  // });
  alert("Transfer Done!");
}

function toggleAmountInput(amountId, checked) {
  document.getElementById(amountId).disabled = !checked;
}

function makePayment() {
  var gasChecked = document.getElementById("gasCheck").checked;
  var electricityChecked =
    document.getElementById("electricityCheck").checked;
  var waterChecked = document.getElementById("waterCheck").checked;
  var phoneChecked = document.getElementById("phoneCheck").checked;

  let outOfBalance = false;
  let alertMessage = "Not enough balance for: ";
  if (gasChecked) {
    var gasAmount = document.getElementById("gasAmount").value;
    // Process the payment for gas
    if (balance < gasAmount) {
      outOfBalance = true;
      alertMessage += "Gas, ";
    }
    else
    {
      balance -= gasAmount;
      setBalance();
    }
  }

  if (electricityChecked) {
    var electricityAmount =
      document.getElementById("electricityAmount").value;
    
    if (balance < electricityAmount) {
      outOfBalance = true;
      alertMessage += "Electricity, ";
    }
    else
    {
      balance -= electricityAmount;
      setBalance();
    }
  }

  if (waterChecked) {
    var waterAmount = document.getElementById("waterAmount").value;
    
    if (balance < waterAmount) {
      outOfBalance = true;
      alertMessage += "Water, ";
    }
    else
    {
      balance -= waterAmount;
      setBalance();
    }
  }

  if (phoneChecked) {
    var phoneAmount = document.getElementById("phoneAmount").value;
    
    if (balance < phoneAmount) {
      outOfBalance = true;
      alertMessage += "Phone, ";
    }
    else
    {
      balance -= phoneAmount;
      setBalance();
    }
  }
  if (outOfBalance) {
    alert(alertMessage.substring(0, alertMessage.length - 2) + "!");
    return;
  }
}


function lostCreditHandler(){
  let lostCredit = document.getElementById("cardStatusLost").checked;
  let stolenCredit = document.getElementById("cardStatusStolen").checked;

  if(lostCredit){
    alert("Your card has been lost! New one will be arriving soon...");
  }
  else if(stolenCredit){
    alert("Your card has been stolen! Your card will be dectivated!\nNew one will be arriving soon...");
  }
}

function setReminders(){
  var gasChecked = document.getElementById("gasReminder").checked;
  var electricityChecked =
    document.getElementById("electricityReminder").checked;
  var waterChecked = document.getElementById("waterReminder").checked;
  var phoneChecked = document.getElementById("phoneReminder").checked;

  let outOfBalance = false;
  let alertMessage = "Not enough balance for: ";
  if (gasChecked) {
    var gasAmount = document.getElementById("gasReminderAmount").value;
    
    setTimeout(function() {
      notifyMe("Gas Bill", "Your gas bill is due!");
      clearTimeout();
    }, gasAmount * 1000);
  }
  if (electricityChecked) {
    var electricityAmount =
      document.getElementById("electricityReminderAmount").value;
    
    setTimeout(function() {
      notifyMe("Electricity Bill", "Your electricity bill is due!");
      clearTimeout();
    }, electricityAmount * 1000);
  }

  if (waterChecked) {
    var waterAmount = document.getElementById("waterReminderAmount").value;
    
    setTimeout(function() {
      notifyMe("Water Bill", "Your water bill is due!");
      clearTimeout();
    }, waterAmount * 1000);
  }

  if (phoneChecked) {
    var phoneAmount = document.getElementById("phoneReminderAmount").value;
    
    setTimeout(function() {
      notifyMe("Phone Bill", "Your Phone bill is due!");
      clearTimeout();
    }, phoneAmount * 1000);
  }
}