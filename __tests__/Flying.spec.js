const { test, expect, describe } = require('@jest/globals');
const Flying = require('../Flying.js').Flying


describe("doesBirdFly", () => {

    test("will return true when it recieves a bird that flys", () => {
        let flying = new Flying();
        let dictionary = { "bluejay": {
                                "doesFly": true
                            }}

        expect(flying.doesBirdFly("bluejay", dictionary)).toEqual(true);
    });

    test("will return false when it recieves a bird that does not fly", () => {
        let flying = new Flying();
        let dictionary = { "penguin": {
                                 "doesFly": false
                        }}
        expect(flying.doesBirdFly("penguin", dictionary)).toEqual(false);
    });
    
});