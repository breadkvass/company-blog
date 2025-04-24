import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../../utils/api';
import { Article } from '../../utils/types';
import { useDispatch, useSelector } from '../../hooks/hooks';
import SearchIcon from '../../components/icons/SearchIcon';
import Card from '../../components/card/Card';
import styles from './PostsPage.module.css';
  
const PostsPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data, isLoading, hasError } = useSelector(state => state.posts);
    // const posts = useSelector(state => state);
    const [searchValue, setSearchValue] = useState('');
    const [filteredArticles, setFilteredArticles] = useState<Article[]>();

    const handleSearch = (value: string) => {
        setSearchValue(value);
        const filtered = data.filter(post =>
            post.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredArticles(filtered);
    };

    useEffect(() => {
        dispatch(getPosts())
      }, [dispatch]);

    const visibleArticles = searchValue ? filteredArticles : data;

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <h1>Блог</h1>
                <p>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
            </div>

            <div className={styles.searchInput}>
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Поиск по названию статьи"
                    value={searchValue}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
            {isLoading ? 'Загрузка...' : (
                data ? (
                    <div className={styles.posts}>
                    <Card navigate={navigate} cardType='big' article={data[0]}/>
                    <ul>
                        {visibleArticles && visibleArticles.slice(1).map(article => (
                            <li key={article.id} ><Card navigate={navigate} cardType='small' article={article}/></li>
                        ))}
                    </ul>
                </div>
                ) : (hasError ? 'Ошибка загрузки' : 'Неизвестная ошибка')
            )}
        {/* {hasError && 'Произошла ошибка'}
        {!isLoading && !hasError && data && data.length > 0 &&
                <div className={styles.posts}>
                    <Card navigate={navigate} cardType='big' article={data[0]}/>
                    <ul>
                        {visibleArticles && visibleArticles.slice(1).map(article => (
                            <li key={article.id} ><Card navigate={navigate} cardType='small' article={article}/></li>
                        ))}
                    </ul>
                </div>
            } */}
            
        </main>
    )
}

export default PostsPage;