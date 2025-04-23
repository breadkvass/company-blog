import DislikeIcon from '../icons/DislikeIcon';
import LikeIcon from '../icons/LikeIcon';
import styles from './Likes.module.css';

const Likes = () => {
    return (
        <div className={styles.likes}>
            <div className={styles.counter}>
                <LikeIcon />
                <p>26</p>
            </div>
            <div className={styles.counter}>
                <DislikeIcon />
                <p>13</p>
            </div>
        </div>
    )
}

export default Likes;