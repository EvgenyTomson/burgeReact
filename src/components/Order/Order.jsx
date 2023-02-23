import styles from './Order.module.css';

import './count.css';
import './goods.css';
import './order.css';
import OrderGoods from '../OrderGoods/OrderGoods';
import classNames from 'classnames';

import { orderList } from '../../constants/orderList.js';

const Order = () => {
    return (
        <div className={classNames(styles.catalog__order, styles.order)}>
            <section className={styles.order__wrapper}>
                <div className={styles.order__header} tabIndex="0" role="button">
                    <h2 className={styles.order__title}>Корзина</h2>

                    <span className={styles.order__count}>{orderList.length}</span>
                </div>

                <div className={styles.order__wrap_list}>
                    <ul className={styles.order__list}>
                        {orderList.map((item, index) => <OrderGoods title={item} key={index}/>)}
                    </ul>

                    <div className={styles.order__total}>
                        <p>Итого</p>
                        <p>
                            <span className={styles.order__amount}>1279</span>
                            <span className="currency">₽</span>
                        </p>
                    </div>

                    <button className={styles.order__submit}>Оформить заказ</button>

                    <div className={styles.order__apeal}>
                        <p className={styles.order__text}>Бесплатная доставка</p>
                        <button className={styles.order__close}>Свернуть</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Order;