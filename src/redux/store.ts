import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import reactionsReducer from './reactionsSlices';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    reactions: reactionsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;