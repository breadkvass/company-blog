import { useState } from 'react';
import styles from './PostsPage.module.css';
import SearchIcon from '../../components/icons/SearchIcon';

interface Article {
    id: number;
    title: string;
    content: string;
}
  
const PostsPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [articles] = useState<Article[]>([
        { id: 1, title: 'React Basics', content: 'Introduction to React...' },
        { id: 2, title: 'TypeScript Guide', content: 'TypeScript fundamentals...' },
        // ... другие статьи
      ]);
      const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

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

            <div className={styles.posts}>
                {filteredArticles.map(article => (
                    <div key={article.id}>{article.title}</div>
                ))}
            </div>
        </main>
    )
}

export default PostsPage;