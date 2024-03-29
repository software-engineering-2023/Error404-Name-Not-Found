
const entry_per_page = 10;
var page = 1;
function fillTable(newpage){
    let transactions_table = document.getElementById("transactions_table");
    let transactions_table_html = "";

    for (let i = (page) * entry_per_page; i < ((page+1) * entry_per_page) && i < transactions_response.length; i++) {
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
    let page_number = document.getElementById("page_number");
    const endpage = Math.min((page+1 )* entry_per_page, transactions_response.length);
    page_number.innerHTML = page * entry_per_page + " - " + (endpage) + " of " + transactions_response.length;
    
    page = newpage % (Math.ceil(transactions_response.length/entry_per_page));
    if (page < 0) page = page + Math.ceil(transactions_response.length/entry_per_page);

    setBalance();
    setCreditScore();   

}

function fillTableNext(){
    fillTable(page+1);
    console.log(page);
}

function fillTablePrev(){
    fillTable(page-1);
}

fillTable(page);