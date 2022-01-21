const matix = require('./mathematix')




checkForNumber = (...args) => {

    for(i in args) {
        if(!isNaN(args[i])) {
            console.log("NO")
        }
    }
   
}

checkForNumber(3,5,NaN)
