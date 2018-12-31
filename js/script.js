$(function() {

  var balance 			= 	0.0,
      amountInput 	= 	$('#amount'),
      balanceArea 	= 	$('#balance'),
      choiceSelect  = 	$('#choice'),
      submitBtn 		= 	$('#submit'),
      bankForm 			= 	$('#bank');

  function do_transaction(action) {

    var amount = parseFloat(amountInput.val());

    if (isNaN(amount) || amount === '') {
      balanceArea.text('Invalid transaction!!');
    } else {
      if(action === 'deposit') {
        balance += amount;
      } else if (action === 'withdrawal') {
        balance -= amount;
      }
      balanceArea.text('balance: $'+balance);
    }
  }

  bankForm.submit(function() {

    var choice = choiceSelect.val();

    if (choice === 'deposit') {
      do_transaction(choice);
    } else if (choice === 'withdrawal') {
      do_transaction(choice);
    }
    return false;
  });

  //// Select Menu Functionality//////////

  amountInput.hide();
  submitBtn.hide();

  choiceSelect.change(function() {

    var choice = choiceSelect.val();

    if (choice === 'deposit' || choice === 'withdrawal') {
      amountInput.show().val('');
      submitBtn.show();
    } else {
      amountInput.hide().val('');
      submitBtn.hide();
    }
  });
});


// function reg(name,balance) {
//   this.name = name;
//   this.balance = balance;
//   this.Account = funciton() {
//     return "Welcome: " + this.name + this.balance
//   }
// }
//  var person1 = new reg ("Albert", "1000");
//  var person2 = new reg ("Boyd", "2000");
//  console.info(person2);
//  reg.prototype === person1.__proto__ //true
//  person1.__proto__ === person2.__proto__ //true
