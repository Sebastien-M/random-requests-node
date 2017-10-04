/* const http = require('http');

http.get('http://www.google.fr', (resp) => {
    let data = '';
    let that = this;
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        console.log(JSON.parse(data).explanation);
    });

    resp.on("error", (err) => { 
        console.log("Error: " + err.message);
    });

}) */

var request = require("request");
let one;
let two;
let three;
let four;
let adress;
let status;
let conn;
let response;
let adresses = [];

function random_request() {
    one = Math.floor((Math.random() * 255) + 0);
    two = Math.floor((Math.random() * 255) + 0);
    three = Math.floor((Math.random() * 255) + 0);
    four = Math.floor((Math.random() * 255) + 0);
    adress = `${one}.${two}.${three}.${four}`;
    request.get({
        url: `http://${adress}`,
        timeout: 400
    }, function(err, res, body) {
        try {
            status = res.statusCode;
            conn = res.connection;
            if (status === 200) {
                console.log(adress);
                return adress;

            }

        } catch (e) {
            /* console.log("nothing"); */
        }
        /* console.log(adress); */
        /* console.log('error:', err); */
        /* console.log(res.statusCode); */
        /*  console.log(res.connection); */
        // process results
    });

}
for (var index = 0; index < 100; index++) {
    response = random_request();
    if (response != undefined) {
        adresses.push(response);
    }
}
setInterval
console.log(adresses);