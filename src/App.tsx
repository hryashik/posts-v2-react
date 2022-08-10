import React, { useEffect } from 'react';
import Header from "./Components/Header/Header";
import Users from "./Components/Users/Users";
import { changeActiveUser, fetchUsers } from "./redux/slices/userSlice/usersSlice";
import { fetchComments, fetchPosts } from "./redux/slices/postsSlice/postsSlice";
import { useAppDispatch } from "./redux/store";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import UserInfo from "./Components/UserInfo/UserInfo";
import Posts from "./Components/Posts/Posts";

const App: React.FC = () => {
	const dispatch = useAppDispatch()
	const usersArray = useSelector((state: RootState) => state.usersSlice.users)
	const activeUser = useSelector((state: RootState) => state.usersSlice.activeUser)
	const postsArray = useSelector((state: RootState) => state.postsSlice.posts)
	const commentsArray = useSelector((state: RootState) => state.postsSlice.comments)
	//Подгрузка юзеров
	useEffect(() => {
		setTimeout(() => {
			dispatch(fetchUsers())
			dispatch(fetchComments())
		}, 1500)
	}, [ dispatch ])

	if (!usersArray || !commentsArray) {
		return <>Идет загрузка приложения...</>
	}
	const clickOnAvatar = (id: number) => {
		dispatch(changeActiveUser(id))
		dispatch(fetchPosts(id))
	}
	const activeUserInfo = usersArray.find(elem => elem.id === activeUser)
	return (
		<div>
			<Header/>
			<div className="app">
				<div>
					<Users usersArray={usersArray} activeUser={activeUser} clickOnAvatar={clickOnAvatar}/>
				</div>
				{activeUserInfo && activeUserInfo.avatar ?
					<div>
						<UserInfo {...activeUserInfo} />
						<Posts comments={commentsArray} avatar={activeUserInfo.avatar} postsArray={postsArray} />
					</div>
					: ''}
			</div>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
		</div>
	)
}

export default App;
