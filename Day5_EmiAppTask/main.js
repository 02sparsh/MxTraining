function emicalc()
{
    var principalamt=document.getElementById("principal").value;
    var rate=document.getElementById("interest").value/1200;
    var months=document.getElementById("time").value;
    var funcrate=1+rate;
    var cmpdnum=Math.pow(funcrate,months);
    var cmpddeno=Math.pow(funcrate,months)-1;
    var totalint=principalamt*rate*(cmpdnum/cmpddeno);
    var totalamt=parseInt(totalint*months);
    console.log(totalint);
    console.log(totalamt);

    document.getElementById('totamt').innerHTML=totalamt;
    document.getElementById('totint').innerHTML=totalint;
}
function yearly()
{
    var principalamt=document.getElementById("principal").value;
    var rate=document.getElementById("interest").value/100;
    var months=document.getElementById("time").value/12;
    var funcrate=1+rate;
    var cmpdnum=Math.pow(funcrate,months);
    var cmpddeno=Math.pow(funcrate,months)-1;
    var totalint=principalamt*rate*(cmpdnum/cmpddeno);
    var totalamt=parseInt(totalint*months);
    
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('body').appendChild(table);
    
    //Creation of Table headings
    var row_1 = document.createElement('tr');
    var heading_1 = document.createElement('th');
    heading_1.innerHTML = "Year";
    var heading_2 = document.createElement('th');
    heading_2.innerHTML = "Paid";
    var heading_3 = document.createElement('th');
    heading_3.innerHTML = "Balance Amount";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);


    // Population of table
    var bal=parseInt(totalamt);
    var pay=parseInt(totalamt/months);
    for(var i=1;i<=months;i++)
    {
        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = i;
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML = pay;
        let row_2_data_3 = document.createElement('td');
        row_2_data_3.innerHTML = bal;
        bal=bal-pay;
        
        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        tbody.appendChild(row_2);
    }
}
function monthly()
{
    var principalamt=document.getElementById("principal").value;
    var rate=document.getElementById("interest").value/1200;
    var months=document.getElementById("time").value;
    var funcrate=1+rate;
    var cmpdnum=Math.pow(funcrate,months);
    var cmpddeno=Math.pow(funcrate,months)-1;
    var totalint=principalamt*rate*(cmpdnum/cmpddeno);
    var totalamt=parseInt(totalint*months);
    
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('body').appendChild(table);
    
    //Creation of Table headings
    var row_1 = document.createElement('tr');
    var heading_1 = document.createElement('th');
    heading_1.innerHTML = "Year";
    var heading_2 = document.createElement('th');
    heading_2.innerHTML = "Paid";
    var heading_3 = document.createElement('th');
    heading_3.innerHTML = "Balance Amount";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);


    // Population of table
    var bal=parseInt(totalamt);
    var pay=parseInt(totalamt/months);
    for(var i=1;i<=months;i++)
    {
        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = i;
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML = pay;
        let row_2_data_3 = document.createElement('td');
        row_2_data_3.innerHTML = bal;
        bal=bal-pay;
        
        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        tbody.appendChild(row_2);
    }
}