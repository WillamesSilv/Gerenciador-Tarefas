import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Header from './components/Header'
import TaskDetails from './components/TaskDetails'

import './App.css'
//import axios from 'axios'

const App = () => {
  const [tasks, setTasks] = useState([])
  /*useEffect(() => {
    const fetchTask = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=5'
      )
      const newData = { ...data, description: 'Descrição' }
      console.log(newData)
      setTasks(data)
    }
    fetchTask()
  }, [])*/

  useEffect(() => {
    const data = [
      {
        title: 'Reunião',
        id: 1,
        completed: true,
        description:
          'Reunião do trabalho as 09:00h, sobre a produtividade operacional.'
      },
      {
        title: 'Estudar Programação',
        id: 2,
        completed: false,
        description:
          'Estudar React, HTML, CSS e JavaScript á partir das 21:00h.'
      }
    ]

    setTasks(data)
  }, [])

  const handleTaskClick = taskId => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      return task
    })
    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle, taskDescription) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
        description: taskDescription
      }
    ]
    setTasks(newTasks)
  }

  const handleTaskDeletion = taskId => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <p style={{ textAlign: 'center' }}>Painel de Tarefas</p>
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  )
}

export default App
