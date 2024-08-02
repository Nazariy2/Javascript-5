// function displayMessage() {
//     const selectElement = document.getElementById('beverageSelect');
//     const selectedValue = selectElement.value;
    
//     const messageElement = document.getElementById('message');

//     let message;
//     switch (selectedValue) {
//         case 'coffee':
//             message = 'Ви вибрали Каву!';
//             break;
//         case 'tea':
//             message = 'Ви вибрали Чай!';
//             break;
//         case 'juice':
//             message = 'Ви вибрали Сік!';
//             break;
//         default:
//             message = '';
//     }

   
//     messageElement.textContent = message;
// }


function checkDays() {
    const days = document.getElementById('daysOfWeek').value.toLowerCase().trim();
    const messageElement = document.getElementById('message');
    let message;

    switch(days){
        case 'понеділок':
            case 'вівторок':
            case 'середа':
            case 'четвер':
            case 'п\'ятниця':
                message = `Введений день ${days} є робочим днем.`;

                break;
            case 'субота':
            case 'неділя':
                message = `Введений день ${days} є вихідним.`;
                break;
            default:
                message = `Введений день ${days} не є дійсним днем тижня.`;
    }
    messageElement.textContent = message;
}