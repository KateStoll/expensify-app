const { test, expect, describe } = require('@jest/globals');
const BirdActions = require('../BirdActions.js'). BirdActions

describe("testChoice", () => {

    test("will return an error when the playerInput is no t in the list", () => {
        let birdList = ['penguin', 'bluejay', 'eagle']

        expect(BirdActions.testChoice('umu', birdList)).toEqual('Error');
    });

    test("will return playerInput when the playerINput is included in the list", () => {
        let birdList = ['penguin', 'bluejay', 'eagle']

        expect(BirdActions.testChoice('penguin', birdList)).toEqual('penguin');
    });
    
});

describe("getPlayerInput", () => {

    //test("will return whatever the player inputs", () => {
        //const fakePrompt = () => {
            //return "fakeUserInput"
        //}
    //expect(BirdActions.getPlayerInput([], fakePrompt)).toEqual("fakeUserInput")
    //});

    test("will return a lowercased version of the player input", () => {
        const fakePrompt = () => {
            return "fakeuserinput"
        }
        expect(BirdActions.getPlayerInput([], fakePrompt)).toEqual("fakeuserinput")
    });

});