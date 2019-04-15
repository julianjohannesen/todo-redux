import React from 'react'
import Header from './Header.js'
import TodoList from './TodoList.js'
import Footer from './Footer.js'

export default function Todo() {
  return (
    <div className="container">
      <Header />
      <TodoList />
      <Footer />
    </div>
  )
}
