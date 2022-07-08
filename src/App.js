import React, {useState} from "react";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450.69,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const[expenses, setExpenses] = useState(dummy_expenses);
  

  function addExpenseHandler(expense){
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
};

  //return React.createElement(
  //  "div",
  //  {},
  //  React.createElement("h2", {}, "Expense Calculator"),
  //  React.createElement(Expenses, { items: expenses })
  //);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
      <div className="expenses"></div>
    </div>
  );
}

export default App;
