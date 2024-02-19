"use strict";
var amount = document.getElementById('amount').value
var button = document.getElementById('refresh')
var results = document.getElementById('results')
button.addEventListener("click", function() { 
    var out = ""
    out += "10% от суммы составляют: " + "<br />\n"
    out += "90% от суммы составляют: " + amount
    results.innerHTML = out
})
