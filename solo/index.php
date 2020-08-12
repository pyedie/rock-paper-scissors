<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style.css">
  <title>✊🏼✋🏼✌🏼 - Pierre Papier Ciseaux !</title>
</head>

<body>
  <header>
    <h1>Pierre, Papier, Ciseaux !</h1>
  </header>

  <div id='backArrow'>
    <a href="/">
      <img src="https://image.flaticon.com/icons/svg/747/747928.svg" alt="Exit">
    </a>
  </div>

  <div class="scoreboard">
    <div id="user" class="badge">joueur</div>
    <div id="computer" class="badge">ordi</div>
    <span id="user-score">0</span>:<span id="computer-score">0</span>
  </div>

  <div class="result">
    <p id="resultResponse">Cliquez sur l'une des actions</p>
  </div>

  <div class="choices">
    <div class="choice" onclick="launchGame('Pierre')">
      ✊🏼
    </div>

    <div class="choice" onclick="launchGame('Feuille')">
      ✋🏼
    </div>

    <div class="choice" onclick="launchGame('Ciseaux')">
      🖖🏼
    </div>
  </div>
  <p id="message">Faites votre choix 🤔</p>

  <script src="script.js"></script>
</body>

</html>