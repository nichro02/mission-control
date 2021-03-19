//components
import Task from './Task.js'
//css
import '../css/Column.css'


const Column = (props) => {
    return(
        <div id='container'>
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