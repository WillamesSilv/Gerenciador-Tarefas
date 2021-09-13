import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Button from './Button'

import './TaskDetails.css'

const TaskDetails = () => {
  const params = useParams()

  const history = useHistory()
  const handleBackButtonClick = () => {
    history.goBack()
  }
  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ullam
          adipisci accusantium autem obcaecati veritatis blanditiis, sequi
          aperiam consequatur nisi laudantium quam ad? Ipsum maxime nihil
          repellendus reprehenderit veniam temporibus.
        </p>
      </div>
    </>
  )
}

export default TaskDetails