/// -------------------------- STATES --------------------------
let balance = localStorage.getItem("balance")
  ? Number(localStorage.getItem("balance"))
  : 100;
let creditScore = localStorage.getItem("creditScore")
  ? Number(localStorage.getItem("creditScore"))
  : 250;
let creditFees = localStorage.getItem("creditFees")
  ? Number(localStorage.getItem("creditFees"))
  : 100;

let creditApplications = localStorage.getItem("creditApplications")
  ? JSON.parse(localStorage.getItem("creditApplications"))
  : [];
let carLoanApplications = localStorage.getItem("carLoanApplications")
  ? JSON.parse(localStorage.getItem("carLoanApplications"))
  : [];
let personalLoanApplications = localStorage.getItem("personalLoanApplications")
  ? JSON.parse(localStorage.getItem("personalLoanApplications"))
  : [
    {
      username: "Transaction 1",
      amount: -1000,
      type: "Bank",
      type: "briefcase",
    },
    {
      title: "Transaction 2",
      date: "2022-01-01",
      bankOrCredit: "credit",
      amount: 200,
      type: "exchange",
    },
  ];

let creditAccepted = localStorage.getItem("creditAccepted")
  ? JSON.parse(localStorage.getItem("creditAccepted"))
  : [1];
let carLoanAccepted = localStorage.getItem("carLoanAccepted")
  ? JSON.parse(localStorage.getItem("carLoanAccepted"))
  : [];
let personalLoanAccepted = localStorage.getItem("personalLoanAccepted")
  ? JSON.parse(localStorage.getItem("personalLoanAccepted"))
  : [];

let transactions_response = localStorage.getItem("transactions_response")
  ? JSON.parse(localStorage.getItem("transactions_response"))
  : [
      {
        title: "Transaction 1",
        date: "2021-01-01",
        amount: -1000,
        bankOrCredit: "Bank",
        type: "briefcase",
      },
      {
        title: "Transaction 2",
        date: "2022-01-01",
        bankOrCredit: "credit",
        amount: 200,
        type: "exchange",
      },
      {
        title: "Transaction 1",
        date: "2021-01-01",
        amount: -1000,
        bankOrCredit: "Bank",
        type: "briefcase",
      },
      {
        title: "Transaction 2",
        date: "2022-01-01",
        bankOrCredit: "credit",
        amount: 200,
        type: "exchange",
      },
      {
        title: "Transaction 1",
        date: "2021-01-01",
        amount: -1000,
        bankOrCredit: "Bank",
        type: "briefcase",
      },
      {
        title: "Transaction 2",
        date: "2022-01-01",
        bankOrCredit: "credit",
        amount: 200,
        type: "exchange",
      },
      {
        title: "Transaction 1",
        date: "2021-01-01",
        amount: -1000,
        bankOrCredit: "Bank",
        type: "briefcase",
      },
      {
        title: "Transaction 2",
        date: "2022-01-01",
        bankOrCredit: "credit",
        amount: 200,
        type: "exchange",
      },
      {
        title: "Transaction 1",
        date: "2021-01-01",
        amount: -1000,
        bankOrCredit: "Bank",
        type: "briefcase",
      },
      {
        title: "Transaction 2",
        date: "2022-01-01",
        bankOrCredit: "credit",
        amount: 200,
        type: "exchange",
      },
      {
        title: "Transaction 1",
        date: "2021-01-01",
        amount: -1000,
        bankOrCredit: "Bank",
        type: "briefcase",
      },
      {
        title: "Transaction 2",
        date: "2022-01-01",
        bankOrCredit: "credit",
        amount: 200,
        type: "exchange",
      },
      {
        title: "Transaction 1",
        date: "2021-01-01",
        amount: -1000,
        bankOrCredit: "Bank",
        type: "briefcase",
      },
      {
        title: "Transaction 2",
        date: "2022-01-01",
        bankOrCredit: "credit",
        amount: 200,
        type: "exchange",
      },
      {
        title: "Transaction 1",
        date: "2021-01-01",
        amount: -1000,
        bankOrCredit: "Bank",
        type: "briefcase",
      },
      {
        title: "Transaction 2",
        date: "2022-01-01",
        bankOrCredit: "credit",
        amount: 200,
        type: "exchange",
      },
      {
        title: "Transaction 1",
        date: "2021-01-01",
        amount: -1000,
        bankOrCredit: "Bank",
        type: "briefcase",
      },
      {
        title: "Transaction 2",
        date: "2022-01-01",
        bankOrCredit: "credit",
        amount: 200,
        type: "exchange",
      },
      {
        title: "Transaction 1",
        date: "2021-01-01",
        amount: -1000,
        bankOrCredit: "Bank",
        type: "briefcase",
      },
      {
        title: "Transaction 2",
        date: "2022-01-01",
        bankOrCredit: "credit",
        amount: 200,
        type: "exchange",
      },
      {
        title: "Transaction 1",
        date: "2021-01-01",
        amount: -1000,
        bankOrCredit: "Bank",
        type: "briefcase",
      },
      {
        title: "Transaction 2",
        date: "2022-01-01",
        bankOrCredit: "credit",
        amount: 200,
        type: "exchange",
      },
    ];


function setBalance() {
  localStorage.setItem("balance", balance);
  const balanceSpans = document.getElementsByClassName("balance");
  if (balanceSpans) {
    for (let i = 0; i < balanceSpans.length; i++) {
      balanceSpans[i].innerHTML = balance;
    }
  }
}

function setCreditScore() {
  localStorage.setItem("creditScore", creditScore);
  const creditSpans = document.getElementsByClassName("creditScore");
  if (creditSpans) {
    for (let i = 0; i < creditSpans.length; i++) {
      creditSpans[i].innerHTML = creditScore;
    }
  }
}
function setCreditFees() {
  localStorage.setItem("creditFees", creditFees);
  const creditFeesSpans = document.getElementsByClassName("creditFees");
  if (creditFeesSpans) {
    for (let i = 0; i < creditFeesSpans.length; i++) {
      creditFeesSpans[i].innerHTML = creditFees;
    }
  }
}
