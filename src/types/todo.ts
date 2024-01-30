export interface ITodoItem {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface TodoState {
  todos: ITodoItem[]
  isLoading: boolean
  error: null | string
  page: number
  limit: number
}

export enum TodoActionType {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  SET_PAGE = 'SET_PAGE',
}

interface fetchTodoAction {
  type: TodoActionType.FETCH_TODOS
}

interface fetchTodoSuccessAction {
  type: TodoActionType.FETCH_TODOS_SUCCESS
  payload: ITodoItem[]
}

interface fetchTodoErrorAction {
  type: TodoActionType.FETCH_TODOS_ERROR
  payload: string
}

interface setPage {
  type: TodoActionType.SET_PAGE
  payload: number
}

export type TodoActions =
  | fetchTodoAction
  | fetchTodoSuccessAction
  | fetchTodoErrorAction
  | setPage
