const { test, expect, describe } = require('@jest/globals');
const { run } = require('jest-cli');
const Execute = require('../Execute.js');
//execute is a module, modeules have atr

describe("birdConversion", () => {
    test("will return an array with the top keys from bird.json", () => {


        let birds2 = {
            "eagle": "qwer",
            "emu": "asdf"
        }
        expect(Execute.birdConversion(birds2)).toEqual(["eagle", "emu"]);
    });



});

describe("run", () => {
    test("will run the program", () => {
        let startTime = new Execute.Execute()
        const fakePrompt = () => {
            return "eagle"
        }
        expect(startTime.run(fakePrompt)).toEqual(undefined);
    });

});