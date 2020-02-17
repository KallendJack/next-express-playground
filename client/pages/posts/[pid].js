import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import PostContext from '../../context/post/postContext'
import AuthContext from '../../context/auth/authContext'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query
  const postContext = useContext(PostContext)
  const authContext = useContext(AuthContext)
  const { post, loading, getPost, deletePost } = postContext
  const { loadUser } = authContext

  useEffect(() => {
    loadUser()
    getPost(pid)
    // eslint-disable-next-line
  }, [])

  const { id, title, body } = post

  const onDeleteClick = async e => {
    e.preventDefault()

    await deletePost(id)
    router.push('/posts')
  }

  if (loading) {
    return <h1>Loading</h1>
  } else
    return (
      <div className="flex items-center justify-center w-full py-8">
        <div className="overflow-hidden rounded max-w-xl w-full shadow-lg leading-normal">
          <div className="block group p-4">
            <p className="font-bold text-lg mb-1">{title}</p>
            <p className="mb-2">{body}</p>
            <div className="inline-flex">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                Edit
              </button>
              <button
                onClick={onDeleteClick}
                className="ml-3 bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded-r"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Post
