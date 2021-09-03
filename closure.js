const bank = owner =>{
    balance = 0;
    return {
        deposit : amount=>{
            // balance = balance + amount;
            balance += amount;
            return balance;
        },
        withdow : amount=>{
            balance = balance - amount;
            // blance -= amount;
            return balance;
        }
    }
}
let sejanbalance = bank('sejan');
console.log(sejanbalance.deposit(9999));
console.log(sejanbalance.deposit(9999));
console.log(sejanbalance.withdow(9999));