import { useDispatch } from 'react-redux';
import { API_URI } from '../../constants/urls';
import { addProduct } from '../../store/order/orderSlice';
import styles from './CatalogProduct.module.css';

const CatalogProduct = ({item}) => {
    const dispatch = useDispatch();

    return (
        <article className={styles.product}>
            <img src={`${API_URI}/${item.image}`} alt={item.title} className={styles.product__image} />

            <p className={styles.product__price}>{item.price}<span className="currency">&nbsp;₽</span></p>

            <h3 className={styles.product__title}>
            {/* <button className={styles.product__detail}>Мясная бомба</button> */}
            <button className={styles.product__detail}>{item.title}</button>
            </h3>

            <p className={styles.product__weight}>{item.weight}</p>

            <button className={styles.product__add} type="button"
                onClick={() => {
                    dispatch(addProduct({id: item.id}));
                }}
            >
                Добавить
            </button>
        </article>
    )
}

export default CatalogProduct;