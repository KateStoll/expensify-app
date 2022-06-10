const BirdActions = {
    
    testChoice: (playerInput, birdList) => {

        if (birdList.includes(playerInput)) {
            return playerInput
        } else {
            return 'Error'
        }
    
    },
    
    getPlayerInput: (birdList, promptFunction) => {
        return promptFunction('Pick a bird: ' + birdList.toString()).toLowerCase()
    }
}

exports.BirdActions = BirdActions