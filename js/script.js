//Bank script
function Account(amnt) {

  this.balance = amnt;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;

}

function deposit(amnt) {
  this.balance += amnt;
}

function withdraw(amnt) {
  if (amnt <= this.balance) {
    this.balance -= amnt;
  }
  if (amnt > this.balance) {
    alert("Insufficient funds");
  }
}

function toString() {
  return "Balance: " + this.balance;
}
var account = new Account();
account.deposit();
alert(account.toString());
account.withdraw;
alert(account.toString());
account.withdraw();
alert(account.toString());
