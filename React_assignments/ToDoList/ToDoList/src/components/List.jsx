import React from 'react'
import styles from './List.module.css'

const List = (props) => { //taking in props 
    return (
        <fieldset>
            <legend>To Do List</legend>
            {props.list.map((todoTask, i) => 
            //maping over the list of tasks and rendering task item
            //for each task item - display tasktext with line through if completed, rendering check box and delete button 
            <div className={styles.todotaskitem} key={i}>
                <p style={{textDecoration: todoTask.completed ? "line-through" : 'none'}}>{todoTask["To-Do"]}</p>
                <input type="checkbox" checked={todoTask.completed} onChange={() => props.updateTask(i)} /> 
                <button className={styles.btn} onClick={() => props.deleteTask(i)}>Delete</button>
            </div>
            )
        }
        </fieldset>
    )
}

export default List