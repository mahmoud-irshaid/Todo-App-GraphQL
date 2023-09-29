import React, { useEffect, useState } from 'react';
import { useMutation } from "@apollo/client";
import { DELETE_TODO, UPDATE_TODO } from "../GraphQL/mutations";
import { Box, CircularProgress, List } from '@mui/material';
import Task from './Task';

const TasksList = ({ tasks, setTasks, loading }) => {
    const [taskToUpdate, setTaskToUpdate] = useState(null);

    const [deleteTodo] = useMutation(DELETE_TODO);

    const [updateTodo, { data }] = useMutation(UPDATE_TODO);

    // delete task by id
    const deleteTask = (id) => {
        deleteTodo({
            variables: {
                id
            }
        });

        setTasks(tasks.filter((task) => task.id !== id));
    }

    // update task by id
    const updateTask = (task) => {
        setTaskToUpdate(task);

        updateTodo({
            variables: {
                id: task.id,
                input: {
                    title: task.title,
                    completed: task.completed
                }
            },
        });
    }

    // find task by id and update it
    useEffect(() => {
        if (data && taskToUpdate) {
            console.log(data);
            const updatedTasks = tasks.map((t) => (t.id === taskToUpdate.id ? taskToUpdate : t));
            setTasks(updatedTasks);
        }
    }, [data]);

    return (
        <>
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 10 }}>
                    <CircularProgress color="inherit" />
                </Box>
            ) : tasks.length === 0 ? (
                <center>
                    <p>No Available Data</p>
                </center>
            ) : (
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {tasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            updateTask={updateTask}
                        />
                    ))}
                </List>
            )}
        </>
    );
}

export default TasksList;
