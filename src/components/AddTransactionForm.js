import React, { useState } from 'react'
import './MyCustom.css'


const AddTransactionForm = ({ addTransaction }) => {
    const [newTransaction, setNewTransaction] = useState({

        date: '',
        description: '',
        amount: '',
        category: ''
    })


    const handleChange = (e, field) => {

        setNewTransaction({
            ...newTransaction,
            [field]: e.target.value
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        addTransaction(newTransaction)

        setNewTransaction({

            date: '',
            description: '',
            amount: '',

            category: ''
        })
    }

    return (
        <form onSubmit={handleSubmit} className="transaction-form">
            <div>
                <label>Date:</label>
                <input type="date" value={newTransaction.date} onChange={(e) => handleChange(e, 'date')} />
            </div>

            <div>
                <label>Description:</label>
                <input type="text" placeholder="Description" value={newTransaction.description} onChange={(e) => handleChange(e, 'description')} />
            </div>

            <div>
                <label>Amount:</label>
                <input type="number" placeholder="Amount" value={newTransaction.amount} onChange={(e) => handleChange(e, 'amount')} />
            </div>

            <div>
                <label>Category:</label>
                <input type="text" placeholder="Category" value={newTransaction.category} onChange={(e) => handleChange(e, 'category')} />
            </div>

            <button type="submit">Add Transaction</button>
        </form>
    )
}

export default AddTransactionForm
