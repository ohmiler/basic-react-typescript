import React from 'react'
import { Todo } from '../App'

type TodoProps = Todo & {
    toggleDone: (id: number) => void,
    deleteTodo: (id: number) => void,
}

function TodoComponent({ id, todo, isDone, toggleDone, deleteTodo }: TodoProps) {
  return (
    <li 
        className={isDone ? "done" : ""}
        onClick={() => toggleDone(id)}
    >
        <p>{todo}</p>
        <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  )
}

export default TodoComponent