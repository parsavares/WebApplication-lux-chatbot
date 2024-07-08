import { Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import useInputState from './hooks/useInputState';

function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState("")
    return (
        <Paper>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value);
                reset();
            }}>
                <TextField value={value} onChange={handleChange} margin='normal' />
            </form>
        </Paper>
    );
}

export default TodoForm;