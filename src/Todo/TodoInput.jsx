import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [val, setVal] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "10px"
      }}
    >
      <TextField
        onChange={(e) => setVal(e.target.value)}
        value={val}
        id="standard-basic"
        label="Add Task"
        variant="standard"
      />
      <Button
        onClick={() => {
          addTodo(val);
          setVal("");
        }}
        variant="contained"
        color="success"
      >
        Add
      </Button>
    </Box>
  );
};

export default TodoInput;
