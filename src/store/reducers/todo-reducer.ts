import { TodoActionType, TodoActions, TodoState } from '../../types/todo'

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: null,
  page: 1,
  limit: 10,
}

export const todoReducer = (
  state = initialState,
  action: TodoActions
): TodoState => {
  switch (action.type) {
    case TodoActionType.FETCH_TODOS:
      return {
        ...state,
        isLoading: true,
      }

    case TodoActionType.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      }

    case TodoActionType.FETCH_TODOS_ERROR:
      return {
        ...state,
        error: action.payload,
      }

    case TodoActionType.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      }

    default:
      return state
  }
}
