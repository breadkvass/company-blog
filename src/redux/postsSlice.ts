import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../utils/types";

export type PostsState = {
    data: Article[];
    isLoading: boolean;
    hasError: boolean;
}

const initialState: PostsState = {
    isLoading: false,
    hasError: false,
    data: []
}

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        setLoadingPosts: (state) => {
            state.isLoading = true;
        },
        setDataPosts: (state, action: PayloadAction<Article[]>) => {
            state.isLoading = false;
            state.hasError = false;
            state.data = action.payload;
        },
        setErrorPosts: (state) => {
            state.isLoading = false;
            state.hasError = true;
            state.data = [];
        },
        updatePost: (state, action: PayloadAction<Article>) => {
            const index = state.data.findIndex(post => post.id === action.payload.id);
            if (index !== -1) {
              state.data[index] = action.payload;
            }
        },
    }
})

export const { setLoadingPosts, setDataPosts, setErrorPosts, updatePost } = postsSlice.actions;
export default postsSlice.reducer;