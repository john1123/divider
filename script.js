"use strict";
document.getElementById("amount").focus()
const btn = document.getElementsByTagName("input")[1];

btn.addEventListener("click", function() { 
    var amnt = document.getElementById('amount').value;
    var results = document.getElementById('results');
    var out = "";
    out += "10% от суммы составляют: " + (10 * amnt / 100) + "<br />\n";
    out += "90% от суммы составляют: " + (90 * amnt / 100);
    results.innerHTML = out;
    console.log(amnt);
})
