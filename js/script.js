//Bank script
function reg(name,balance) {
  this.name = name;
  this.balance = balance;
  this.Account = funciton() {
    return "Welcome: " + this.name + this.balance
  }
}
 var person1 = new reg ("Albert", "1000");
 var person2 = new reg ("Boyd", "2000");
 console.info(person2);
 reg.prototype === person1.__proto__ //true
 person1.__proto__ === person2.__proto__ //true

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
