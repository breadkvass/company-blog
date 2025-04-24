import { FC, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Article, CardType } from '../../utils/types';
import { getPastelColor } from '../../utils/utils';
import BackIcon from '../icons/BackIcon';
import Likes from '../likes/Likes';
import styles from './Card.module.css';

type CardProps = {
    article: Article;
    cardType: CardType;
    navigate: (route: string) => void;
    backgroundColor?: string;
}

const Card: FC<CardProps> = ({article, cardType, navigate, backgroundColor}) => {

    const imgText = article ?  article.title.split(' ')[0] : '';
    const imgBackground = useMemo(() => {return article ? getPastelColor(article.body.length): ''}, [article]);

    return ( article &&
        (cardType === 'full-page' ? (
            <div className={styles.page}>
                <div className={styles.header}>
                    <NavLink to={'/posts'}>
                        <BackIcon />
                        <p>Вернуться к статьям</p>
                    </NavLink>
                    <Likes />
                </div>
                <h2>{article.title}</h2>
                <div className={styles.fullPageCard}>
                    <img src={`https://placehold.co/850x480/${backgroundColor}/white?text=${imgText}`} loading='lazy' />
                    <p className={styles.text}>{article.body}</p>
                </div>
            </div>
        ) : (
            cardType === 'big' ? (
                <div className={styles.big}>
                    <img src={`https://placehold.co/1140x600/${imgBackground}/white?text=${imgText}`} loading='lazy' />
                    <div className={styles.description}>
                        <div className={styles.header}>
                            <h3>{article.title}</h3>
                            <Likes />
                        </div>
                        <p>{article.body}</p>
                        <button className={styles.readMoreButton} onClick={() => navigate(`/posts/${article.id}`)}>Читать далее</button>
                    </div>
                </div>
            ) : (
                <div className={styles.small}>
                    <img src={`https://placehold.co/600x300/${imgBackground}/white?text=${imgText}`} loading='lazy'/>
                    <div className={styles.description}>
                        <h3>{article.title}</h3>
                        <div className={styles.header}>
                            <Likes />
                            <button className={styles.readMoreButton} onClick={() => navigate(`/posts/${article.id}`)}>Читать далее</button>
                        </div>
                    </div>
                </div>
            )
        ))
    )
}

export default Card;