import { FC, MouseEvent } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Article } from '../../../utils/types';
import Likes from '../../likes/Likes';
import styles from '../Card.module.css';

type SmallCardProps = {
  article: Article;
  navigate: NavigateFunction;
};

const SmallCard: FC<SmallCardProps> = ({ article, navigate }) => {
  const handleReadMore = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`/posts/${article.id}`);
  };

  return (
    <div className={styles.small}>
      <img 
          src={`https://placehold.co/600x300/${article.img}/white?text=${article.imgText}`} 
          alt={article.title}
          loading="lazy" 
      />
      <div className={styles.description}>
          <h3>{article.title}</h3>
          <div className={styles.header}>
              <Likes postId={article.id} />
              <button className={styles.readMoreButton} onClick={handleReadMore}>
                  Читать далее
              </button>
          </div>
      </div>
  </div>
  );
};

export default SmallCard;