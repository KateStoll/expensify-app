const { test, expect } = require('@jest/globals');

const Bird = require ('../Bird.js').Bird;
const testChoice = require('../BirdActions.js').testChoice

describe("Bird", () => {

    test("It will respond to name", () => {
        let name = "penguin";
        let doesFly = false;
        const mob = new Bird(name, doesFly);
        expect(mob.name).toEqual(name);
    });

    test("It will respond to doesFly", () => {
        let name = "sparrow";
        let doesFly = true;
        const bird = new Bird(name, doesFly);
        expect(bird.doesFly).toEqual(doesFly);
    });

});