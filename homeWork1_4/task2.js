const fs = require('fs');
const path = require('path');

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const file = path.join(__dirname, argv.file);
let gameLog = JSON.parse(fs.readFileSync(file, 'utf-8'));

let gamesCount = 0;
let winsCount = 0;
let losesCount = 0;
for(let key in gameLog) {
    gamesCount++;
    if(gameLog[key] == 'win') {
        winsCount++;
    }
    if(gameLog[key] == 'lose') {
        losesCount++;
    }
}
let winsPersent = Math.round((winsCount * 100) / gamesCount);
// console.log(gameLog[1]);
console.log(`Игр сыграно - ${gamesCount} \nИгр выиграно - ${winsCount} \nИгр проиграно - ${losesCount} \nПроцент побед - ${winsPersent}%`);