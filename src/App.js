import React, { useState } from "react";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

const dummy_expenses = [
  {
    id: "e1",
    title: "Input your own expenses above!",
    amount: 0,
    date: new Date(2019, 1, 1),
  },
  { id: "e2", title: "Input your own expenses above!", amount: 0, date: new Date(2020, 1, 1) },
  {
    id: "e3",
    title: "Input your own expenses above!",
    amount: 0,
    date: new Date(2021, 1, 1),
  },
  {
    id: "e4",
    title: "Input your own expenses above!",
    amount: 0,
    date: new Date(2022, 1, 1),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  //return React.createElement(
  //  "div",
  //  {},
  //  React.createElement("h2", {}, "Expense Calculator"),
  //  React.createElement(Expenses, { items: expenses })
  //);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <div className="expenses"></div>
    </div>
  );
}

export default App;
