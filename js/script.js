$(function() {

  var balance = 0.0,
    amountInput = $('#amount'),
    balanceArea = $('#balance'),
    choiceSelect = $('#choice'),
    submitBtn = $('#submit'),
    bankForm = $('#bank');

  function reg(name, initdeposit) {

    this.name = name;
    this.initdeposit = initdeposit;

    var name = getElementById('name');
    var initdeposit = getElementById('initdeposit');

    document.write(name + '');
    document.write(initdeposit + '');
  }

  function transact(action) {

    var amount = parseFloat(amountInput.val());

    if (isNaN(amount) || amount === '') {
      balanceArea.text('Invalid transaction!!');
    } else {
      if (action === 'deposit') {
        balance += amount;
      } else if (action === 'withdrawal') {
        balance -= amount;
      }
      balanceArea.text('Balance: Ksh' + balance);
    }
  }

  bankForm.submit(function() {

    var choice = choiceSelect.val();

    if (choice === 'deposit') {
      transact(choice);
    } else if (choice === 'withdrawal') {
      transact(choice);
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
