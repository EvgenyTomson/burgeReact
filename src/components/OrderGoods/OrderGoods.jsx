import styles from './OrderGoods.module.css';
import classNames from 'classnames';
import Count from '../Count/Count';
import { API_URI } from '../../constants/urls';

const OrderGoods = ({title, id, price, count, weight, image}) => {
    return (
        <li className={styles.order__item}>
            <img className={styles.order__image} src={`${API_URI}/${image}`} alt={title} />

            <div className={classNames(styles.order__goods, styles.goods)}>
                <h3 className={styles.goods__title}>{title}</h3>

                <p className={styles.goods__weight}>{weight}&nbsp;г</p>

                <p className={styles.goods__price}>{price}
                    <span className="currency">&nbsp;₽</span>
                </p>
            </div>

            <Count count={count} id={id}/>
        </li>
    )
}

export default OrderGoods;