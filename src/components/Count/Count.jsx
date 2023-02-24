//import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../store/order/orderSlice';
import styles from './Count.module.css';

const Count = ({count, id}) => {
    //const [count, setCount] = useState(props.count);
    const dispatch = useDispatch();

    const incrementCount = () => {
        dispatch(addProduct({id}));
    };

    const decrementCount = () => {
        dispatch(removeProduct({id}));
    };

    return (
        <div className={styles.count}>
            <button className={styles.count__minus} onClick={decrementCount}>-</button>
            <p className={styles.count__amount}>{count}</p>
            <button className={styles.count__plus} onClick={incrementCount}>+</button>
        </div>
    )
};

export default Count;