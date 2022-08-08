import React from "react";
import style from './Comments.module.scss'
import { CommentType } from "../types";
import Comment from "./Comment/Comment";

type Props = {
	comments: CommentType[]
}

export const Comments: React.FC<Props> = ({comments}) => {
	return (
		<div className={style.comments}>
			{comments.map(el => <Comment {...el} key={el.id}/> )}
		</div>
	)
}

