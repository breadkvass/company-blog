import Layout from '../../components/layout/Layout';
import styles from './MainPage.module.css';

const MainPage = () => {
    return (
        <Layout>
            <main className={styles.main}>
                <h1 className={styles.title}>Главная страница</h1>
            
            </main>
        </Layout>
    )
}

export default MainPage