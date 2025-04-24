import { setLoadingPosts, setDataPosts, setErrorPosts } from '../redux/posts/postsSlice';
import { AppDispatch } from '../redux/store';

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
      dispatch(setDataPosts(res));
    })
    .catch((error) => {
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Неизвестная ошибка при загрузке данных';
      console.log(errorMessage)
    })
    .finally(() => {
      // Любая дополнительная логика после завершения запроса
      // Например, можно добавить трекинг завершения загрузки
    });
};


// export const getPosts = () => {
//     return (dispatch: AppDispatch) => {
//       dispatch(setLoadingPosts());
  
//       fetchGetPosts()
//           .then(checkResponse)
//           .then(checkResponse)
//           .then(res => dispatch(setDataPosts(res)))
//           .catch(err => {
//               dispatch(setErrorPosts());
//               console.log(err);
//           })
//     }
// }

// export const getPosts = async () => {
//     return await fetch(`${BASE_URL}/posts`, {
//         headers: {
//             "Content-Type": "application/json"
//         },
//         method: "GET", 
//     })
//     .then(checkResponse)
// };

export const getPost = async (id: string) => {
    return await fetch(`${BASE_URL}/posts/${id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET", 
    })
    .then(checkResponse)
};