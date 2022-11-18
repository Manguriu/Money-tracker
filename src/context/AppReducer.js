// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type){
        // case to delete transaction.
        case 'DELETE_TRANSACTION':
        return {
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id 
                !== action.payload) // filtering out anything with that id
        }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}