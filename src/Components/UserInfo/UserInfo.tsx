import React from "react";
import style from './UserInfo.module.scss'
import { UserFetchType } from "../../redux/slices/userSlice/types";
import arrowImg from '../../assets/img/arrow.png'

const UserInfo: React.FC<UserFetchType> = (props) => {
	return (
		<div className={style.wrapper}>
			<div className={style.avatar}>
				<img src={props.avatar} alt=""/>
			</div>
			<div className={style.infoList}>
				<p><strong>Name: </strong>{props.name}</p>
				<p><strong>Username: </strong>{props.username}</p>
				<p><strong>Email: </strong>{props.email}</p>
				<p><strong>Phone: </strong>{props.phone}</p>
				<p><strong>Website: </strong>{props.website}</p>
				<p><strong>Work: </strong>{props.company.name}</p>
			</div>
			<div className={style.description}>
				<p>Below you can see the posts of this user</p>
				<img src={arrowImg} alt=""/>
			</div>
		</div>
	)
}

export default UserInfo
