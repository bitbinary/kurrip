import { Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TodoItem from './TodoItem';

export default function TodoItemsCard({ todos }) {
  return (
    <Paper p={2} container spacing={2} component={Box}>
      <Grid p={2} container spacing={2} rowSpacing={2}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </Grid>
    </Paper>
  );
}
