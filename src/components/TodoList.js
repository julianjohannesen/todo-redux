import React from 'react'
import TodoItem from './TodoItem.js'

export default function TodoList() {

    //temp 
    const todoList = [
        { text: "Item one" },
        { text: "Item two" },
        { text: "Item three" }
    ]

    return (
        <main className="main section">
            <ul>
                {todoList.map(todo => (
                    <TodoItem todo={todo} />
                )
                )}
            </ul>
        </main>
    )
}
