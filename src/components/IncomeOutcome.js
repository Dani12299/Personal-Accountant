import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeOutcome = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  //income calculate
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  const newIncome = new Intl.NumberFormat().format(income);

  //outcome calculate
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  const newExpense = new Intl.NumberFormat().format(expense);

  return (
    <div className="inc-exp-container">
      <div>
        <h2>Income</h2>
        <p id="money-plus" className="money plus">
          +{newIncome} VND
        </p>
      </div>
      <div>
        <h2>Expense</h2>
        <p id="money-minus" className="money minus">
          {newExpense} VND
        </p>
      </div>
    </div>
  );
};
