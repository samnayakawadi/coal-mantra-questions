export const todoReducers = {
    addToDo: (prevState, actions) => {

        const { inProgress, inReview, isCompleted } = actions.payload

        if (inProgress || inReview || isCompleted) {
            return { ...prevState, todos: [...prevState.todos, actions.payload] }
        }
        else {
            return prevState
        }
    },

    nextTodo: (prevState, actions) => {

        const todoIndex = actions.payload.index // 1
        const todoLocation = actions.payload.location // todos, progress, review, completed

        const taskToMove = prevState[todoLocation][todoIndex]

        console.log("todoIndex", todoIndex)
        console.log("todoLocation", todoLocation)
        console.log("taskToMove (proxyObject)", taskToMove)
        console.log("taskToMove", JSON.parse(JSON.stringify(prevState[todoLocation][todoIndex])))

        if (taskToMove.inProgress || taskToMove.inReview || taskToMove.isCompleted) {
            prevState[todoLocation].splice(todoIndex, 1)
        }

        if (taskToMove.inProgress) {
            // return { ...prevState, progress: [...prevState.progress, { ...taskToMove, inProgress: false }] }
            prevState.progress.push({ ...taskToMove, inProgress: false })
            // prevState.progress = [...prevState.progress, { ...taskToMove, inProgress: false }]
        }
        else if (taskToMove.inReview) {
            // return { ...prevState, review: [...prevState.review, { ...taskToMove, inReview: false }] }
            // prevState.review.push({ ...taskToMove, inReview: false })
            prevState.review = [...prevState.review, { ...taskToMove, inReview: false }]
        }
        else if (taskToMove.isCompleted) {
            // return { ...prevState, completed: [...prevState.completed, { ...taskToMove, isCompleted: false }] }
            // prevState.completed.push({ ...taskToMove, isCompleted: false })
            prevState.completed = [...prevState.completed, { ...taskToMove, isCompleted: false }]
        }

    }
}