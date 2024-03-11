document.getElementById("amount").focus()
const btn = document.getElementsByTagName("input")[1];

btn.addEventListener("click", function() { 
    const amnt = document.getElementById('amount').value;
    const results = document.getElementById('results');
    let out = "";
    out += "10% Володя: " + (10 * amnt / 100) + "<br />\n";
    out += "10% Фонд Сергея Михеева: " + (10 * amnt / 100) + "<br />\n";
    out += "60% Инна: " + (60 * amnt / 100) + "<br />\n";
    out += "20% На личные нужды: " + (20 * amnt / 100);
    results.innerHTML = out;
})
