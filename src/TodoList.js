import React from 'react';
import { Divider, List, ListItem, ListItemText, Paper } from '@mui/material';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList({ todos, removeTodo, toggleTodo }) {
    return (
        <Paper>
            <List>
                {todos.map(todo => (
                        <Todo id={todo.id} task={todo.task} key={todo.id} completed={todo.completed} removeTodo={removeTodo} toggleTodo={toggleTodo} />
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;