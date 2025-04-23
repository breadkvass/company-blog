import { useEffect, useState } from 'react';
import styles from './PostsPage.module.css';
import SearchIcon from '../../components/icons/SearchIcon';
import { getPosts } from '../../utils/api';
import { Article } from '../../utils/types';
import Card from '../../components/card/Card';


  
const PostsPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [articles, setArticles] = useState<Article[]>([]);
    const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);
    const [ isLoading, setIsLoading ] = useState(true);

    const handleSearch = (value: string) => {
        setSearchValue(value);
        const filtered = articles.filter(article =>
            article.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredArticles(filtered);
    };

    useEffect(() => {
        getPosts()
            .then((res) => setArticles(res))
            .finally(() => setIsLoading(false))
    }, [])

    const visibleArticles = searchValue ? filteredArticles : articles;

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
            {isLoading ? '' :
                <div className={styles.posts}>
                <Card cardType='big' article={articles[0]}/>
                <ul>
                    {visibleArticles.slice(1).map(article => (
                        <li key={article.id} ><Card cardType='small' article={article}/></li>
                    ))}
                </ul>
            </div>
            }
            
        </main>
    )
}

export default PostsPage;