import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  DELETE_POST,
  SET_LOADING
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      }
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      }
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
