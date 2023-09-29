import React, { useState } from 'react';
import { Box, Checkbox, IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditTaskForm from './EditTaskForm';

const Task = ({ task, deleteTask, updateTask }) => {
    const [showEditInput, setShowEditInput] = useState(false);
    const [title, setTitle] = useState(task.title);

    const handleEditClick = () => {
        setShowEditInput(!showEditInput);
    };

    const handleSumbit = (e) => {
        e.preventDefault()
        updateTask({ ...task, title: title })
        handleEditClick()
    }

    return (
        <ListItem key={task.id} disablePadding>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 1 }}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={task.completed}
                            onClick={() => updateTask({ ...task, completed: !task.completed })}
                            color='warning'
                        />
                    </ListItemIcon>
                    {showEditInput ? (
                        <EditTaskForm
                            handleSumbit={handleSumbit}
                            title={title}
                            setTitle={setTitle}
                        />
                    ) : (
                        <ListItemText primary={task.title} />
                    )}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 3 }}>
                        <IconButton edge="end" aria-label="comments" onClick={handleEditClick}>
                            <EditIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="comments" onClick={() => deleteTask(task.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </ListItem>
    );
};

export default Task;
