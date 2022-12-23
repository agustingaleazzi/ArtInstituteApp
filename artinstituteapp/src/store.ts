import {configureStore } from '@reduxjs/toolkit';
import obrasApp from './reducers/reducers';

const store = configureStore(
        {reducer: obrasApp}
    )

    // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
