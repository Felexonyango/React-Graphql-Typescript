import * as React from "react";


import { GET_TODOS } from "./graphql";
import { useTodoQuery } from "./useRequest";
import AddTodo from "./Componets/AddTodo"
import Todo from "./Componets/Todo";
import { ITodo } from "./types/types"

const App: React.FC = () => {
  const { loading, error, data } = useTodoQuery(GET_TODOS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong!</h1>;

  return (
    <div className="App">
      <h1>My Todos</h1>
      <AddTodo />
      {data !.getTodos.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default App;