export type PostType = {
	userid: number
	id: number
	title: string
	body: string
	likes: number
	comments?: {}[]
	liked: boolean
	isVisibleComment: boolean
}
export interface IPost {
	post: PostType,
	avatar: string
	comments: CommentType[]
}
export type PostsComponentType = {
	postsArray: PostType[] | null
	avatar: string
	comments: CommentType[]
}
export type CommentType = {
	postId: number,
	id: number,
	name: string,
	email: string,
	body: string
}
