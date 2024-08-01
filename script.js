function displayMessage() {
    const selectElement = document.getElementById('beverageSelect');
    const selectedValue = selectElement.value;
    
    const messageElement = document.getElementById('message');

    let message;
    switch (selectedValue) {
        case 'coffee':
            message = 'Ви вибрали Каву!';
            break;
        case 'tea':
            message = 'Ви вибрали Чай!';
            break;
        case 'juice':
            message = 'Ви вибрали Сік!';
            break;
        default:
            message = '';
    }

   
    messageElement.textContent = message;
}