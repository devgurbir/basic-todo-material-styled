import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const TodoItem = ({ title, status, id, toggleTodo, deleteTodo }) => {
  const styles = {
    textDecoration: status ? "line-through" : "none"
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Checkbox checked={status} onClick={() => toggleTodo(id, status)} />
        <Typography style={styles} variant="p">
          {title}
        </Typography>
      </Box>
      <Box sx={{ marginLeft: "auto" }}>
        <Button
          onClick={() => deleteTodo(id)}
          variant="contained"
          color="error"
          size="small"
        >
          X
        </Button>
      </Box>
    </Box>
  );
};

export default TodoItem;
