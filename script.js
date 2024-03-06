document.getElementById("amount").focus()
const btn = document.getElementsByTagName("input")[1];

btn.addEventListener("click", function() { 
    const amnt = document.getElementById('amount').value;
    const results = document.getElementById('results');
    let out = "";
    out += "10% от суммы составляют: " + (10 * amnt / 100) + "<br />\n";
    out += "90% от суммы составляют: " + (90 * amnt / 100);
    results.innerHTML = out;
})
