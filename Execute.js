const {run} = require("jest-cli");
const { exit } = require("process");
const birds = require('./birds.json');
const Bird = require("./Bird.js").Bird
const prompt = require('prompt-sync')();
const BirdActions = require('./BirdActions.js').BirdActions
const Flying = require('./Flying.js').Flying

class Execute {
    
    constructor() {

    }

    run(prompty=prompt) {
        const actions = new BirdActions();
        //makes a new object and assigns it to actions
        const flyers = new Flying();
        //makes a new object and assigns it to flyers

        let birdList = birdConversion(birds);
            //birdList is the return of birdConversion func
        let response = 'Error'
        while (response == 'Error') {
            const birb = actions.getPlayerInput(birdList, prompty);
                //the return from getPlayerInput is assigned to birb
            response = actions.testChoice(birb, birdList);
                //response is re-assigned the value returned from testChoice
        }
        console.log("Congrats!");
        console.log(new Bird(response, flyers.doesBirdFly(response, birds)));
            //
    }
    

};

function birdConversion(avian){
    return Object.keys(avian);
}
//object.keys gets the bird names from (avian)
//pass in birds.json as an arg to bird conversion instead of an global inport

//by exporting Excute makes it an atrribute of the module
exports.Execute = Execute
exports.birdConversion = birdConversion