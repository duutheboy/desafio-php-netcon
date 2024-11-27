<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projeto PHP Netcon - Conversor de Anos-luz/KM</title>
  <link rel="icon" href="{{ asset('img/logo-netcon.jpg') }}" type="image/x-icon">
  <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
</head>

<body>
  <div class="sidebar">
    <img src="{{ asset('img/logo-netcon.jpg') }}" alt="Logo NetCon">
    <button id="showKmToLightyears" class="active">Quilômetros para Anos-Luz</button>
    <button id="showLightyearsToKm">Anos-Luz para Quilômetros</button>
  </div>

  <div class="container">
    <h1>Projeto PHP Netcon - Conversor de Anos-luz/KM</h1>
    <h5 id="sub">Eduardo Bezerra - 20 anos</h5>
    <!-- Quilômetros para anos-Luz -->
    <div class="form-container" id="kmToLightyearsSection">
      <h2>Quilômetros para Anos-Luz</h2>
      <form id="kmToLightyearsForm">
        <input type="number" id="quilometros" placeholder="Insira os quilômetros" required>
        <button type="submit" class="convert">Converter</button>
      </form>
      <p id="kmToLightyearsResult"></p>
    </div>

    <!-- Anos-Luz para quilômetros -->
    <div class="form-container hidden" id="lightyearsToKmSection">
      <h2>Anos-Luz para Quilômetros</h2>
      <form id="lightyearsToKmForm">
        <input type="number" id="anosLuz" placeholder="Insira os anos-luz" required>
        <button type="submit" class="convert">Converter</button>
      </form>
      <p id="lightyearsToKmResult"></p>
    </div>
  </div>

  <script src="{{ asset('js/script.js') }}"></script>
</body>

</html>