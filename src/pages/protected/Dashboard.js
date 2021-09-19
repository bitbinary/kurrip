import { Paper, Box, Typography, Card } from '@mui/material';
import React from 'react';
import { GET_TODOS } from '../../constants/queries';
import { useQuery } from '@apollo/client';
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
    </Paper>
    // </Box>
  );
}
