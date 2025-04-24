import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from '../../hooks/hooks';
import { useEffect, useMemo, useState } from 'react';
import { getPost } from '../../utils/api';
import { Article } from '../../utils/types';
import { getPastelColor } from '../../utils/utils';
import Card from '../../components/card/Card';
import styles from './PostPage.module.css';

const PostPage = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const { data } = useSelector(state => state.posts);
    const [ post, setPost ] = useState<Article>();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(false);

    const article = useMemo(() => data.find(ingredient => ingredient.id.toString() === id), []);
    
    const imgBackground = useMemo(() =>{ return article ? getPastelColor(article.body.length) : ''}, [article]);

    useEffect(() => {
        if (id) {
            if (article && data.length > 0) {
                setPost(article);
            } else {
                setIsLoading(true);
                getPost(id)
                    .then((res) => setPost(res))
                    .catch(() => setIsError(true))
                    .finally(() => setIsLoading(false))
           }
        }
    }, [id, data])

    return (
        <main className={styles.main}>
            {isLoading ? (
                'Загрузка статьи...'
            ) : (
                isError ? ('Ошибка загрузки') : (post && <Card article={post} navigate={navigate} cardType='full-page' backgroundColor={imgBackground} />)
            )}
        </main>
    )
}

export default PostPage;