import { useState } from 'react';
import styles from './Count.module.css';

const Count = (props) => {
    const [count, setCount] = useState(props.count);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        const c = count > 1 ? count - 1 : 1;
        setCount(c);
    };

    return (
        <div className="count">
            <button className={styles.count__minus} onClick={decrementCount} disabled={count === 1}>-</button>
            <p className={styles.count__amount}>{count}</p>
            <button className={styles.count__plus} onClick={incrementCount}>+</button>
        </div>
    )
};

export default Count;