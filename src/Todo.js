import React, { useState } from 'react';
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Todo({ id, task, completed, removeTodo, toggleTodo }) {
    return (
        <ListItem>
            <Checkbox checked={completed} onClick={() => toggleTodo(id)}/>
            <ListItemText>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={() => removeTodo(id)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton>
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Todo;