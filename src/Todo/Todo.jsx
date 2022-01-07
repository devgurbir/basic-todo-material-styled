import TodoInput from "./TodoInput";
import { useState } from "react";
import Box from "@mui/material/Box";
import { v4 as uuid } from "uuid";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos([
      ...todos,
      {
        title,
        status: false,
        id: uuid()
      }
    ]);
  };

  const toggleTodo = (id, status) => {
    console.log("toggling", id);
    setTodos(
      todos.map((el) => {
        console.log(el);
        console.log("idEquals", id === el.id);
        console.log("status", el.status);
        return id === el.id
          ? {
              ...el,
              status: !status
            }
          : el;
      })
    );
  };

  return (
    <Box sx={{ width: "300px", margin: "0 auto" }}>
      <TodoInput addTodo={addTodo} />
      <Box mt={4}>
        {todos?.map((t) => {
          return (
            <TodoItem
              toggleTodo={toggleTodo}
              title={t.title}
              status={t.status}
              key={t.id}
              id={t.id}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Todo;
