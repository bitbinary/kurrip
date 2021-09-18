import {
  Paper,
  Box,
  Checkbox,
  Grid,
  Typography,
  FormControlLabel,
  TextField,
  Button,
  Card,
} from '@mui/material';
import React from 'react';
import { GET_TODOS, INSERT_TODOS } from '../../constants/queries';
import { gql, useMutation, useQuery } from '@apollo/client';
import TodoItem from '../../components/items/TodoItem';
import TodoItemsCard from '../../components/items/TodoItemsCard';
// const GET_TODOS = gql`
//   query GetTodos {
//     todos {
//       id
//       title
//       user_id
//       is_completed
//     }
//   }
// `;
// const INSERT_TODOS = gql`
//   mutation InsertTodo($title: String!) {
//     insert_todos(objects: { title: $title }) {
//       returning {
//         id
//         title
//         is_completed
//       }
//     }
//   }
// `;

export default function Dashboard() {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [insertTodo, _] = useMutation(INSERT_TODOS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    // <Box p={2} sx={{ display: 'flex', flexGrow: '1' }}>
    <Paper square component={Box} p={2} elevation={12} sx={{ flexGrow: '1' }}>
      <Typography variant="h4" component="div">
        Todos
      </Typography>
      <Paper component={Card}>
        <TodoItemsCard todos={data.todos} />
      </Paper>
      {/* <TextField id="new-todo-input" label="New todo" variant="outlined" />
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
      </Button> */}
    </Paper>
    // </Box>
  );
}
