import { FC, MouseEvent } from 'react';
import { Article, CardType } from '../../utils/types';
import BackIcon from '../icons/BackIcon';
import Likes from '../likes/Likes';
import styles from './Card.module.css';
import { NavigateFunction } from 'react-router-dom';

type CardProps = {
    article: Article;
    cardType: CardType;
    navigate: NavigateFunction;
}

const Card: FC<CardProps> = ({ article, cardType, navigate }) => {
    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        article && navigate(`/posts/${article.id}`);
    };

    if (!article) return null;

    return (
        <>
            {cardType === 'full-page' ? (
                <div className={styles.page}>
                    <div className={styles.header}>
                        <button onClick={() => navigate('/posts')}>
                            <BackIcon />
                            <p>Вернуться к статьям</p>
                        </button>
                        <Likes postId={article.id} />
                    </div>
                    <h2>{article.title}</h2>
                    <div className={styles.fullPageCard}>
                        <img 
                            src={`https://placehold.co/850x480/${article.img}/white?text=${article.imgText}`} 
                            alt={article.title}
                            loading="lazy" 
                        />
                        <p className={styles.text}>{article.body}</p>
                    </div>
                </div>
            ) : cardType === 'big' ? (
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
                        <button className={styles.readMoreButton} onClick={onClickHandler}>
                            Читать далее
                        </button>
                    </div>
                </div>
            ) : (
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
                            <button className={styles.readMoreButton} onClick={onClickHandler}>
                                Читать далее
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;