import styles from './OrderGoods.module.css';
import classNames from 'classnames';
import Count from '../Count/Count';

const OrderGoods = (props) => {
    return (
        <li className={styles.order__item}>
            <img className={styles.order__image} src="../../assets/img/burger_1.jpg" alt={props.title} />

            <div className={classNames(styles.order__goods, styles.goods)}>
                <h3 className={styles.goods__title}>{props.title}</h3>

                <p className={styles.goods__weight}>512г</p>

                <p className={styles.goods__price}>1279
                    <span className="currency">₽</span>
                </p>
            </div>

            <Count count={2}/>
        </li>
    )
}

export default OrderGoods;