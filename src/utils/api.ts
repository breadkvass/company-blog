const BASE_URL = 'https://jsonplaceholder.typicode.com';

const checkResponse = (res: Response) => {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((err: Error) => {
      return Promise.reject(err);
    });
};

export const getPosts = async () => {
    return await fetch(`${BASE_URL}/posts`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET", 
    })
    .then(checkResponse)
  };

export const getRandomPhoto = async () => {
    return await fetch(`${BASE_URL}/albums/1/photos`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET", 
    })
    .then(checkResponse)
    // .then(photos => photos[Math.floor(Math.random() * photos.length)])
    .then(photos => console.log(photos))
}