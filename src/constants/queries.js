import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
      user_id
      is_completed
      description
    }
  }
`;
export const INSERT_TODOS = gql`
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
export const UPDATE_TODOS = gql`
  fragment todosFragment on todos {
    id
    title
    is_completed
  }
  mutation updateTodo($id: Int = 9, $is_completed: Boolean = true) {
    update_todos_by_pk(
      pk_columns: { id: $id }
      _set: { is_completed: $is_completed }
    ) {
      ...todosFragment
    }
  }
`;
