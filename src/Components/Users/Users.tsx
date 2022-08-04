import React from "react";
import User from "../User/User";
import style from './Users.module.scss'
import { IUsers } from "../../@types/types";
import arrowImg from '../../assets/img/arrow.png'

const Users: React.FC<IUsers> = ({ usersArray, activeUser, clickOnAvatar }) => {
	const users = usersArray.map(element =>
		<User {...element}
					key={element.id}
					activeUser={activeUser}
					clickOnAvatar={clickOnAvatar}
		/>)
	return (
		<div className={style.wrapper}>
			<div className={style.users}>
				{users}
			</div>
			<div className={style.description}>
				<img className={style.description__arrow} src={arrowImg} alt=""/>
				<p>
					Select a user to view all information about him
				</p>
			</div>
		</div>
	)
}

export default Users
