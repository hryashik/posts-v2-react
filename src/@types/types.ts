import { UserFetchType } from "../redux/slices/userSlice/types";

export type UserType = {
	username: string
	name: string
	id: number,
	activeUser: number | null
	clickOnAvatar: (id: number) => void
	avatar?: string
}

export type IUsers = {
	usersArray: UserFetchType[]
	activeUser: number | null
	clickOnAvatar: (id: number) => void
}
