import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { AppBar, Grid, Paper, Toolbar, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';

var initialTodos = [
    { id: 1, task: "Create the App", completed: false },
    { id: 2, task: "Create the Layout", completed: true },
    { id: 3, task: "Get out", completed: false },
]

function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || "[]")
    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
    }
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(updatedTodos)
    }
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo => 
            todoId.id === todoId ? {...todo, completed: !todo.completed} : todo 
        )
        setTodos(updatedTodos)
    }
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>Todos with hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container>
                <Grid item xs={11} md={8} lg={4} justifyContent="center">
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;