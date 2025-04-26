import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReactionsState {
  likes: string[];
  dislikes: string[];
}

const initialState: ReactionsState = {
  likes: [],
  dislikes: [],
};

const reactionsSlice = createSlice({
  name: 'reactions',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<string>) => {
      const postId = action.payload;
      const likeIndex = state.likes.indexOf(postId);
      const dislikeIndex = state.dislikes.indexOf(postId);

      if (likeIndex === -1) {
        state.likes.push(postId);
        if (dislikeIndex !== -1) {
          state.dislikes.splice(dislikeIndex, 1);
        }
      } else {
        state.likes.splice(likeIndex, 1);
      }
    },
    
    toggleDislike: (state, action: PayloadAction<string>) => {
      const postId = action.payload;
      const dislikeIndex = state.dislikes.indexOf(postId);
      const likeIndex = state.likes.indexOf(postId);

      if (dislikeIndex === -1) {
        state.dislikes.push(postId);
        if (likeIndex !== -1) {
          state.likes.splice(likeIndex, 1);
        }
      } else {
        state.dislikes.splice(dislikeIndex, 1);
      }
    },
  },
});

export const { toggleLike, toggleDislike } = reactionsSlice.actions;
export default reactionsSlice.reducer;