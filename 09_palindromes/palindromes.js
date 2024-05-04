const palindromes = function (word) {
    arr = Array.from(word.replace(/[^a-zA-Z0-9]/g, ''));
    for(let i = 0, j = arr.length - 1; i<arr.length && j>=0; i++, j--){
        if(arr[i].toLowerCase() != arr[j].toLowerCase()){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
