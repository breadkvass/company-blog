import { MouseEvent } from 'react';
import { Article } from '../../../utils/types';
import { NavigateFunction } from 'react-router-dom';
import Likes from '../../likes/Likes';
import styles from '../Card.module.css';

type Props = {
  article: Article;
  navigate: NavigateFunction;
};

const BigCard = ({ article, navigate }: Props) => {
  const handleReadMore = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`/posts/${article.id}`);
  };

  return (
    <div className={styles.big}>
      <img 
        src={`https://placehold.co/1140x600/${article.img}/white?text=${article.imgText}`} 
        alt={article.title}
        loading="lazy" 
      />
      <div className={styles.description}>
        <div className={styles.header}>
          <h3>{article.title}</h3>
          <Likes postId={article.id} />
        </div>
        <p>{article.body}</p>
        <button className={styles.readMoreButton} onClick={handleReadMore}>
          Читать далее
        </button>
      </div>
    </div>
  );
};

export default BigCard;