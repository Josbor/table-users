import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/usersSlice'
import selectedUserReducer from '../features/selectedUserSlice'

export const store = configureStore({
  reducer: {
    users:usersReducer,
    selectedUser:selectedUserReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch