import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPost } from '../../utils/api';
import { Article } from '../../utils/types';
import Card from '../../components/card/Card';
import styles from './PostPage.module.css';

const PostPage = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [ article, setArticle ] = useState<Article>();
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        if (id) {
            getPost(id)
                .then((res) => setArticle(res))
                .finally(() => setIsLoading(false))
        }
    }, [id])

    return (
        <main className={styles.main}>
            {isLoading ? 'Загрузка...' : (article ? <Card article={article} navigate={navigate} cardType='full-page' /> : 'Ошибка')}
        </main>
    )
}

export default PostPage;