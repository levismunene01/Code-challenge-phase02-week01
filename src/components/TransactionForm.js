import React from 'react';

function TransactionForm({ addTransaction }) {
    const handleAddTransaction = () => {
        const date = prompt("Enter date (YYYY-MM-DD):")

        const description = prompt("Enter description:")
        const amount = parseFloat(prompt("Enter amount:"))
        const category = prompt("Enter category:")

        if (date && description && !isNaN(amount) && category) {
            addTransaction({ date, description, amount, category })
        }
    };
    
// if everything is is inserted click on the button

    return (
        <button onClick={handleAddTransaction}>Add Transaction</button>
    );
}

export default TransactionForm
