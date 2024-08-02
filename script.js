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


// function checkDays() {
//     const days = document.getElementById('daysOfWeek').value.toLowerCase().trim();
//     const messageElement = document.getElementById('message');
//     let message;

//     switch(days){
//         case 'понеділок':
//             case 'вівторок':
//             case 'середа':
//             case 'четвер':
//             case 'п\'ятниця':
//                 message = `Введений день ${days} є робочим днем.`;

//                 break;
//             case 'субота':
//             case 'неділя':
//                 message = `Введений день ${days} є вихідним.`;
//                 break;
//             default:
//                 message = `Введений день ${days} не є дійсним днем тижня.`;
//     }
//     messageElement.textContent = message;
// }

function chekMonth() {
    const selectElement = document.getElementById('monthSelected');
    const selectedValue = selectElement.value;
    const messageElement = document.getElementById('message');

    let message;

    switch(selectedValue) {
        case 'jan':
            case 'feb':
            case 'dec':
                message = `This month  is equal to the winter`;

                break;
        
        case 'march':
            case 'apr':
            case 'may':
                message = `This month  is equal to the Spring`;
                
                break;

         case 'june':
            case 'july':
            case 'aug':
                message = `This month  is equal to the Summer`;
                
                break;

        case 'sept':
            case 'oct':
            case 'nov':
                message = `This month  is equal to the Autumn`;
                
                break;
        
        
    }

    alert(message);
    
}