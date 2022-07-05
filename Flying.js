class Flying  {
     constructor() {

     }

     doesBirdFly(theBirdName, dictionary){
     
       return dictionary[theBirdName].doesFly
       //theBirdName is a var/arg that is a string
          //look at the test for clarity
     }

}

exports.Flying = Flying    
