import { combineReducers } from '@reduxjs/toolkit'
import { postReducer } from './post-reducer'
import { todoReducer } from './todo-reducer'

export const rootReducer = combineReducers({
  post: postReducer,
  todo: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>
