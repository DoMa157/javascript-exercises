const fibonacci = function(num) {
    let dp = [1, 1];
    if(num < 0){
        return "OOPS";
    }
    if(num == 0){
        return 0;
    }
    if(num < 2){
        return dp[num-1];
    }
    for(let i = 2; i<=parseInt(num); i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
