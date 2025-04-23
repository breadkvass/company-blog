export type Article = {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export type CardType = 'small' | 'big' | 'full-page';

export type Image = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}