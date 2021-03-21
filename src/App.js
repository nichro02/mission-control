import data from './data.js'
import Column from './components/Column'
import './App.css'
import { useState, useEffect } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

const App = () => {
  const [boardData, setBoardData] = useState(data) 
  
  console.log(boardData)
    
    const onDragEnd = result => {
      //reorder column
    }

    return (
      <DragDropContext
        onDragEnd = {onDragEnd}
      >
      {boardData.columnOrder.map(columnId => {
      const column = boardData.columns[columnId]
      const tasks = column.taskIds.map(taskId => boardData.tasks[taskId])

      return(
      <Column
        key={column.id}
        column={column}
        tasks={tasks}
      />
      )
      
    })}
    </DragDropContext>
    )
}

export default App;
