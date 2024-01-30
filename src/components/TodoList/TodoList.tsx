import { useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const TodoList: React.FC = () => {
  const { todos, isLoading, error, limit, page } = useTypedSelector(
    (state) => state.todo
  )

  const { fetchTodos } = useActions()

  useEffect(() => {
    fetchTodos(page, limit)
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <p>Todo list</p>
      <hr />
      <div>
        {todos.map((t) => (
          <div key={t.id}>
            {t.id}. {t.title}
          </div>
        ))}
      </div>
    </div>
  )
}
