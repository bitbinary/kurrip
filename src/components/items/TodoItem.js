import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { useMutation } from '@apollo/client';
import { UPDATE_TODOS } from '../../constants/queries';
export default function TodoItem({ todo }) {
  const [todoData, setTodoData] = useState(todo);
  const [updateTodo, { data }] = useMutation(UPDATE_TODOS);
  useEffect(() => {
    if (data) {
      setTodoData(data.update_todos_by_pk);
    }
  }, [data]);
  return (
    <Paper
      key={todoData.id}
      elevation={6}
      p={1}
      m={1}
      item
      xs={12}
      component={Grid}
    >
      <FormControlLabel
        label={todoData.title}
        control={
          <Checkbox
            onChange={(e) =>
              updateTodo({
                variables: { id: todo.id, is_completed: e.target.checked },
              })
            }
            checked={todoData.is_completed}
          />
        }
      />
      <Typography>{todoData.description}</Typography>
    </Paper>
  );
}
