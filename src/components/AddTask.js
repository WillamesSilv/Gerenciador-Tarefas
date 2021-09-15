import React, { useState } from 'react'
import Button from './Button'
import './AddTask.css'

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState()
  const handleInputChange = e => {
    setInputData(e.target.value)
  }

  const [areaData, setAreaData] = useState()
  const handleAreaChange = e => {
    setAreaData(e.target.value)
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData, areaData)
    setInputData('')
    setAreaData('')
  }

  return (
    <>
      <div className="add-task-container">
        <input
          onChange={handleInputChange}
          value={inputData}
          type="text"
          className="add-task-input"
          placeholder="Nome da tarefa"
        />
        <textarea
          onChange={handleAreaChange}
          value={areaData}
          name="description"
          id="description"
          placeholder="Digite aqui a descrição da tarefa"
          wrap="off"
        ></textarea>
        <div className="add-task-button-container">
          <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
      </div>
    </>
  )
}

export default AddTask
