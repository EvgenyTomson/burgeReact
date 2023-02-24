import styles from './Order.module.css';
import OrderGoods from '../OrderGoods/OrderGoods';
import classNames from 'classnames';

//import { orderList } from '../../constants/orderList.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { orderRequestAsync } from '../../store/order/orderSlice';
import { openModal } from '../../store/modalDelivery/modalDeliverySlice';

const Order = () => {
    const { totalPrice, totalCount, orderList, orderGoods } = useSelector(state => state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(orderRequestAsync());
    },[orderList.length])

    return (
        <div className={classNames(styles.catalog__order, styles.order)}>
            <section className={styles.order__wrapper}>
                <div className={styles.order__header} tabIndex="0" role="button">
                    <h2 className={styles.order__title}>Корзина</h2>

                    <span className={styles.order__count}>{totalCount}</span>
                </div>

                <div className={styles.order__wrap_list}>
                    <ul className={styles.order__list}>
                        {orderGoods.map((item) => <OrderGoods {...item} key={item.id}/>)}
                    </ul>

                    <div className={styles.order__total}>
                        <p>Итого</p>
                        <p>
                            <span className={styles.order__amount}>{totalPrice}</span>
                            <span className="currency">&nbsp;₽</span>
                        </p>
                    </div>

                    <button 
                        className={styles.order__submit}
                        disabled={orderGoods.length < 1}
                        onClick={() => {
                            dispatch(openModal())}
                        }>Оформить заказ</button>

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