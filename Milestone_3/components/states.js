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
  : [
    {
      username: "Malak",
    },
    {
      username: "Habiba",
    },
  ];

let loanApplications = localStorage.getItem("loanApplications")
  ? JSON.parse(localStorage.getItem("loanApplications"))
  : [
    {
      username: "Malak",
      amount: 1000,
      type: "car",
    },
    {
      username: "Habiba",
      amount: 200,
      type: "personal",
    },
    {
      username: "Malak",
      amount: 1000,
      type: "car",
    },
    {
      username: "Habiba",
      amount: 200,
      type: "personal",
    },
    {
      username: "Malak",
      amount: 1000,
      type: "car",
    },
    {
      username: "Habiba",
      amount: 200,
      type: "personal",
    },
    {
      username: "Malak",
      amount: 1000,
      type: "car",
    },
    {
      username: "Habiba",
      amount: 200,
      type: "personal",
    },
    {
      username: "Malak",
      amount: 1000,
      type: "car",
    },
    {
      username: "Habiba",
      amount: 200,
      type: "personal",
    },
    {
      username: "Malak",
      amount: 1000,
      type: "car",
    },
    {
      username: "Habiba",
      amount: 200,
      type: "personal",
    },
    {
      username: "Malak",
      amount: 1000,
      type: "car",
    },
    {
      username: "Habiba",
      amount: 200,
      type: "personal",
    },
  ];

let creditAccepted = localStorage.getItem("creditAccepted")
  ? JSON.parse(localStorage.getItem("creditAccepted"))
  : [];

let loanAccepted = localStorage.getItem("loanAccepted")
  ? JSON.parse(localStorage.getItem("loanAccepted"))
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


let notificationsList = localStorage.getItem("notificationsList") ? JSON.parse(localStorage.getItem("notificationsList")) : 
[
  {
    title: "Loan deadline",
    message: "Your loan deadline is 30-6-2021",
    url: "http://127.0.0.1:5500/Milestone_3/home.html",
    delay: 5000,
  },
  {
    title: "Credit Card Bill deadline",
    message: "Your loan deadline is 31-6-2021",
    url: "http://127.0.0.1:5500/Milestone_3/home.html",
    delay: 10000,
  },
  {
    title: "Your Issue was solved",
    message: "Your issue was solved by our team",
    url: "http://127.0.0.1:5500/Milestone_3/complaints.html",
    delay: 0,
  },
];


let complaintsList = localStorage.getItem("complaintsList") ? JSON.parse(localStorage.getItem("complaintsList")) :
[];



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

function setLoanApplications(){
  localStorage.setItem("loanApplications", JSON.stringify(loanApplications));
}

function setLoanAccepted(){
  localStorage.setItem("loanAccepted", JSON.stringify(loanAccepted));
}

function setCreditApplications(){
  localStorage.setItem("creditApplications", JSON.stringify(creditApplications));
}

function setCreditAccepted(){
  localStorage.setItem("creditAccepted", JSON.stringify(creditAccepted));
}

function setComplaintsList(){
  localStorage.setItem("complaintsList", JSON.stringify(complaintsList));
}