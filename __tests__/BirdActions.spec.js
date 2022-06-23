const { test, expect, describe } = require('@jest/globals');
const BirdActions = require('../BirdActions.js').BirdActions


describe("testChoice", () => {

    test("will return an error when the playerInput is not in the list", () => {
        let birdList = ['penguin', 'bluejay', 'eagle']

        expect((new BirdActions()).testChoice('umu', birdList)).toEqual('Error');
    });

    test("will return playerInput when the playerInput is included in the list", () => {
        let birdList = ['penguin', 'bluejay', 'eagle']

        expect((new BirdActions()).testChoice('penguin', birdList)).toEqual('penguin');
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
        expect((new BirdActions()).getPlayerInput([], fakePrompt)).toEqual("fakeuserinput")
    });

});