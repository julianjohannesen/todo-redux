import React from 'react'
import Nav from './Nav.js'

export default function Header() {
  return (
    <div className="header-wrapper section">
      <header className="header">
        <h1 className="title is-size-2">Title</h1>
        <h2 className="subtitle is-size-3">Subtitle</h2>
      </header>
      <Nav />
    </div>
  )
}
