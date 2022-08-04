import React, {useEffect} from 'react';
import Header from "./Components/Header/Header";
import Users from "./Components/Users/Users";
import { getUsers } from "./redux/slices/usersSlice";
import { useAppDispatch } from "./redux/store";
import { serviceApi } from "./api/serviceApi";

const App = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		serviceApi.getUsers()
			.then(data => dispatch(getUsers(data)))
	}, [dispatch])
	const email = 'email'
	const username = 'username'
	return (
		<div>
			<Header/>
			<div className="app">
				<Users email={email} username={username}/>
			</div>
		</div>
	)
}

export default App;
