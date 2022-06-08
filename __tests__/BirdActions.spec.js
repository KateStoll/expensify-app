const { test, expect, describe } = require('@jest/globals');
const testChoice = require('../BirdActions.js'). testChoice
const getPlayerInput = require('../BirdActions.js').getPlayerInput

describe("testChoice", () => {

    test("will return an error when the playerInput is no t in the list", () => {
        let birdList = ['penguin', 'bluejay', 'eagle']

        expect(testChoice('umu', birdList)).toEqual('Error');
    });

    test("will return playerInput when the playerINput is included in the list", () => {
        let birdList = ['penguin', 'bluejay', 'eagle']

        expect(testChoice('penguin', birdList)).toEqual('penguin');
    });
});

describe("getPlayerInput", () => {
    test("will return whatever the player inputs", () => {
        const fakePrompt = () => {
            return "fakeUserInput"
        }
    expect(getPlayerInput([], fakePrompt)).toEqual("fakeUserInput")
    });

});