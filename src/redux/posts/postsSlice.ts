import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../../utils/types";

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
        }
    }
})

export const { setLoadingPosts, setDataPosts, setErrorPosts } = postsSlice.actions;
export default postsSlice.reducer;