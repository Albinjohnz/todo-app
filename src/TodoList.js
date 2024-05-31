// src/TodoList.js
import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { List, Typography, Paper, Container } from '@mui/material';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <Container maxWidth="xl" style={{ padding: '20px', marginTop: '20px', width: '100%' }}>
      {todos.length > 0 && (
        <Paper elevation={3} style={{ padding: '20px', width: '100%', textAlign: 'center', marginBottom: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Completed Tasks
          </Typography>
          <Typography variant="h3" color="primary">
            {completedTodos.length}
          </Typography>
        </Paper>
      )}
      <List style={{ marginTop: '20px', width: '100%', border: todos.length > 0 ? '2px solid #E0E0E0' : 'none' }}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
    </Container>
  );
};

export default TodoList;
