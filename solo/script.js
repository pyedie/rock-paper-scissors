let resultPly = document.querySelector("#user-score");
let resultPc = document.querySelector("#computer-score");
let responseChan = document.querySelector("#resultResponse");

let scorePly = 0;
let scorePc = 0;

resultPly.innerHTML = scorePly;
resultPc.innerHTML = scorePc;

function verifyWinner(ply, pc) {
  if (ply == "Feuille") {
    if (pc == "Feuille") {
      return "Égalité !<br/>Feuille contre Feuille";
    } else if (pc == "Pierre") {
      return "Vous avez gagné !<br/>La Feuille recouvre la Pierre";
    } else if (pc == "Ciseaux") {
      return "Vous avez perdu !<br/>La Feuille est découpée par les Ciseaux";
    }
  } else if (ply == "Pierre") {
    if (pc == "Feuille") {
      return "Vous avez perdu !<br/>La Pierre est recouverte par la Feuille";
    } else if (pc == "Pierre") {
      return "Égalité !<br/>Pierre contre Pierre";
    } else if (pc == "Ciseaux") {
      return "Vous avez gagné !<br/>La Pierre brise les Ciseaux";
    }
  } else if (ply == "Ciseaux") {
    if (pc == "Feuille") {
      return "Vous avez gagné !<br/>Les Ciseaux coupent la Feuille";
    } else if (pc == "Pierre") {
      return "Vous avez perdu !<br/>Les Ciseaux se brisent sur la Pierre";
    } else if (pc == "Ciseaux") {
      return "Égalité !<br/>Ciseaux contre Ciseaux";
    }
  }
}

function launchGame(res) {
  let array = ["Pierre", "Feuille", "Ciseaux"];

  let number = Math.floor(Math.random() * 3);

  let pcRes = array[number];

  let winner = verifyWinner(res, pcRes);

  responseChan.innerHTML = winner;

  if (winner.startsWith("Égalité")) {
    return;
  }
  else if (winner.startsWith("Vous avez perdu")) {
    scorePc++
    resultPc.innerHTML = scorePc;
  }
  else if (winner.startsWith("Vous avez gagné")) {
    scorePly++

    resultPly.innerHTML = scorePly;
  }
}
