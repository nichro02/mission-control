import data from './data.js'
import Column from './components/Column'
import './App.css'
import { useState, useEffect } from 'react'

const App = () => {
  const [boardData, setBoardData] = useState(data) 
  
  console.log(boardData)
    
    return (
      boardData.columnOrder.map(columnId => {
      const column = boardData.columns[columnId]
      const tasks = column.taskIds.map(taskId => boardData.tasks[taskId])

      return(
      <Column
        key={column.id}
        column={column}
        tasks={tasks}
      />
      )
    })
    )
}

export default App;
