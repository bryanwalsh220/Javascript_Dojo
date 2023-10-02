import React, {useState} from 'react'
import styles from './List.module.css'

const Form = ({todoTask}) => {
    const [task, setTask] = useState("");

    const newTask = (e) => {
        e.preventDefault();
        todoTask(task);
        setTask('');
    }


    return (
        <fieldset>
            <legend>Add to your List</legend>
            <form onSubmit={newTask}>
                <input type="text" placeholder='Add Your Task!' value={task} onChange={(e) => setTask(e.target.value)} />
                <button type="submit">Add Task</button>
            </form>

        </fieldset>
    )
}


export default Form 