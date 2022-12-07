function startNewGame() {
  if (players[0].name === '' || players[1] === '') {
    alert('Please set custom player names for both players!');
    return;
  }

  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = 'block';
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}


function selectGameField(event) {
  if (event.target.tagName !== 'LI'){
    return;
  }
}

function selectGameField(event) {
  event.target.textContent = players[activePlayer].symbol; // players [0]
  event.target.classList.add('disabled');
  switchPlayer();
}
