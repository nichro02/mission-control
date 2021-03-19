import Task from './Task.js'

const Column = (props) => {
    return(
        <div>
            <div id='title'>
                {props.column.title}
            </div>
            <div id='taskList'>
                {props.tasks.map(task=> <Task key={task.id} task={task} />)}
            </div>
            
        </div>
    )
}

export default Column