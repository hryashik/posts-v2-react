import axios from "axios";

export const serviceApi = {
	async getUsers() {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users')
		return response.data
	}
}
