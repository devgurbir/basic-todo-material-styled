import TodoInput from "./TodoInput";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { v4 as uuid } from "uuid";
import TodoItem from "./TodoItem";

const calculateCompletedTodos = (todoArr) => {
  return todoArr.reduce(
    (previous, el) => (el.status === true ? previous + 1 : previous),
    0
  );
};

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const styles = {
    backgroundColor:
      calculateCompletedTodos(todos) === todos.length ? "#2e7d32;" : "white",
    color: calculateCompletedTodos(todos) === todos.length ? "white" : "grey"
  };

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
    setTodos(
      todos.map((el) => {
        return id === el.id
          ? {
              ...el,
              status: !status
            }
          : el;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((el) => id !== el.id));
  };

  return (
    <Box sx={{ width: "300px", margin: "0 auto" }}>
      <TodoInput addTodo={addTodo} />
      <Box sx={styles} mt={4}>
        {showCompleted
          ? todos
              ?.filter((el) => el.status === true)
              .map((t) => {
                return (
                  <TodoItem
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    title={t.title}
                    status={t.status}
                    key={t.id}
                    id={t.id}
                  />
                );
              })
          : todos?.map((t) => {
              return (
                <TodoItem
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  title={t.title}
                  status={t.status}
                  key={t.id}
                  id={t.id}
                />
              );
            })}
      </Box>
      <Box>
        <Button onClick={() => setShowCompleted(!showCompleted)} variant="text">
          {showCompleted ? "Hide Completed" : "Show Completed"}
        </Button>
      </Box>
    </Box>
  );
};

export default Todo;
