class BirdActions  {
    
    testChoice(playerInput, birdList) {

        if (birdList.includes(playerInput)) {
            return playerInput
        } else {
            return 'Error'
        }
    //validates the getPlayerInput
    }
    
    getPlayerInput(birdList, promptFunction){
        return promptFunction('Pick a bird: ' + birdList.toString()).toLowerCase()
    }
}

exports.BirdActions = BirdActions
//mainpulate the json into a list(array)
//birdlist into a func that accepts an object and returns it as an array
//testchoice & getplayerinput require an array