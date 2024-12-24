import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem("balance");
    return savedBalance ? parseFloat(savedBalance) : 200; // Default to 200 if not found
  });
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : []; // Default to empty array if not found
  });
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  // Save expenses and balance to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("balance", balance.toString());
  }, [expenses, balance]);

  const handleAddExpense = (e) => {
    e.preventDefault();

    if (!expenseName || !expenseAmount || !expenseDate) {
      alert("Please fill out all fields!");
      return;
    }

    const newExpense = {
      id: Date.now(),
      name: expenseName,
      amount: parseFloat(expenseAmount),
      date: expenseDate,
    };

    setExpenses([...expenses, newExpense]); // Add the new expense
    setBalance(balance - parseFloat(expenseAmount)); // Update the balance

    // Clear input fields
    setExpenseName("");
    setExpenseAmount("");
    setExpenseDate("");
  };

  const handleDeleteExpense = (id, amount) => {
    setExpenses(expenses.filter((expense) => expense.id !== id)); // Remove expense by ID
    setBalance(balance + parseFloat(amount)); // Restore balance
  };

  return (
    <div className="container">
      <h1 className="header">My Expense Tracker</h1>
      <div className="balance">
        <h2>Current Balance:</h2>
        <h3 className="balance-dollars">{balance}$</h3>
      </div>
      <div className="main-content">
        <div className="expense-form">
          <h3 className="expense-header">Add Expense</h3>
          <form className="add-expense" onSubmit={handleAddExpense}>
            <div className="form-group">
              <label htmlFor="expense-name">Name:</label>
              <input
                type="text"
                id="expense-name"
                name="expense-name"
                value={expenseName || ""}
                onChange={(e) => setExpenseName(e.target.value)}
                placeholder="Expense Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expense-amount">Amount:</label>
              <input
                type="number"
                id="expense-amount"
                name="expense-amount"
                value={expenseAmount || ""}
                onChange={(e) => setExpenseAmount(e.target.value)}
                placeholder="Amount (e.g., 50)"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expense-date">Date:</label>
              <input
                type="date"
                id="expense-date"
                name="expense-date"
                value={expenseDate || ""}
                onChange={(e) => setExpenseDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="add-expense-btn">
                Add Expense
              </button>
            </div>
          </form>
        </div>
        <div className="expense-container">
          <ul className="expense-list">
            {expenses.map((expense) => (
              <li className="expense" key={expense.id}>
                {expense.name} - ${expense.amount} on {expense.date}
                <button
                  className="delete-expense-btn"
                  onClick={() => handleDeleteExpense(expense.id, expense.amount)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
