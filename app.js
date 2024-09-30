if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
 
// Hlavní funkce, která se spustí při kliknutí na tlačítko pro výpočet
function calculate() {
    // Získání hodnot z inputů pomocí jejich ID a převedení na čísla (parseFloat)
    const num1 = parseFloat(document.getElementById('number1').value); // První číslo
    const operation = document.getElementById('operation').value; // Získání operace (+, -, *, /)
    const num2 = parseFloat(document.getElementById('number2').value); // Druhé číslo
    let result; // Proměnná pro uložení výsledku

    // Kontrola, zda jsou zadané hodnoty platná čísla
    if (isNaN(num1) || isNaN(num2)) {
        result = "Chyba: Zadejte platná čísla"; // Chyba, pokud není zadáno číslo
    } else {
        // Switch pro provedení správné matematické operace na základě uživatelem zadané hodnoty
        switch (operation) {
            case '+':
                result = num1 + num2; // Sčítání
                break;
            case '-':
                result = num1 - num2; // Odčítání
                break;
            case '*':
                result = num1 * num2; // Násobení
                break;
            case '/':
                if (num2 === 0) { // Kontrola, zda není druhé číslo 0 (nelze dělit nulou)
                    result = "Chyba: Dělení nulou"; // Chyba při dělení nulou
                } else {
                    result = num1 / num2; // Dělení, pokud není druhé číslo nula
                }
                break;
            default:
                result = "Neplatná operace"; // Pokud je zadaná operace neplatná (něco jiného než +, -, *, /)
        }
    }

    // Výpis výsledku do HTML elementu s ID 'result' (může být div nebo jiný element)
    document.getElementById('result').innerText = result;
}