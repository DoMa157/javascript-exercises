const sumAll = function(lowerLimit, upperLimit) {
    if(lowerLimit < 0 || upperLimit < 0 || typeof(lowerLimit) != "number" || typeof(upperLimit) != "number"){
        return 'ERROR';
    }
    if(upperLimit < lowerLimit){
        let temp = upperLimit;
        upperLimit = lowerLimit;
        lowerLimit = temp;
    }
    let sum = 0;
    for(let i = lowerLimit; i<=upperLimit; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
