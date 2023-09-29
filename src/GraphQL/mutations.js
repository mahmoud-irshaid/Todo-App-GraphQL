import { gql } from "@apollo/client";

export const CREATE_TODO = gql`
  mutation createTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
        id
        title
        completed
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
        id
        title
        completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;