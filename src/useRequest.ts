
///useRequest.ts is a custom hook that helps fetch data using Apollo Client.
import {  useQuery, useMutation } from "@apollo/react-hooks";
import { ITodos, ITodoMutation } from "./types/types";

export function useTodoQuery(gqlQuery:any) {
  const { loading, error, data } = useQuery<ITodos>(gqlQuery);
  return { loading, error, data };
}

export function useTodoMutation(gqlQuery: any) {
  const [addTodo] = useMutation<ITodoMutation>(gqlQuery);
  return [addTodo];
}