import { Expense, ExpenseManager } from './classes.js';
import { formatCurrency, validateInput } from './utils.js';

const form = document.getElementById('expense-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const list = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total');

const manager = new ExpenseManager();

const render = () => {
  list.innerHTML = '';

  manager.expenses.map(expense => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${expense.description} - R$ ${formatCurrency(expense.amount)}
      <button data-id="${expense.id}">X</button>
    `;

    li.querySelector('button').addEventListener('click', () => {
      manager.remove(expense.id);
      render();
    });

    list.appendChild(li);
  });

  totalDisplay.textContent = formatCurrency(manager.getTotal());
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);

  if (!validateInput(description, amount)) {
    alert('Entrada inválida');
    return;
  }

  const expense = new Expense(description, amount);
  manager.add(expense);

  descriptionInput.value = '';
  amountInput.value = '';

  render();
});
