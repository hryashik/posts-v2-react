import React from "react";
import style from './Posts.module.scss'
import Post from "./Post/Post";
import { PostsComponentType, PostType } from "./types";
import Preloader from "../Preloader/Preloader";
import arrow from '../../assets/img/arrow.png'

const Posts: React.FC<PostsComponentType> = ({ postsArray, avatar , comments}) => {
	if (!postsArray) {
		return <div><Preloader/></div>
	}
	const posts = postsArray.map((element) => <Post comments={comments} avatar={avatar} post={element} key={element.id}/>)
	return (
		<div className={style.wrapper}>
			<div className={style.description}>
				<p>You can like or read comments</p>
				<img src={arrow} alt=""/>
			</div>
			<div className={style.postsWrapper}>
				{posts}
			</div>
		</div>
	)
}

export default Posts
