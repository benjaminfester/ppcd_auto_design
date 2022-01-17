const matix = require('./mathematix')


vl = matix.randomIntInStepsNotZero(-60, 20, 200)

console.log(vl)

for(l = 0; l < 200; l++) {
    console.log(matix.randomIntInStepsNotZero(-60, 20, 200))
}