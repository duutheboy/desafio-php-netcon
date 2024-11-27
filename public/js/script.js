document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('showKmToLightyears').addEventListener('click', () => {
        document.getElementById('kmToLightyearsSection').classList.remove('hidden');
        document.getElementById('lightyearsToKmSection').classList.add('hidden');
        document.getElementById('showKmToLightyears').classList.add('active');
        document.getElementById('showLightyearsToKm').classList.remove('active');
    });

    document.getElementById('showLightyearsToKm').addEventListener('click', () => {
        document.getElementById('lightyearsToKmSection').classList.remove('hidden');
        document.getElementById('kmToLightyearsSection').classList.add('hidden');
        document.getElementById('showLightyearsToKm').classList.add('active');
        document.getElementById('showKmToLightyears').classList.remove('active');
    });


    // Forms Quilômetros para Anos-Luz
    const kmToLightyearsForm = document.getElementById('kmToLightyearsForm');
    const kmToLightyearsResult = document.getElementById('kmToLightyearsResult');

    kmToLightyearsForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const quilometros = document.getElementById('quilometros').value;

        try {
            const response = await fetch('http://localhost:8000/api/quilometros', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ quilometros }),
            });

            if (response.ok) {
                const data = await response.json();
                kmToLightyearsResult.textContent = `${quilometros} quilômetros é igual a ${data.quilometros} anos-luz.`;
            } else {
                const error = await response.json();
                kmToLightyearsResult.textContent = error.error;
            }
        } catch (error) {
            kmToLightyearsResult.textContent = 'Erro ao conectar-se à API.';
        }
    });

    // Forms Anos-Luz para Quilômetros
    const lightyearsToKmForm = document.getElementById('lightyearsToKmForm');
    const lightyearsToKmResult = document.getElementById('lightyearsToKmResult');

    lightyearsToKmForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const anosLuz = document.getElementById('anosLuz').value;

        try {
            const response = await fetch('http://localhost:8000/api/anosLuz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ anosLuz }),
            });

            if (response.ok) {
                const data = await response.json();
                lightyearsToKmResult.textContent = `${anosLuz} anos-luz é igual a ${data.anosLuz} quilômetros.`;
            } else {
                const error = await response.json();
                lightyearsToKmResult.textContent = error.error;
            }
        } catch (error) {
            lightyearsToKmResult.textContent = 'Erro ao conectar-se à API.';
        }
    });
});

// Função para mostrar o resultado em popup
function showResult(result, type) {
    let resultElement;
    if (type === "kmToLightyears") {
        resultElement = document.getElementById('kmToLightyearsResult');
    } else {
        resultElement = document.getElementById('lightyearsToKmResult');
    }

    resultElement.textContent = result; // Define o texto do resultado
    resultElement.classList.add('show'); // Aplica a classe para mostrar o resultado
}

document.getElementById('kmToLightyearsForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let quilometros = document.getElementById('quilometros').value;
    let result = quilometros / 9.461e12;
    showResult(`O resultado é ${result.toFixed(4)} anos-luz`, "kmToLightyears");
});

document.getElementById('lightyearsToKmForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let anosLuz = document.getElementById('anosLuz').value;
    let result = anosLuz * 9.461e12;
    showResult(`O resultado é ${result.toFixed(4)} quilômetros`, "lightyearsToKm");
});

