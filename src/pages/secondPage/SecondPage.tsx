import Layout from '../../components/layout/Layout';
import styles from './SecondPage.module.css';

const SecondPage = () => {
    return (
        <Layout>
            <main className={styles.second}>
                <h2>Вторая страница</h2>
            </main>
        </Layout>
    )
}

export default SecondPage;