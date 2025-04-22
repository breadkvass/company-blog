import { FC, ReactNode } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './Layout.module.css';

type LayoutProps = {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;