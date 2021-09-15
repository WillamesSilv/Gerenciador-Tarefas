import React from 'react'
import { CgClose, CgInfo, CgCheck } from 'react-icons/cg'
import { useHistory } from 'react-router-dom'
import './Task.css'

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useHistory()
  //const des = useHistory()

  const handleTaskDetailsclick = () => {
    history.push(`/${task.title}`, `${task.description}`)
    history.description = `${task.description}`
  }

  const taskCompleted = function () {
    if (task.completed === true) {
      return <CgCheck />
    }
  }

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="button-container">
        <div className="taskCompleted">{taskCompleted()}</div>
        <button
          className="see-task-details-button"
          onClick={handleTaskDetailsclick}
        >
          <CgInfo />
        </button>
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  )
  //return <div className="task-container">{task.title}</div>
}

export default Task
