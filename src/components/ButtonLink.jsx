import { Button, ButtonBase } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const ButtonLink = ({ text, toAction }) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      onClick={() => navigate(toAction)}
      style={{
        background: "linear-gradient(90deg, #007bff, #00b4d8, #48cae4)",
        borderRadius: "30px",
        padding: "10px 25px",
        color: "#fff",
        border: "none",
        boxShadow: "0 4px 15px rgba(0, 123, 255, 0.3)",
        marginRight: "5px",
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonLink;
