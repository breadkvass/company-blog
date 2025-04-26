import { NavigateFunction } from "react-router-dom";
import { FC } from "react";
import { Article } from "../../../utils/types";
import BackIcon from "../../icons/BackIcon";
import Likes from "../../likes/Likes";
import styles from "../Card.module.css";

type FullPageCardProps = {
  article: Article;
  navigate: NavigateFunction
}

const FullPageCard: FC<FullPageCardProps> = ({ article, navigate }) => (
  <div className={styles.page}>
    <div className={styles.header}>
      <button onClick={() => navigate('/posts')}>
        <BackIcon />
        <p>Вернуться к статьям</p>
      </button>
      <Likes postId={article.id}/>
    </div>
    <h2>{article.title}</h2>
    <div className={styles.fullPageCard}>
      <img src={`https://placehold.co/850x480/${article.img}/white?text=${article.imgText}`} loading='lazy' />
      <p className={styles.text}>{article.body}</p>
    </div>
  </div>
);

export default FullPageCard