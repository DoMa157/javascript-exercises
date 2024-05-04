const findTheOldest = function(people) {
    people.forEach(element => {
        if(element.yearOfDeath == undefined){
            element.yearOfDeath = 2024;
        }
    });
    people.sort((x,y) => x.yearOfDeath - x.yearOfBirth < y.yearOfDeath - y.yearOfBirth ? 1 : -1);
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
