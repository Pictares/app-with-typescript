import s from './App.module.css'
import { PostList } from './components/PostList/PostList'
import { TodoList } from './components/TodoList/TodoList'

export const App = () => {
  return (
    <div className={s.className}>
      <p>App</p>
      <PostList />
      <hr />
      <TodoList />
    </div>
  )
}
