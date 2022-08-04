import axios from "axios";
import { UserFetchType } from "../redux/slices/userSlice/types";

export const serviceApi = {
	async getUsers() {
		const response = await axios.get<UserFetchType[]>('https://jsonplaceholder.typicode.com/users')
		return response.data
	}
}
