function openPlayerConfig() {
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
}

function savePlayerConfig (event) {
event.preventDefault();
const formData = new FormData(event.target);
const enteredPlayername = formData.get('playername').trim();    

if (!enteredPlayername) { // enteredPlayername === ''
    event.target.firstElementChild.classList.add('error');
errorsOutputElement.textContent = 'Enter a valid name!';
return;
}

}