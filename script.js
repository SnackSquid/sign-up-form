const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const passwordMessage = document.querySelector('#passwordMessage');

function showPasswordMessage() {
    if (password.value.match(confirmPassword)) passwordMessage.style.display = 'none';
    else if (!password.value.match(confirmPassword)) passwordMessage.style.display = 'flex';
}
