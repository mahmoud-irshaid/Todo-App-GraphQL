import React, { useEffect, useState } from 'react';
import { useMutation } from "@apollo/client";
import { CREATE_TODO } from "../GraphQL/mutations";
import { Box, Button, TextField } from '@mui/material';

function AddTodo({ tasks, setTasks }) {
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [createTodo, { data, error }] = useMutation(CREATE_TODO);

    const addTodo = (e) => {
        e.preventDefault();
        setTitleError(false);

        if (!title) {
            setTitleError(true);
            return;
        }

        createTodo({
            variables: {
                input: {
                    title: title,
                    completed: false,
                },
            },
        });

        if (error) {
            console.log(error);
        }
    };

    // add the new task to the tasks list
    useEffect(() => {
        if (data) {
            console.log(data);
            const newTodo = data.createTodo;
            setTasks([newTodo, ...tasks]);
            setTitle('');
        }
    }, [data]);

    return (
        <form autoComplete="off" onSubmit={addTodo}>
            <h2>Todo List</h2>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                    label="Task"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    color="warning"
                    type="text"
                    fullWidth
                    value={title}
                    error={titleError}
                    sx={{
                        bgcolor: '#e8e8e8',
                        borderRadius: 50,
                    }}
                    InputProps={{
                        style: {
                            borderRadius: "50px",
                        },
                    }}
                />
                <Button
                    variant="contained"
                    sx={{ bgcolor: '#ff5845', color: "white", borderRadius: 50, px: 5 }}
                    color='warning'
                    type="submit"
                >
                    ADD
                </Button>
            </Box>
        </form>
    );
}

export default AddTodo;
