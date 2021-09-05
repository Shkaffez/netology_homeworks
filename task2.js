const readline = require('readline');
const input = readline.createInterface(process.stdin);

const answer = Math.floor(Math.random() * (100 - 1) + 1);
console.log('Загадано число в диапазоне от 0 од 100');


input.on('line', (data) => {        
    if(data > answer) {
        console.log('Больше');
    }
    if(data < answer) {
        console.log('Меньше');
    }
    if(data == answer) {
        console.log(`Отгадано число ${answer}`);
        input.close();
    }    
});
