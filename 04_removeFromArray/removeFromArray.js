const removeFromArray = function(arr, ...args) {
    let resArr = []
    for(let i = 0; i<arr.length; i++){
        if(args.includes(arr[i])){
            continue;
        }
        resArr.push(arr[i]);
    }
    return resArr;
};

// Do not edit below this line
module.exports = removeFromArray;
