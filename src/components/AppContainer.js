import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { GET_TODOS } from '../GraphQL/queries';
import AddTodo from './AddTaskForm';
import TasksList from './TasksList';

function AppContainer() {
  const [tasks, setTasks] = useState([])
  const [sorted, setSorted] = useState(false)
  const { loading, data } = useQuery(GET_TODOS);

  // sorting data by completion after getting data 
  useEffect(() => {
    if (data?.todos?.data.length > 0 && !sorted) {
      const tasks = [...data?.todos?.data]
      const sortedTasks = tasks.sort((a, b) => a.completed - b.completed)
      setTasks(sortedTasks);
      setSorted(true)
    }
  }, [data]);

  return (
    <>
      <AddTodo tasks={tasks} setTasks={setTasks} />
      <TasksList tasks={tasks} setTasks={setTasks} loading={loading} />
    </>)
}

export default AppContainer;

