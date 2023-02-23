import Container from '../Container/Container';
import Order from '../Order/Order';
import styles from './Catalog.module.css';
import CatalogProduct from '../CatalogProduct/CatalogProduct';

import './catalog.css';
//import './product.css';

import { goodsList } from '../../constants/goodsList.js';


const Catalog = () => {
    return (
      <section className={styles.catalog}>
        {/* <Container className={styles.catalog__container}> */}
        <Container className={styles.catalog__container}>
          <Order />
  
          <div className={styles.catalog__wrapper}>
            <h2 className={styles.catalog__title}>Бургеры</h2>
  
            <div className={styles.catalog__wrap_list}>
              <ul className={styles.catalog__list}>
                {goodsList.map((good, index) => (
                      <li className={styles.catalog__item} key={index}>
                        <CatalogProduct title={good.title}/>
                      </li> 
                  ))
                }
              </ul>
            </div>
          </div>
        </Container>
      </section>
    )
}

export default Catalog