const BirdActions = {
    testChoice: (playerInput, birdList) => {

        if (birdList.includes(playerInput.toLowerCase())) {
            return playerInput
        } else {
            return 'Error'
        }
    
    },
    
    getPlayerInput: (birdList, promptFunction) => {
        const playerInput = promptFunction('Pick a bird: ' + birdList.toString())
        return playerInput
    }
}

exports.BirdActions = BirdActions