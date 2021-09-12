const fs = require('fs');
const path = require('path');

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const readlineSync = require('readline-sync');

const file = path.join(__dirname, argv.file);
let curruntGame = 0;
let gamesLog = {};
let userAnswer;


do{
    let secretNumber = Math.floor(Math.random() * 2 + 1);    
    console.log('Введите 1 или 2 чтобы сыграть, или stop чтобы закончить');    
        userAnswer = readlineSync.prompt();
        if(userAnswer == 1 || userAnswer == 2) {
            if(userAnswer == secretNumber) {
                gamesLog[(++curruntGame).toString()] = 'win';
                console.log(`введено ${userAnswer}` ,'угадали \n');
                fs.writeFile(file, JSON.stringify(gamesLog), 'utf-8', (err) => {
                    if(err) throw new Error(err);
                });            
            }
            if(userAnswer != secretNumber) {
                gamesLog[(++curruntGame).toString()] = 'lose';
                console.log(`введено ${userAnswer}`,'не угадали \n');
                fs.writeFile(file, JSON.stringify(gamesLog), 'utf-8', (err) => {
                    if(err) throw new Error(err);
                });           
            }    
        } else if(userAnswer != 1 || userAnswer != 2 || userAnswer != 'stop') {
            console.log('Не верный ввод');
        }
    
} while(userAnswer != 'stop');



