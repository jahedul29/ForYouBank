// Login Event handler
let loginInfo = {
    'jahed': 123,
    'rakib': 124
};

const loginBtn = document.getElementById("login-button");
loginBtn.addEventListener('click', function () {
    const email = document.getElementsByTagName('input')[0].value;
    const pass = document.getElementsByTagName('input')[1].value;

    if (loginInfo[email.toLowerCase()] == parseInt(pass)) {
        const loginArea = document.getElementById('login-area');
        const transactionArea = document.getElementById("transaction-area");

        loginArea.style.display = 'none';
        transactionArea.style.display = 'block';
        document.getElementById('log-out').style.display = 'block';
        document.getElementById('logInDetails').style.display = 'none';

    } else {
        alert("UserName or password not exist...");
    }

});

//Logout button event
const logoutButton = document.querySelector('#log-out button');
logoutButton.addEventListener('click', function () {
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = 'none';
    document.getElementById('login-area').style.display = 'block';
    document.getElementById('log-out').style.display = 'none';
});


//Deposit button handler
const depositButton = document.getElementById("depositBtn");

depositButton.addEventListener('click', function () {
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);

    updateSpanText('currentDeposit', depositAmount);
    updateSpanText('currentBalance', depositAmount);

    document.getElementById('depositAmount').value = '';
    statusMessageDisplay("Deposited Successfully", depositAmount, 'D');
});



//Withdraw button handler
const withdrawButton = document.getElementById('withdrawBtn');
withdrawButton.addEventListener('click', function () {
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);

    updateSpanText('currentWithdraw', withdrawAmount);
    updateSpanText('currentBalance', (-1 * withdrawAmount));

    document.getElementById('withdrawAmount').value = '';
    statusMessageDisplay("Withdrawn Successfully", withdrawAmount, 'W');
});



//*Required functions

//function for Updating span text
function updateSpanText(id, amount) {
    const currentAmount = parseFloat(document.getElementById(id).innerText);
    let total = currentAmount + amount;
    document.getElementById(id).innerText = total;
}

//function for showing status message
function statusMessageDisplay(message, amount, type) {
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.style.display = 'block';

    if (type == 'D') {
        statusMessage.classList.remove('alert-warning');
        statusMessage.classList.add('alert-success');
    } else if (type == 'W') {
        statusMessage.classList.remove('alert-success');
        statusMessage.classList.add('alert-warning');
    }

    document.getElementById('messageText').innerText = "$" + amount + " " + message;
}