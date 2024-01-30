import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import { TodoActionType, TodoActions } from '../../types/todo'

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoActions>) => {
    try {
      dispatch({ type: TodoActionType.FETCH_TODOS })
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        {
          params: {
            _limit: limit,
            _page: page,
          },
        }
      )
      dispatch({
        type: TodoActionType.FETCH_TODOS_SUCCESS,
        payload: response.data,
      })
    } catch (error) {
      dispatch({
        type: TodoActionType.FETCH_TODOS_ERROR,
        payload: 'Fetch todos error',
      })
    }
  }
}

export function setTodoPage(page: number): TodoActions {
  return { type: TodoActionType.SET_PAGE, payload: page }
}
