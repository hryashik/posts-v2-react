import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { serviceApi } from "../../../api/serviceApi";
import { CommentType, PostType } from "../../../Components/Posts/types";
import { RootState } from "../../store";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (id: number) => {
	return await serviceApi.getPosts(id)
})
export const fetchComments = createAsyncThunk('posts/fetchComments', async() => {
	return await serviceApi.getComments()
})

type InitialStateType = {
	posts: PostType[] | null
	comments: CommentType[] | null
}
const initialState: InitialStateType = {
	posts: null,
	comments: null
}

const postsSlice = createSlice({
	name: 'postsSlice',
	initialState,
	reducers: {
		likePost(state, action: PayloadAction<number>) {
			const post = state.posts?.find(el => el.id === action.payload)
			if (post && !post.liked) {
				post.likes += 1;
				post.liked = true
			} else if (post && post.liked) {
				post.likes -= 1;
				post.liked = false
			}
		},
		toggleVisible(state, action: PayloadAction<number>) {
			const foundPost = state.posts?.find(el => el.id === action.payload)
			if (foundPost) {
				foundPost.isVisibleComment = !foundPost.isVisibleComment
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPosts.pending, (state, action) => {
			state.posts = null
		})
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			let array = action.payload
			for (let i = 0; i < array.length; i++) {
				array[i].likes = i + 1;
				array[i].liked = false
				array[i].isVisibleComment = false
			}
			state.posts = array;
		})
		builder.addCase(fetchComments.fulfilled, (state, action) => {
			state.comments = action.payload
		})
	},
})

export const getCommentsSelector = (state: RootState, postId: number) => {
	return state.postsSlice.comments?.filter(el => el.postId === postId)
}
export const { likePost, toggleVisible } = postsSlice.actions
export default postsSlice.reducer
