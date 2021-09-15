require('dotenv').config();
const http = require('http');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const city = argv.city;
const url = `http://api.weatherstack.com/current?access_key=${process.env.myAPIKey}&query=${city}`;

http.get(url, (res) => {
    const statusCode = res.statusCode;
    if(statusCode !== 200) {
        console.error(`Status code: ${statusCode}`);
        return;
    }
    res.setEncoding('utf-8');
    let resData = '';
    res.on('data', chunck => resData += chunck );
    res.on('end', () => {
        let parseData = JSON.parse(resData);
        console.log(parseData);
    })
}).on('error', (err) => {
    console.error(`Got error ${err.message}`);
});


