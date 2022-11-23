function startNewGame() {
  if (players[0].name === '' || players[1] === '') {
    alert('Please set custom player names for both players!');
    return;
  }
  gameAreaElement.style.display = 'block';
}
