import { configureStore } from '@reduxjs/toolkit'
import usersSlice from "./slices/userSlice/usersSlice";
import { useDispatch } from "react-redux";
import postsSlice from "./slices/postsSlice/postsSlice";

const store = configureStore({
	reducer: {
		usersSlice,
		postsSlice
	},
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store
