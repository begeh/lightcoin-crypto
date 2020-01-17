let balance = 500.00;

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  get isAllowed(){
    if((this.account.balance - this.amount) > 0){
      return true;
    } else{
      return false;
    }
  }

  commit() {
      if(this.isAllowed){
        this.time = new Date();
        this.account.addTransaction(this.value);
      } else{
        return false;
      }
  }
}

class Withdrawal extends Transaction {
  get value() {
    return (-1 * this.amount);
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}

class Account {
  constructor(username) {
    this.username = username;
    this.transaction = [];
  }

  get balance() {
    let sum = 0
    for(let i = 0; i < this.transaction.length; i++){
      sum += this.transaction[i];
    }
    return sum;
  }

  addTransaction(transaction) {
    this.transaction.push(transaction);
  }
}


const myAccount = new Account('snow-patrol');

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

console.log(`Starting Balance for ${myAccount.username} is ${myAccount.balance}`);

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 3: ', t3);

console.log(`Final Balance for ${myAccount.username} is ${myAccount.balance}. Transaction are as follows: ${myAccount.transaction}`);


