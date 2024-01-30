import { useSelector } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPosts } from '../../store/action-creators/post'
import { useActions } from '../../hooks/useActions'

export const PostList: React.FC = () => {
  const { isLoading, posts, error } = useTypedSelector((state) => state.post)

  const { fetchPosts } = useActions()

  useEffect(() => {
    fetchPosts()
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <p>Post list</p>
      <hr />
      <div>
        {posts.map((p) => (
          <div key={p.id}>
            {p.id}. {p.title}
          </div>
        ))}
      </div>
    </div>
  )
}
