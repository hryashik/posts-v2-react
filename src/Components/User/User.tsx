import React from "react";
import style from './User.module.scss'
import { UserType } from "../../@types/types";

const User: React.FC<UserType> = ({ username, name, id, activeUser, avatar, clickOnAvatar }) => {
	function calcStyle() {
		if (activeUser === id) {
			return `${style.userCard__avatar} + ${style.active}`
		} else {
			return style.userCard__avatar
		}
	}

	return (
		<div className={style.userCard}>
			<img src={avatar} onClick={() => clickOnAvatar(id)} className={calcStyle()}></img>
			<p className={style.userCard__username}>{username}</p>
			<p className={style.userCard__name}>{name}</p>
		</div>
	)
}

export default User
