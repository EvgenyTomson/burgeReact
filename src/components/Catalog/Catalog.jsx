import Container from '../Container/Container';
import Order from '../Order/Order';
import styles from './Catalog.module.css';
import CatalogProduct from '../CatalogProduct/CatalogProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { productRequestAsync } from '../../store/product/productSlice';


const Catalog = () => {
  const { products } = useSelector(state => state.product);
  const { category, activeCategory } = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if(category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }    
}, [category, activeCategory]);

  const isAnyProducts = products.length > 0;

    return (
      <section className={styles.catalog}>
        {/* <Container className={styles.catalog__container}> */}
        <Container className={styles.catalog__container}>
          <Order />
  
          <div className={styles.catalog__wrapper}>
            <h2 className={styles.catalog__title}>{category[activeCategory]?.rus}</h2>
  
            <div className={styles.catalog__wrap_list}>
            {isAnyProducts
              ? (<ul className={styles.catalog__list}>
                
                  {products.map((good) => (
                      <li className={styles.catalog__item} key={good.id}>
                        <CatalogProduct item={good}/>
                      </li> 
                  ))}                  
              </ul>)
              : <p className={styles.emptyProducts}>К сожалению товаров данной категории нет</p>
            }
            </div>
          </div>
        </Container>
      </section>
    )
}

export default Catalog