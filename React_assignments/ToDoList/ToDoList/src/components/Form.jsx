import React, {useState} from 'react'
import styles from './List.module.css'

const Form = ({todoTask}) => {
    const [task, setTask] = useState(""); // state variable of task

    const newTask = (e) => { //function to handle task submission 
        e.preventDefault();
        todoTask(task); // calling on todoTask function to add new task with the current task value
        setTask(''); //clear task field 
    }


    return (
        <fieldset>
            <legend>Add to your List</legend>
            {/* run newTask function */}
            <form onSubmit={newTask}> 
                <input type="text" placeholder='Add Your Task!' value={task} onChange={(e) => setTask(e.target.value)} />
                <button type="submit">Add Task</button>
            </form>

        </fieldset>
    )
}


export default Form 