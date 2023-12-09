import { useDispatch, useSelector } from "react-redux"
import { todoActions } from "../store/todoslice/todoSlice"

const DisplayData = () => {

    const store = useSelector(prevState => prevState.store)

    const dispatch = useDispatch()

    const taskMoverHandler = (index, location) => {
        dispatch(todoActions.nextTodo({ index, location }))
    }

    return (
        <div>
            <hr></hr>
            Available Todos
            <br />
            <br />
            {store.todos.map((singleTodo, singleIndex) => {
                return <div style={{ border: "1px solid blue", padding: "5px", margin: "5px" }} key={singleIndex}>
                    <div style={{ paddingTop: "3px" }}>Task Id : {singleIndex + 1}</div>
                    <div style={{ paddingTop: "3px" }}>Task Name : {singleTodo.taskName}</div>
                    <div style={{ paddingTop: "3px" }}>Action : <button onClick={() => { taskMoverHandler(singleIndex, "todos") }}>Next</button></div>
                </div>
            })}
            {store.todos.length === 0 && <div style={{ border: "1px solid red", padding: "5px", margin: "5px" }}>
                No Available Tasks
            </div>}

            <hr></hr>
            In Progress Todos
            <br />
            <br />
            {store.progress.map((singleTodo, singleIndex) => {
                return <div style={{ border: "1px solid blue", padding: "5px", margin: "5px" }} key={singleIndex}>
                    <div style={{ paddingTop: "3px" }}>Task Id : {singleIndex + 1}</div>
                    <div style={{ paddingTop: "3px" }}>Task Name : {singleTodo.taskName}</div>
                    <div style={{ paddingTop: "3px" }}>Action : <button onClick={() => { taskMoverHandler(singleIndex, "progress") }}>Next</button></div>
                </div>
            })}
            {store.progress.length === 0 && <div style={{ border: "1px solid red", padding: "5px", margin: "5px" }}>
                No Tasks in Progress
            </div>}

            <hr></hr>
            In Review Todos
            <br />
            <br />
            {store.review.map((singleTodo, singleIndex) => {
                return <div style={{ border: "1px solid blue", padding: "5px", margin: "5px" }} key={singleIndex}>
                    <div style={{ paddingTop: "3px" }}>Task Id : {singleIndex + 1}</div>
                    <div style={{ paddingTop: "3px" }}>Task Name : {singleTodo.taskName}</div>
                    <div style={{ paddingTop: "3px" }}>Action : <button onClick={() => { taskMoverHandler(singleIndex, "review") }}>Next</button></div>
                </div>
            })}
            {store.review.length === 0 && <div style={{ border: "1px solid red", padding: "5px", margin: "5px" }}>
                No Tasks in Review
            </div>}

            <hr></hr>
            Completed Todos
            <br />
            <br />
            {store.completed.map((singleTodo, singleIndex) => {
                return <div style={{ border: "1px solid blue", padding: "5px", margin: "5px" }} key={singleIndex}>
                    <div style={{ paddingTop: "3px" }}>Task Id : {singleIndex + 1}</div>
                    <div style={{ paddingTop: "3px" }}>Task Name : {singleTodo.taskName}</div>
                    {/* <div style={{ paddingTop: "3px" }}>Action : <button>Next</button></div> */}
                </div>
            })}
            {store.completed.length === 0 && <div style={{ border: "1px solid red", padding: "5px", margin: "5px" }}>
                No Completed Tasks
            </div>}

        </div>
    )
}

export default DisplayData