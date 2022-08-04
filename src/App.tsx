import React, { useEffect } from 'react';
import Header from "./Components/Header/Header";
import Users from "./Components/Users/Users";
import { changeActiveUser, fetchUsers } from "./redux/slices/userSlice/usersSlice";
import { useAppDispatch } from "./redux/store";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const App = () => {
	const dispatch = useAppDispatch()
	const usersArray = useSelector((state: RootState) => state.usersSlice.users)
	const activeUser = useSelector((state: RootState) => state.usersSlice.activeUser)
	const clickOnAvatar = (id: number) => dispatch(changeActiveUser(id))

	useEffect(() => {
		setTimeout(() => {
			dispatch(fetchUsers())
		}, 1500)
	}, [ dispatch ])

	return (
		<div>
			<Header/>
			<div className="app">
				{usersArray
					? <Users usersArray={usersArray} activeUser={activeUser} clickOnAvatar={clickOnAvatar}/>
					: 'Идет загрузка'
				}
			</div>
		</div>
	)
}

export default App;
