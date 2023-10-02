import React from 'react'
import styles from './List.module.css'

const List = (props) => {
    return (
        <fieldset>
            <legend>To Do List</legend>
            {props.list.map((todoTask, i) =>
            <div className={styles.todotaskitem} key={i}>
                <p style={{textDecoration: todoTask.completed ? "line-through" : 'none'}}>{todoTask["To-Do"]}</p>
                <input type="checkbox" checked={todoTask.done} onChange={() => props.updateTask(i)} />
                <button className={styles.btn} onClick={() => props.deleteTask(i)}>Delete</button>
            </div>
            )
        }
        </fieldset>
    )
}

export default List