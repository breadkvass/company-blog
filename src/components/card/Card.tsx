import { NavigateFunction } from 'react-router-dom';
import { FC } from 'react';
import { Article, CardType } from '../../utils/types';
import FullPageCard from './cards/FullPageCard';
import BigCard from './cards/BigCard';
import SmallCard from './cards/SmallCard';

type CardProps = {
  article: Article;
  cardType: CardType;
  navigate: NavigateFunction;
}

const Card: FC<CardProps> = ({ article, cardType, navigate }) => {
    if (!article) return null;
  
    const CardComponent = {
      'full-page': FullPageCard,
      'big': BigCard,
      'small': SmallCard
    }[cardType];
  
    return <CardComponent article={article} navigate={navigate} />;
};
  

export default Card;