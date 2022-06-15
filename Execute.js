const { run } = require("jest-cli");

const Bird = require("./Bird.js").Bird
const prompt = require('prompt-sync')();
const BirdActions = require('./BirdActions.js').BirdActions
const Flying = require('./Flying.js').Flying

class Execute {

    constructor() {
        
    } 

    run() {
        const actions = new BirdActions();
        const flyers = new Flying();
        let birds = ['penguin', 'bluejay', 'eagle']
        let flight = true
        const birb = actions.getPlayerInput(birds, prompt);
        let response = actions.testChoice(birb, birds)

        if(response != 'Error') {
            console.log(new Bird(response, flyers.canFly(birb,flight)));
        } else {
            console.log(response);
        }
    }

};




exports.Execute = Execute

