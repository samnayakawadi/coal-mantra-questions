import { useState } from "react"
import { useDispatch } from "react-redux"
import { todoActions } from "../store/todoslice/todoSlice"

const AddTasks = () => {

    const defaultData = {
        taskName: "",
        inProgress: false,
        inReview: false,
        isCompleted: false
    }

    const [newTask, setNewTask] = useState(defaultData)

    const dispatch = useDispatch()

    const taskNameChangeHandler = (e) => {
        setNewTask(prevState => { return { ...prevState, taskName: e.target.value } })
    }

    const selectHandler = (e) => {
        setNewTask(prevState => { return { ...prevState, [e.target.name]: !prevState[e.target.name] } })
    }

    const submitHandler = () => {
        dispatch(todoActions.addToDo(newTask))
        setNewTask(defaultData)
    }


    return (
        <div>

            <div>
                <div>
                    Task Name {" "}
                    <input type="text" onChange={taskNameChangeHandler} value={newTask.taskName} />
                </div>
            </div>

            <br />


            <div>
                <div>
                    In Progress {" "}
                    <input type="checkbox" checked={newTask.inProgress} name="inProgress" onClick={selectHandler} />
                </div>
                <div>
                    In Review {" "}
                    <input type="checkbox" checked={newTask.inReview} name="inReview" onClick={selectHandler} />
                </div>
                <div>
                    Completed {" "}
                    <input type="checkbox" checked={newTask.isCompleted} name="isCompleted" onClick={selectHandler} />
                </div>
            </div>

            <br />
            <br />

            <button onClick={submitHandler}>Add To Do To Available Tasks</button>
        </div>
    )
}

export default AddTasks