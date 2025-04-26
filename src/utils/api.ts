import { setLoadingPosts, setDataPosts, setErrorPosts } from '../redux/postsSlice';
import { AppDispatch } from '../redux/store';
import { getRandomPastelColor } from './utils';
import { Article } from './types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const checkResponse = (res: Response) => {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((err: Error) => {
      return Promise.reject(err);
    });
};

const fetchGetPosts = () => {
    return fetch(`${BASE_URL}/posts`);
}

export const getPosts = () => (dispatch: AppDispatch) => {
  dispatch(setLoadingPosts());
  
  fetchGetPosts()
    .then(checkResponse)
    .then((res) => {
      const articles = res.map((article: Article) => {
        return {
          id: article.id.toString(),
          title: article.title,
          img: getRandomPastelColor(),
          body: article.body,
          userId: article.userId.toString(),
          imgText: article.title.split(' ')[0],
          likes: Math.floor(Math.random() * 51),
          dislikes: Math.floor(Math.random() * 51)
        }
      })
      dispatch(setDataPosts(articles));
    })
    .catch((error) => {
        const errorMessage = error instanceof Error 
            ? error.message 
            : 'Неизвестная ошибка при загрузке данных';
        setErrorPosts()
        console.log(errorMessage)
    })
};