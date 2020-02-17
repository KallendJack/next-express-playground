import React from 'react'
import App from 'next/app'
import '../assets/css/style.css'

import Header from '../components/layout/Header'

import PostState from '..//context/post/PostState'
import AuthState from '../context/auth/AuthState'
import setAuthToken from '../utils/setAuthToken'

class MyApp extends App {
  componentDidMount() {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <AuthState>
        <PostState>
          <Header />
          <Component {...pageProps} />
        </PostState>
      </AuthState>
    )
  }
}

export default MyApp
