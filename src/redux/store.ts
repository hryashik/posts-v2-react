import { configureStore } from '@reduxjs/toolkit'
import usersSlice from "./slices/userSlice/usersSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
	reducer: {
		usersSlice,
	},
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store
