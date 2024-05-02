import React, { useState } from "react";

function TransactionTable({ transactions }) {
  function handleSort(key) {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  }

  function sortedTransactions() {
    if (!sortBy) {
      return transactions;
    }
    return [...transactions].sort((a, b) => {
      const valueA = typeof a[sortBy] === "string" ? a[sortBy].toLowerCase() : a[sortBy];
      const valueB = typeof b[sortBy] === "string" ? b[sortBy].toLowerCase() : b[sortBy];
      return sortOrder === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });
  }

  const [sortBy, setSortBy] = useState(null);
  
  const [sortOrder, setSortOrder] = useState("asc");

  return (
    <table>
      <thead>
        <tr>
          <TableHeader label="Date" onClick={() => handleSort("date")} />
          <TableHeader label="Description" onClick={() => handleSort("description")} />
          <TableHeader label="Amount" onClick={() => handleSort("amount")} />
          <TableHeader label="Category" onClick={() => handleSort("category")} />
        </tr>
      </thead>
      <tbody>
        {sortedTransactions().map((transaction) => (
          <TransactionRow key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
}

function TableHeader({ label, onClick }) {
  return <th onClick={onClick}>{label}</th>;
}

function TransactionRow({ transaction }) {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.category}</td>
    </tr>
  );
}

export default TransactionTable;
