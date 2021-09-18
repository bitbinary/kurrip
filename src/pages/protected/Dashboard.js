import {
  Paper,
  Box,
  Checkbox,
  Grid,
  Typography,
  FormControlLabel,
  TextField,
  Button,
} from '@mui/material';
import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
      user_id
      is_completed
    }
  }
`;
const INSERT_TODOS = gql`
  mutation InsertTodo($title: String!) {
    insert_todos(objects: { title: $title }) {
      returning {
        id
        title
        is_completed
      }
    }
  }
`;

export default function Dashboard() {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [insertTodo, { insertedTodoData, insertTodoLoading, InsertTodoError }] =
    useMutation(INSERT_TODOS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <Box sx={{ display: 'flex', flexGrow: '1' }}>
      <Paper elevation={12} sx={{ flexGrow: '1' }}>
        <Typography p={2} variant="h4" component="div">
          Todos
        </Typography>
        <TextField id="new-todo-input" label="New todo" variant="outlined" />
        <Button
          onClick={() =>
            insertTodo({
              variables: {
                title: document.getElementById('new-todo-input').value,
              },
            })
          }
          variant="contained"
          color="primary"
          label="Add todo"
        >
          Add todo
        </Button>
        <Grid container p={2} spacing={3}>
          {data.todos.map((todo) => (
            <Grid key={todo.id} item xs={12}>
              {console.log(todo)}
              <FormControlLabel
                label={todo.title}
                control={<Checkbox checked={todo.is_completed} />}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}
