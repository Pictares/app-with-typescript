export interface IPostItem {
  id: number
  title: string
  body: string
}

export interface PostState {
  posts: IPostItem[]
  isLoading: boolean
  error: null | string
}

export enum PostActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
}

interface fetchPostsAction {
  type: PostActionTypes.FETCH_POSTS
}

interface fetchPostsSuccessAction {
  type: PostActionTypes.FETCH_POSTS_SUCCESS
  payload: IPostItem[]
}

interface fetchPostsErrorAction {
  type: PostActionTypes.FETCH_POSTS_ERROR
  payload: string
}

export type PostAction =
  | fetchPostsAction
  | fetchPostsSuccessAction
  | fetchPostsErrorAction
