import '../css/Task.css'

const Task = (props) => {
    return(
        <div id='task'>{props.task.content}</div>
    )
}

export default Task