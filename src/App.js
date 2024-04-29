import React, { useState } from 'react'

import Search from './components/search'
import './App.css'
import AddTransactionForm from './components/AddTransactionForm'

import TransactionTable from './components/TransactionTable'

import Header from "./components/Header" 

const App = () => {
    const [searchTerm, setSearchTerm] = useState('')

        const [transactions, setTransactions] = useState([
    
            { id: 1, date: '2023-04-27', description: 'Salary', amount: 2000, category: 'Income' },
        { id: 2, date: '2022-04-26', description: 'rice', amount: 50, category: 'Food' },
        { id: 3, date: '2024-04-25', description: 'Gas bill', amount: 30, category: 'Utilities' },

        { id: 4, date: '2024-04-28', description: 'Phone bill', amount: 70, category: 'Utilities' },
    { id: 5, date: '2024-04-29', description: 'Groceries', amount: 100, category: 'Food' },

    { id: 6, date: '2024-04-30', description: 'Movie tickets', amount: 25, category: 'Entertainment' },
    { id: 7, date: '2024-05-01', description: 'Rent', amount: 1200, category: 'Housing' },

    { id: 8, date: '2024-05-02', description: 'Car insurance', amount: 150, category: 'Insurance' },
    { id: 9, date: '2024-05-03', description: 'Internet bill', amount: 60, category: 'Utilities' },

    { id: 10, date: '2024-05-04', description: 'Clothing', amount: 80, category: 'Shopping' },
    ])



    // Function to add a new transaction

    const addTransaction = (newTransaction) => {
        setTransactions([...transactions, { id: transactions.length + 1, ...newTransaction }]);
    };



    // Filter transactions based on search term
    const filteredTransactions = transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Render the components
    return (
        <div>
            <Header /> 
            
            <Search setSearchTerm={setSearchTerm} /> 
            <AddTransactionForm addTransaction={addTransaction} /> 
            <TransactionTable transactions={filteredTransactions} /> 
        </div>
    );
}

export default App; 