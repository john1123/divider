document.getElementById("amount").focus()
const btn = document.getElementsByTagName("input")[1];

btn.addEventListener("click", function() { 
    const amnt = document.getElementById('amount').value;
    const results = document.getElementById('results');
    let out = "";
    out += "10% Володя: " + formatOutput(10 * amnt / 100) + "<br />\n";
    out += "10% Фонд Сергея Михеева: " + formatOutput(10 * amnt / 100) + "<br />\n";
    out += "60% Инна: " + formatOutput(60 * amnt / 100) + "<br />\n";
    out += "20% На личные нужды: " + formatOutput(20 * amnt / 100);
    results.innerHTML = out;
})

function formatOutput(amount)
{
    amount = parseFloat(amount);
    return new Intl.NumberFormat(
        'ru-RU',
        {
            style: 'currency',
            currency: 'RUB'
        }
    ).format(
        amount
    );
}