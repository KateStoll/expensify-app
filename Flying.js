const Flying = {
    canFly: (playerInput, flight) => {
     
    
        if (playerInput == 'penguin') {
            flight = false
        } else if (playerInput == 'bluejay') {
             return flight
        } else if (playerInput == 'eagle') {
             return flight
        } else {
             return undefined
        }
        
        return flight
    
        }
}

exports.Flying = Flying    
