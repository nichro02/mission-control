import { Draggable } from 'react-beautiful-dnd'
import '../css/Task.css'

const Task = (props) => {
    return(
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided) => (
                <div
                    id='task'
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {props.task.content}
                </div>
            )}
            
        </Draggable>
    )
}

export default Task