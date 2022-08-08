import React from "react";
import style from './Post.module.scss'
import { IPost } from "../types";
import likeImg from '../../../assets/img/icons8-сердце-48.png'
import activeLikeImg from '../../../assets/img/activeLike.png'
import comImg from '../../../assets/img/icons8-тема-32.png'
import { likePost } from "../../../redux/slices/postsSlice/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisible } from "../../../redux/slices/postsSlice/postsSlice";
import { Comments } from "../Comments/Comments";

const Post: React.FC<IPost> = (props) => {
	const dispatch = useDispatch()

	function clickOnLike() {
		dispatch(likePost(props.post.id))
	}

	function clickOnComment() {
		dispatch(toggleVisible(props.post.id))
	}
	function selectComments() {
		return props.comments.filter(el => el.postId === props.post.id)
	}
	return (
		<div className={style.post}>
			<div className={style.post__content}>
				<div className={style.post__avatar}>
					<img src={props.avatar} alt=""/>
				</div>
				<div className={style.post__body}>
					<h4>{props.post.title}</h4>
					<p>{props.post.body}</p>
					<div className={style.media}>
						<div onClick={clickOnLike} className={style.media__like}>
							<img src={props.post.liked ? activeLikeImg : likeImg} alt=""/>
							<p>{props.post.likes}</p>
						</div>
						<div onClick={clickOnComment} className={style.media__comments}>
							<img src={comImg} alt=""/>
							<p>5</p>
						</div>
					</div>
				</div>
			</div>
			{props.post.isVisibleComment
				? <Comments comments={selectComments()}/>
				: ''
			}
		</div>
	)
}

export default Post
