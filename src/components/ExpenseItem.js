import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const {dispatch, Location}=useContext(AppContext);

    const delItem=()=>{
        //console.log('name=',props.name);
        dispatch({
            type:'DELETE_ITEM',
            payload:{
                name:props.name
            }
        })
    };
    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.quantity}</td>
        <td>{Location}{parseInt(props.unitprice)}</td>
        <td>{Location}{parseInt(props.quantity)*parseInt(props.unitprice)}</td>
        <td><FaTimesCircle size='2.2em' color="red" onClick={delItem}></FaTimesCircle></td>
        </tr>
    )
};

export default ExpenseItem;
