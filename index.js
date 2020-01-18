let balance = 50.00;

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  isAllowed() {
    if ((this.account.balance + this.value) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  commit() {
    if (this.isAllowed() === true) {
      this.time = new Date();
      this.account.addTransaction(this.value);
      this.account.balance;
    } else {
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
    this.transaction = [balance];
  }

  get balance() {
    let sum = 0
    for (let i = 0; i < this.transaction.length; i++) {
      sum += this.transaction[i]
    }
    return Math.round((sum) * 100) / 100;
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
console.log(`Transaction 1: Account: ${t1.account.username} => Withdrawal of $${t1.amount} at ${t1.time}\nCurrent Balance: $${t1.account.balance}`);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log(`Transaction 2: Account: ${t2.account.username} => Withdrawal of $${t2.amount} at ${t2.time}\nCurrent Balance: $${t2.account.balance}`);

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log(`Transaction 3: Account: ${t3.account.username} => Deposit of $${t3.amount} at ${t3.time}\nCurrent Balance: $${t3.account.balance}`);

console.log(`Final Balance for ${myAccount.username} is ${myAccount.balance}. Transaction are as follows: ${myAccount.transaction}`);


