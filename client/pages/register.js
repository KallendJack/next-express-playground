import React, { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import AuthContext from '../context/auth/authContext'

const Register = props => {
  const router = useRouter()
  const authContext = useContext(AuthContext)
  const { register, error, clearErrors, isAuthenticated } = authContext
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/posts')
    }

    if (error === 'User already exists') {
      alert(error)
      clearErrors()
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history])

  const { name, email, password } = user

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()

    register({
      name,
      email,
      password
    })
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md m-auto mt-12 p-5 shadow-lg">
      <div className="py-3">
        <label htmlFor="name" className="block font-bold text-lg mb-1">
          Name
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          required
        />
      </div>
      <div className="py-3">
        <label htmlFor="email" className="block font-bold text-lg mb-1">
          Email
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
          type="text"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
      </div>
      <div className="py-3">
        <label htmlFor="password" className="block font-bold text-lg mb-1">
          Password
        </label>
        <input
          className="mb-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
      </div>
      <button className="bg-teal-300 hover:bg-teal-400 text-teal-800 font-bold py-2 px-4 rounded-l">
        Register
      </button>
    </form>
  )
}

export default Register
