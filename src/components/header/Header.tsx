import { NavLink } from 'react-router-dom';
// import Logo from '..';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink to={'/'}>
                {/* <img src={Logo} alt='Лого' /> */}
                <p>Логотип</p>
            </NavLink>
            
            <nav>
                <ul className={styles.links}>
                    <NavLink to={'/'}>Главная страница</NavLink>
                    <NavLink to={'/second'}>Страница 2</NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header;