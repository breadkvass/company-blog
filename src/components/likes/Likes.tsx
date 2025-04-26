import { FC } from 'react';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { toggleDislike, toggleLike } from '../../redux/reactionsSlices';
import DislikeIcon from '../icons/DislikeIcon';
import LikeIcon from '../icons/LikeIcon';
import styles from './Likes.module.css';
import { updatePost } from '../../redux/postsSlice'; // Новый экшен

type LikesProps = {
    postId: string;
}

const Likes: FC<LikesProps> = ({ postId }) => {
    const dispatch = useDispatch();
    
    // Получаем актуальные данные из стора
    const { likes, dislikes } = useSelector((state: RootState) => state.reactions);
    const post = useSelector((state: RootState) => 
        state.posts.data.find(p => p.id === postId)
    );

    if (!post) return null;

    const isLiked = likes.includes(postId);
    const isDisliked = dislikes.includes(postId);

    const handleLike = () => {
        const newLikes = isLiked ? post.likes - 1 : post.likes + 1;
        const newDislikes = isDisliked ? post.dislikes - 1 : post.dislikes;
        
        dispatch(updatePost({
            ...post,
            likes: newLikes,
            dislikes: newDislikes
        }));
        
        dispatch(toggleLike(postId));
    };

    const handleDislike = () => {
        const newDislikes = isDisliked ? post.dislikes - 1 : post.dislikes + 1;
        const newLikes = isLiked ? post.likes - 1 : post.likes;
        
        dispatch(updatePost({
            ...post,
            likes: newLikes,
            dislikes: newDislikes
        }));
        
        dispatch(toggleDislike(postId));
    };

    return (
        <div className={styles.likes}>
            <div className={styles.counter}>
                <button 
                    onClick={handleLike}
                    className={isLiked ? styles.likeActive : ''}
                    aria-label={isLiked ? 'Убрать лайк' : 'Поставить лайк'}
                >
                    <LikeIcon />
                </button>
                <p>{post.likes}</p>
            </div>
            
            <div className={styles.counter}>
                <button 
                    onClick={handleDislike}
                    className={isDisliked ? styles.dislikeActive : ''}
                    aria-label={isDisliked ? 'Убрать дизлайк' : 'Поставить дизлайк'}
                >
                    <DislikeIcon />
                </button>
                <p>{post.dislikes}</p>
            </div>
        </div>
    );
};

export default Likes;