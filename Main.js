const Bird = require("./Bird.js").Bird
const prompt = require('prompt-sync')();
const BirdActions = require('./BirdActions.js').BirdActions
const canFly = require('./Flying.js').canFly

let birds = ['penguin', 'bluejay', 'eagle'];
let flight = true
const birb = BirdActions.getPlayerInput(birds, prompt);
let response = BirdActions.testChoice(birb, birds)

    if(response != 'Error') {
        console.log(new Bird(response, canFly(birb,flight)));
    } else {
        console.log(response);
    }