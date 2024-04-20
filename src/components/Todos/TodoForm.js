import React from 'react'
import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'
const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('')

    const onSubmitHamdler = (event) => {
        event.preventDefault();
        if (!(text.length === 0)) { addTodo(text) }
        if (text.length > 25) {
            addTodo(text.slice(0, 25) + '...');
        }
        setText('')
    }
    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHamdler}>
                <input placeholder='Enter new todo' value={text} onChange={(e) => setText(e.target.value)} />
                <Button type='submit' title='Submit'>Submit</Button>
            </form>
        </div>
    )
}

export default TodoForm