import { CommentType } from "../../types";
import style from './Comment.module.scss'
import React, { useEffect } from "react";


const Comment: React.FC<CommentType> = (props) => {
	return (
		<div className={style.wrapper}>
			<h5>{props.email}</h5>
			<p className={style.title}>{props.name}</p>
			<p>{props.body}</p>
		</div>
	)
}

export default Comment
