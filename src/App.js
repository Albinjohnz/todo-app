// src/App.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';
import TodoList from './TodoList';
import { Container, Typography, TextField, Button, Paper, Box } from '@mui/material';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 0) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          My ToDo List
        </Typography>
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <TextField
            label="Add a new task"
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ marginRight: '8px', flexGrow: 1 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </form>
        <Box marginTop={2}>
          <TodoList />
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
