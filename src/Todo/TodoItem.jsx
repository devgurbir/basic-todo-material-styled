import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

const TodoItem = ({ title, status, id, toggleTodo }) => {
  const styles = {
    textDecoration: status ? "line-through" : "none"
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Checkbox checked={status} onClick={() => toggleTodo(id, status)} />
      <Typography style={styles} variant="p">
        {title}
      </Typography>
    </Box>
  );
};

export default TodoItem;
