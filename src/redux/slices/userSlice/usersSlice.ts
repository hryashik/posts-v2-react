import { createSlice, PayloadAction, } from '@reduxjs/toolkit'
import { serviceApi } from "../../../api/serviceApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserFetchType } from "./types";
import { avatars } from "../../../assets/avatars";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	return await serviceApi.getUsers()
})

type InitialStateType = {
	users: UserFetchType[] | null
	activeUser: number | null
}
const initialState: InitialStateType = {
	users: null,
	activeUser: null
}

const usersSlice = createSlice({
	name: 'usersSlice',
	initialState,
	reducers: {
		changeActiveUser(state, action: PayloadAction<number>) {
			state.activeUser = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			const users = action.payload
			users.forEach(elem => elem.avatar = avatars[elem.id - 1])
			state.users = users;
		})
	},
})

export const {changeActiveUser} = usersSlice.actions
export default usersSlice.reducer

