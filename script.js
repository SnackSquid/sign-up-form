const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const passwordMessage = document.querySelector('#passwordMessage');

const email = /.+\@.+\./;

function showPasswordMessage() {

    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordMessage.style.display = 'flex';
    }
    else {
        passwordMessage.style.display = 'none';
    }
}

passwordInput.addEventListener('input', showPasswordMessage);
confirmPasswordInput.addEventListener('input', showPasswordMessage);