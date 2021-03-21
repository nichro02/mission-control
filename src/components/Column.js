//components
import Task from './Task.js'
//css
import '../css/Column.css'
//import droppable
import { Droppable } from 'react-beautiful-dnd'


//Droppable expects its child to be a function that returns a React component
//This is because react-beautiful-dnd uses render props and doesn't need to create any DOM nodes -> it works within existing structure

const Column = (props) => { 
    return(
        <div id='container'>
            <div id='title'>
                {props.column.title}
            </div>
            <Droppable droppableId={props.column.id}>
                {(provided) => (
                    <div
                        id='taskList'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {props.tasks.map((task, index)=> <Task key={task.id} task={task} index={index}/>)}
                        {provided.placeholder}
                    </div>
                )}
            
            
            </Droppable>
            
        </div>
    )
}

export default Column