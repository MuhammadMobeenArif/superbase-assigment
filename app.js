

class BankAccount
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return null; // insufficient
    } else {
      this.balance -= amount;
      return this.balance;
    }
  }

  checkBalance() {
    return this.balance;
  }
}

const account = new BankAccount("Mobeen", 20000);

const depositButton = document.getElementById("deposit");
const withdrawButton = document.getElementById("withdraw");
const checkBalanceButton = document.getElementById("check-balance");
const input = document.getElementById("input");
const dashboardEl = document.getElementById("dashboard");

const updateDashboard = (message) => {
  const dashboardCard = document.createElement("div");
  dashboardCard.className = "p-2 mb-2 rounded border border-white bg-purple-400 text-center text-white";
  dashboardCard.textContent = message;
  dashboardEl.appendChild(dashboardCard);
};

depositButton.addEventListener("click", () => {
  const amount = parseFloat(input.value);
  if (!isNaN(amount) && amount > 0) {
    const newBalance = account.deposit(amount);
    updateDashboard(`Deposited ${amount}. New balance: ${newBalance}`);
  } else {
    updateDashboard("Invalid deposit amount.");
  }
  input.value = "";
});

withdrawButton.addEventListener("click", () => {
  const amount = parseFloat(input.value);
  if (!isNaN(amount) && amount > 0) {
    const newBalance = account.withdraw(amount);
    if (newBalance !== null) {
      updateDashboard(`Withdrew ${amount}. New balance: ${newBalance}`);
    } else {
      updateDashboard("Insufficient balance.");
    }
  } else {
    updateDashboard("Invalid withdrawal amount.");
  }
  input.value = "";
});

checkBalanceButton.addEventListener("click", () => {
  const currentBalance = account.checkBalance();
  updateDashboard(`Current balance: ${currentBalance}`);
});
