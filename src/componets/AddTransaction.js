import React, {useState, useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);
        
        const onSubmit = e => {
            e.preventDefault();
                // generate a random id number
            const newTransaction ={
                id: Math.floor(Math.random() * 100000),
                text,
                // parse amount to a number
                amount:  +amount
            }
            // call addTransaction from context and pass in the newTransaction
            addTransaction(newTransaction);
        }



    return(
        <>
        <h3> Add New Transaction </h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor= "amount">Amount <br /> (negative - expense, positive - income)</label>
                <input type="number" value={amount}  onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn"> Add Transaction </button>
        </form>
        </>
    )
}
export default AddTransaction;