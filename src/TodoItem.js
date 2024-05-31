// src/TodoItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './todoSlice';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      disablePadding
      style={{
        backgroundColor: todo.completed ? '#C5E1A5' : '#FFFFFF', // Apply color to completed items
        border: '1px solid #E0E0E0', // Add border to each item
        borderRadius: '10px', // Add border radius to each item
        marginBottom: '10px',
      }}
    >
      <Checkbox
        edge="start"
        checked={todo.completed}
        tabIndex={-1}
        disableRipple
        onClick={() => dispatch(toggleTodo(todo.id))}
      />
      <ListItemText
        primary={todo.text}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      />
      <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteTodo(todo.id))}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
