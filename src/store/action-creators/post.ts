import { Dispatch } from '@reduxjs/toolkit'
import { PostAction, PostActionTypes } from '../../types/post'
import axios from 'axios'

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionTypes.FETCH_POSTS })
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1'
      )
      dispatch({
        type: PostActionTypes.FETCH_POSTS_SUCCESS,
        payload: response.data,
      })
    } catch (error) {
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: 'Fetch posts error',
      })
    }
  }
}
