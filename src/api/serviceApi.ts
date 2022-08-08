import axios from "axios";
import { UserFetchType } from "../redux/slices/userSlice/types";
import { PostType } from "../Components/Posts/types";

export const serviceApi = {
	async getUsers() {
		const response = await axios.get<UserFetchType[]>('https://jsonplaceholder.typicode.com/users')
		return response.data
	},
	async getPosts(id: number) {
		const response = await axios.get<PostType[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`, {params: {
			_limit: 5
			}})
		return response.data
	},
	async getComments() {
		const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
		return response.data
	}
}
