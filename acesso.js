function checkAccess() {
    const cardNumberInput = document.getElementById('cardNumber');
    const accessMessage = document.getElementById('accessMessage');

    const cardNumber = parseInt(cardNumberInput.value);

    if (isNaN(cardNumber)) {
        accessMessage.textContent = "Por favor, insira um número válido de cartão.";
        accessMessage.style.color = 'red';
        return;
    }

    if (cardNumber >= 1000 && cardNumber <= 1999) {
        accessMessage.textContent = "Acesso permitido.";
        accessMessage.style.color = 'green';
    } 
    else if (cardNumber >= 2000 && cardNumber <= 2999) {
        accessMessage.textContent = "Acesso limitado permitido.";
        accessMessage.style.color = 'blue';
    } 
    else if (cardNumber > 3000) {
        accessMessage.textContent = "Acesso negado.";
        accessMessage.style.color = 'red';
    } 
    else {
        accessMessage.textContent = "Acesso negado.";
        accessMessage.style.color = 'red';
    }
}