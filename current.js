const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv))
    .alias({
        'd': 'date',
        'm': 'month',
        'y': 'year'
    })    
    .argv;

let result = '';
let date = argv.d??0;
let month = argv.m??0;
let year = argv.y??0;
let add = argv.add??false;
let sub = argv.sub??false;
console.log(`day: ${date} month: ${month} year: ${year}`)
if(!argv.d && !argv.m && !argv.y) {
    result = new Date();
}
if(add) {
    result = new Date(new Date().getFullYear() + year, new Date().getMonth() + month,
     new Date().getDate() + date, new Date().getHours(), new Date().getMinutes(),
     new Date().getSeconds(), new Date().getMilliseconds()
    );
}
if(sub) {
    result = new Date(new Date().getFullYear() - year, new Date().getMonth() - month,
     new Date().getDate() - date, new Date().getHours(), new Date().getMinutes(),
     new Date().getSeconds(), new Date().getMilliseconds()
    );
}
if(!add && !sub && year) {
    result = new Date().getFullYear();
}
if(!add && !sub && month) {
    result = new Date().getMonth() + 1;
}
if(!add && !sub && date) {
    result = new Date().getDate();
}

console.log(result);

