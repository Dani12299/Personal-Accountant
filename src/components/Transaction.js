import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  const color = transaction.amount < 0 ? "minus" : "plus";
  const value = new Intl.NumberFormat().format(Math.abs(transaction.amount));

  return (
    <li className={color}>
      {transaction.text}{" "}
      <span>
        {sign}
        {value} VND{" "}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};
