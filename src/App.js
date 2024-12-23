import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="header">My Expense Tracker</h1>
      <div className="balance">
        <h2>Current Balance:</h2>
        <h3 className="balance-dollars">20$</h3>
      </div>
      <div className="main-content">
        <div className="expense-form">
          <h3 className="expense-header">Add Expense</h3>
          <form className="add-expense">
            <div className="form-group">
              <label htmlFor="expense-name">Name:</label>
              <input type="text" id="expense-name" name="expense-name" />
            </div>
            <div className="form-group">
              <label htmlFor="expense-amount">Amount:</label>
              <input type="text" id="expense-amount" name="expense-amount" />
            </div>
            <div className="form-group">
              <label htmlFor="expense-date">Date:</label>
              <input type="date" id="expense-date" name="expense-date" />
            </div>
          </form>
        </div>
        <div className="expense-container">
          <ul className="expense-list">
            <li className="expense">Expense 1</li>
            <li className="expense">Expense 2</li>
            <li className="expense">Expense 3</li>
            <li className="expense">Expense 4</li>
            <li className="expense">Expense 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
