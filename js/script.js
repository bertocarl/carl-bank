//Bank script
function Account() {

  this.balance = current-bal;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;

}

function deposit() {
  this.balance += deposit;
}

function withdraw() {
  if (withdraw <= this.balance) {
    this.balance -= withdraw;
  }
  if (withdraw > this.balance) {
    alert("Insufficient funds");
  }
}

function toString() {
  return "Balance: " + this.balance;
}
var account = new Account();
account.deposit;
alert(account.toString());
account.withdraw;
alert(account.toString());
