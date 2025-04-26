import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { getPosts } from '../../utils/api';
import { Article } from '../../utils/types';
import { RootState } from '../../redux/store';
import Card from '../../components/card/Card';
import styles from './PostPage.module.css';

const PostPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { data, isLoading, hasError } = useSelector((state: RootState) => state.posts);
    const [ post, setPost ] = useState<Article>();

    useEffect(() => {
        if (data.length === 0) {
            dispatch(getPosts());
        }

        setPost(data.find(post => post.id === id))
    }, [data])

    return (
        <main className={styles.main}>
            {post ? <Card article={post} navigate={navigate} cardType='full-page' /> : (
                isLoading ? (
                    'Загрузка статьи...'
                ) : (
                    hasError ? 'Ошибка' : null
                ))
            }
        </main>
    )
}

export default PostPage;