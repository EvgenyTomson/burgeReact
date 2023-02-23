import styles from './Navigation.module.css';
import classNames from 'classnames';
import Container from '../Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/category/categorySlice';

const Navigation = () => {
    const { category, activeCategory } = useSelector((state) => state.category);
    const dispatch = useDispatch();

    return (
        <nav className={styles.navigation}>
            <Container className={styles.navigation__container}>
                {/* <div className={styles.navigation__container}> */}
                    <ul className={styles.navigation__list}>

                        {category.map((item, index) => (
                            <li className={styles.navigation__item} key={index}>
                                <button 
                                    className={classNames(styles.navigation__button,
                                        activeCategory === index ? styles.navigation__button_active : '')}
                                    style={{backgroundImage: `url(${item.image})`}}
                                    onClick={() => {
                                        dispatch(changeCategory({indexCategory: index}))
                                    }}>
                                    {item.rus}
                                </button>
                            </li>
                        ))}
                    </ul>
                {/* </div> */}
            </Container>
        </nav>
    )
};

export default Navigation;