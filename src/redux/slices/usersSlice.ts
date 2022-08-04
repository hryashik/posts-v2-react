import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { serviceApi } from "../../api/serviceApi";

export type InitialStateType = {
	users: null | []
}

const initialState = {
	users: null
} as InitialStateType

const usersSlice = createSlice({
	name: 'usersSlice',
	initialState,
	reducers: {
		getUsers(state, action: PayloadAction<[]>) {
			state.users = action.payload
		},
	},
})

export const { getUsers } = usersSlice.actions
export default usersSlice.reducer
