import React from "react";
import style from './User.module.scss'
import {UserType} from "../../@types/types";


const User: React.FC<UserType> = ({username, email}) => {
	return (
		<div className={style.userCard}>
			<div className={style.userCard__avatar}></div>
			<p className={style.userCard__username}>{username}</p>
			<p>{email}</p>
		</div>
	)
}

export default User
