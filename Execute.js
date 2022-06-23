const {run} = require("jest-cli");
const birds = require('./birds.json');
const Bird = require("./Bird.js").Bird
const prompt = require('prompt-sync')();
const BirdActions = require('./BirdActions.js').BirdActions
const Flying = require('./Flying.js').Flying

class Execute {
    
    constructor() {

    }

    run() {
        const actions = new BirdActions();
        //makes a new object and assigns it to actions
        const flyers = new Flying();
        //makes a new object and assigns it to flyers
        let flight = true

        let birdList = birdConversion(birds);
            //birdList is the return of birdConversion func
        let response = 'Error'
        while (response == 'Error') {
            const birb = actions.getPlayerInput(birdList, prompt);
                //the return from getPlayerInput is assigned to birb
            response = actions.testChoice(birb, birdList);
                //response is re-assigned the value returned from testChoice
            console.log(response);
        }
        console.log("Congrats!");
        console.log(new Bird(response, flyers.canFly(response, flight)));
            //
    }
    

};

function birdConversion(avian){
    return Object.keys(avian);
}
//pass in birds.json as an arg to bird conversion instead of an global inport

//by exporting Excute makes it an atrribute of the module
exports.Execute = Execute
exports.birdConversion = birdConversion