export class Expense {
  constructor(description, amount) {
    this.id = Date.now();
    this.description = description;
    this.amount = amount;
  }
}

export class ExpenseManager {
  constructor() {
    this.expenses = [];
  }

  add(expense) {
    this.expenses.push(expense);
  }

  remove(id) {
    this.expenses = this.expenses.filter(e => e.id !== id);
  }

  getTotal() {
    return this.expenses.reduce((total, e) => total + e.amount, 0);
  }

  findById(id) {
    return this.expenses.find(e => e.id === id);
  }
}
