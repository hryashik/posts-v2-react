import React from "react";
import User from "../User/User";
import style from './Users.module.scss'
import {IUsers} from "../../@types/types";


const Users: React.FC<IUsers> = ({email, username}) => {
	return (
		<div className={style.users}>
			<User email={email} username={username}/>
			<User email={email} username={username}/>
			<User email={email} username={username}/>
			<User email={email} username={username}/>
			<User email={email} username={username}/>
			<User email={email} username={username}/>
			<User email={email} username={username}/>
		</div>
	)
}

export default Users
