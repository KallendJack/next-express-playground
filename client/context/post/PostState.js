import React, { useReducer } from 'react'
import axios from 'axios'
import PostContext from './postContext'
import PostReducer from './postReducer'
import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  DELETE_POST,
  SET_LOADING
} from '../types'

const PostState = props => {
  const initialState = {
    posts: [],
    post: {},
    loading: false
  }

  const [state, dispatch] = useReducer(PostReducer, initialState)

  // Get Posts
  const getPosts = async () => {
    setLoading()

    const res = await axios.get(`http://localhost:4000/posts`)

    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  }

  // Get Post
  const getPost = async id => {
    setLoading()

    const res = await axios.get(`http://localhost:4000/posts/${id}`)

    dispatch({
      type: GET_POST,
      payload: res.data
    })
  }

  // Add Post
  const addPost = async newPost => {
    await axios.post(`http://localhost:4000/posts`, newPost)

    dispatch({
      type: ADD_POST,
      payload: newPost
    })
  }

  // Delete Post
  const deletePost = async id => {
    await axios.delete(`http://localhost:4000/posts/${id}`)

    dispatch({
      type: DELETE_POST,
      payload: id
    })
  }

  //Set Loading
  const setLoading = () =>
    dispatch({
      type: SET_LOADING
    })

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        post: state.post,
        loading: state.loading,
        getPosts,
        getPost,
        addPost,
        deletePost
      }}
    >
      {props.children}
    </PostContext.Provider>
  )
}

export default PostState
