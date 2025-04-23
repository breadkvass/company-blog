// import { FC, useEffect, useState } from 'react';
// import { Article, CardType, Image } from '../../utils/types';
import { FC } from 'react';
import { Article, CardType } from '../../utils/types';
import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';
import BackIcon from '../icons/BackIcon';
import Likes from '../likes/Likes';
import { getRandomPastelColor } from '../../utils/utils';

type CardProps = {
    article: Article;
    cardType: CardType;
}

const Card: FC<CardProps> = ({article, cardType}) => {

    const imgText = article.title.split(' ')[0];
    const imgBackground = getRandomPastelColor();

    return (
        cardType === 'full-page' ? (
            <div className={styles.full}>
                <div className={styles.header}>
                    <NavLink to={'./post'}>
                        <BackIcon />
                        <p>Вернуться к статьям</p>
                    </NavLink>
                    <Likes />
                </div>
                <div className={styles.fullPageCard}>
                    <h3>{article.title}</h3>
                    <img src={`https://placehold.co/600x300/${imgBackground}/white?text=${imgText}`} loading='lazy' />
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
                        <button className={styles.readMoreButton}>Читать далее</button>
                    </div>
                </div>
            ) : (
                <div className={styles.small}>
                    <img src={`https://placehold.co/850x480/${imgBackground}/white?text=${imgText}`} loading='lazy'/>
                    <div className={styles.description}>
                        <h3>{article.title}</h3>
                        <div className={styles.header}>
                            <Likes />
                            <button className={styles.readMoreButton}>Читать далее</button>
                        </div>
                    </div>
                </div>
            )
        )
    )
}

export default Card;