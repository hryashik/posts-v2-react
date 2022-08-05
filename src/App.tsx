import React, { useEffect } from 'react';
import Header from "./Components/Header/Header";
import Users from "./Components/Users/Users";
import { changeActiveUser, fetchUsers } from "./redux/slices/userSlice/usersSlice";
import { useAppDispatch } from "./redux/store";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import UserInfo from "./Components/UserInfo/UserInfo";

const App: React.FC = () => {
	const dispatch = useAppDispatch()
	const usersArray = useSelector((state: RootState) => state.usersSlice.users)
	const activeUser = useSelector((state: RootState) => state.usersSlice.activeUser)
	useEffect(() => {
		setTimeout(() => {
			dispatch(fetchUsers())
		}, 1500)
	}, [ dispatch ])
	if (!usersArray) {
		return <>Идет загрузка приложения...</>
	}
	const clickOnAvatar = (id: number) => {
		dispatch(changeActiveUser(id))
	}
	const activeUserInfo = usersArray.find(elem => elem.id === activeUser)
	return (
		<div>
			<Header/>
			<div className="app">
				<div>
					<Users usersArray={usersArray} activeUser={activeUser} clickOnAvatar={clickOnAvatar}/>
				</div>
				<div>
					{activeUserInfo ? <UserInfo {...activeUserInfo}/> : ''}
				</div>
			</div>
		</div>
	)
}

export default App;
