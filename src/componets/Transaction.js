import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);



    //checking the transaction amount whether positive or negative
    const sign = transaction.amount < 0 ? '-' : '+';


    return(

        
        //make the class dynamic for positive and negative(red(-) or green(+))
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span>
        <button  onClick={() => deleteTransaction(transaction.id)} className="delete-btn">Remove</button>
         </li>

    )
}
export default Transaction;