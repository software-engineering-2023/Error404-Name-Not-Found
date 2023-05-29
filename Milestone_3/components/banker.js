function fillLoanTable(){
    let table_header = document.getElementById("personalLoanModalLabel");
    if (table_header) {
        table_header.innerHTML = "Loan Applications";
    }
    let typeHeader = document.getElementById("typeHeader");
    if (table_header) {
        typeHeader.innerHTML = "Type";
    }
    let amountHeader = document.getElementById("amountHeader");
    if (table_header) {
        amountHeader.innerHTML = "Amount";
    }

    let applications_table = document.getElementById("applications_table");
    let applications_table_html = "";
    for (let i = 0; i < loanApplications.length; i++) {
        let type = loanApplications[i]["type"];

        applications_table_html += "<tr>" +
            "<td scope='row'>" +
            '<a type="button" data-toggle="modal" data-target="#userAccount" style="text-decoration: underline !important" onclick="fillUserAccountTable(\'' + loanApplications[i]["username"] +'\')">'
            + loanApplications[i]["username"] +
            "</a>" + "</td>" +
            "<td scope='row'>" + type + "</td>" +
            "<td scope='row'>$ " + loanApplications[i]["amount"] + "</td>" +
            "<td scope='row' class='d-flex justify-content-end align-items-center'>" +
            '<button type="button" class="btn rounded-circle" onclick="acceptLoan(' + i +
            ')"><i style="font-size: 2rem; color: white; padding-block: 0" class="bi bi-check-circle-fill"></i></button>' + 
            '<button type="button" class="btn rounded-circle" onclick="rejectLoan(' + i + 
            ')"><i style="font-size: 2rem; color: white; padding-block: 0" class="bi bi-x-circle-fill"></i></button>' +
            "</td>" +
            "</tr>";
    }
    applications_table.innerHTML = applications_table_html;
}

function acceptLoan(index){
    console.log(index);
    let loan = loanApplications[index];
    loanApplications.splice(index, 1);
    loanAccepted.push(loan);
    setLoanAccepted();
    setLoanApplications();
    fillLoanTable();
}

function rejectLoan(index){
    console.log(index);
    loanApplications.splice(index, 1);
    setLoanApplications();
    fillLoanTable();
}



function fillCreditCardTable(){
    let table_header = document.getElementById("personalLoanModalLabel");
    if (table_header) {
        table_header.innerHTML = "Credit Card Applications";
    }

    let typeHeader = document.getElementById("typeHeader");
    if (table_header) {
        typeHeader.innerHTML = "";
    }
    let amountHeader = document.getElementById("amountHeader");
    if (table_header) {
        amountHeader.innerHTML = "";
    }
    let applications_table = document.getElementById("applications_table");
    let applications_table_html = "";
    for (let i = 0; i < creditApplications.length; i++) {
        let type = creditApplications[i]["type"];

        applications_table_html += "<tr>" +
            "<td scope='row'>"  + creditApplications[i]["username"] + "</td>" +
            "<td scope='row'> </td>" +
            "<td scope='row'>  </td>" +
            "<td scope='row' class='d-flex justify-content-end align-items-center'>" +
            '<button type="button" class="btn rounded-circle" onclick="acceptCredit(' + i +
            ')"><i style="font-size: 2rem; color: white; padding-block: 0" class="bi bi-check-circle-fill"></i></button>' + 
            '<button type="button" class="btn rounded-circle" onclick="rejectCredit(' + i + 
            ')"><i style="font-size: 2rem; color: white; padding-block: 0" class="bi bi-x-circle-fill"></i></button>' +
            "</td>" +
            "</tr>";
    }
    applications_table.innerHTML = applications_table_html;
}

function acceptCredit(index){
    console.log(index);
    let credit = creditApplications[index];
    creditApplications.splice(index, 1);
    creditAccepted.push(credit);
    setCreditAccepted();
    setCreditApplications();
    fillCreditCardTable();
}

function rejectCredit(index){
    console.log(index);
    creditApplications.splice(index, 1);
    setCreditApplications();
    fillCreditCardTable();
}


function fillUserAccountTable(name){
    let table_header = document.getElementById("userAccountLabel");
    if (table_header) {
        table_header.innerHTML = name + "'s Transactions  <img src='https://img.icons8.com/?size=512&id=P1YG1sk94HiB&format=png' width=20px>";
    }
    let transactions_table_html = "";

    for (let i = 0; i < transactions_response.length; i++) {
        let type = transactions_response[i]["type"];
        if (!type) type = "bed";
        // let type = "cutlery";
        var bankOrCredit;
        if (transactions_response[i]["bankOrCredit"] == "credit") {
            bankOrCredit = '<i class="bi bi-credit-card-fill"></i>';
        }
        else {
            bankOrCredit = '<i class="bi bi-bank2"></i>';
        }
        let arrow = transactions_response[i]["amount"] > 0 ? "<span class='fa fa-long-arrow-up mr-1'></span>" : "<span class='fa fa-long-arrow-down mr-1'></span>";
        transactions_table_html += "<tr>" +
            "<td scope='row'> <span class='fa fa-" + type + " mr-1'></span>"  + transactions_response[i]["title"] + "</td>" +
            "<td scope='row'>"  + bankOrCredit + "</td>" +
            "<td class='text-muted'>" + transactions_response[i]["date"] + "</td>" +
            "<td class='d-flex justify-content-end align-items-center'>" + arrow + "$ " + transactions_response[i]["amount"] + "</td>" +
            "</tr>";
    }
    transactions_table.innerHTML = transactions_table_html;   
}