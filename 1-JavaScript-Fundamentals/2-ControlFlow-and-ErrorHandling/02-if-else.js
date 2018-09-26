var bankAccount = 10000;
var debt = 4200;
var difference = bankAccount - debt;

console.log(`I have $${bankAccount} in my bank account, and I am $${debt} in debt.`);

if (difference > 700) {
        console.log("I have some extra money. I should pay off my debt. Ill have $" +`${difference}`, "leftover.");    
    } else {
        console.log("It probably isn't a good time to pay off my debt.");
}