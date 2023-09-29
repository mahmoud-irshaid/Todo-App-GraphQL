import React from 'react'
import { Box, Button, TextField } from '@mui/material'

function EditTaskForm({ handleSumbit, title, setTitle }) {
    return (
        <form style={{ width: '100%' }} autoComplete="off" onSubmit={handleSumbit}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                    label="Task"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    color="warning"
                    type="text"
                    fullWidth
                    value={title}
                    sx={{ bgcolor: '#e8e8e8', borderRadius: 50, }}
                    InputProps={{
                        style: {
                            borderRadius: "50px",
                        }
                    }}
                />
                <Button variant="contained" sx={{ bgcolor: '#ff5845', color: "white", borderRadius: 50, px: 5 }} color='warning' type="submit">EDIT</Button>
            </Box>
        </form>)
}

export default EditTaskForm
