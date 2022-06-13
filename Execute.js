const { run } = require("jest-cli");

const Bird = require("./Bird.js").Bird
const prompt = require('prompt-sync')();
const BirdActions = require('./BirdActions.js').BirdActions
const Flying = require('./Flying.js').Flying

class Execute {

    constructor() {
        
    } 
    
    run() {
        let birds = ['penguin', 'bluejay', 'eagle']
        let flight = true
        const birb = BirdActions.getPlayerInput(birds, prompt);
        let response = BirdActions.testChoice(birb, birds)

        if(response != 'Error') {
            console.log(new Bird(response, Flying.canFly(birb,flight)));
        } else {
            console.log(response);
        }
    }

};


exports.Execute = Execute

