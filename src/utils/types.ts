export type Article = {
    body: string;
    id: string;
    title: string;
    userId: number;
    imgText: string;
    img: string;
    likes: number;
    dislikes: number;
}

export type CardType = 'small' | 'big' | 'full-page';

export type Image = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}