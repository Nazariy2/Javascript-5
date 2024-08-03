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

// function chekMonth() {
//     const selectElement = document.getElementById('monthSelected');
//     const selectedValue = selectElement.value;
//     const messageElement = document.getElementById('message');

//     let message;

//     switch(selectedValue) {
//         case 'jan':
//             case 'feb':
//             case 'dec':
//                 message = `This month  is equal to the winter`;

//                 break;
        
//         case 'march':
//             case 'apr':
//             case 'may':
//                 message = `This month  is equal to the Spring`;
                
//                 break;

//          case 'june':
//             case 'july':
//             case 'aug':
//                 message = `This month  is equal to the Summer`;
                
//                 break;

//         case 'sept':
//             case 'oct':
//             case 'nov':
//                 message = `This month  is equal to the Autumn`;
                
//                 break;
        
        
//     }
//     with alert
//     alert(message);

//     without alert
//     messageElement.textContent = message;
    
// }

// function numberMonth() {
//     const month =document.getElementById('month').value.trim();
//     let days;

//     const messageElement = document.getElementById('message');


//     switch(parseInt(month)) {
//         case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//             days = 31;
//             break;
//         case 4: case 6: case 9: case 11:
//             days = 30;
//             break;
//         case 2:
//             days = 28; 
//             break;
//         default:
//              days = 'Невірний номер місяця';
//     }
//     with alert
//     alert(days);
//     without alert
//     messageElement.textContent = days;

// }
function colorChange() {
    const selectElement = document.getElementById('colorSelect');
        const selectedValue = selectElement.value;
        const messageElement = document.getElementById('message');
    
        let message;

        switch(selectedValue) {
            case 'Green':
                message = 'U can go';
                break;
            case 'Yellow': 
                message = 'attention please,stop moving';
                break;
            case 'Red':
                message ='U cant go,wait till light turns green';
                break;
            
            default:
                message = 'u have to select a color';
        }

        //with alert
        alert(message);
}


