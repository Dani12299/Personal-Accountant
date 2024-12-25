import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  const sum = new Intl.NumberFormat().format(total);

  return (
    <div>
      <h2>Your Balance</h2>
      <h4 id="balance">{sum} VND</h4>
    </div>
  );
};
