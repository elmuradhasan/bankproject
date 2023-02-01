
import { Badge, Button, CardMedia } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useAppSelector } from "../../store";
const Navbar = () => {
  const {cartItems} =  useAppSelector(state=>state.createSlice);
    
  return (
    <Box display="flex" justifyContent={"space-around"} alignItems={"center"} width={"100%"} sx={{
      backgroundColor: "#f2f2f2",
      position: "sticky",
      top: "0",
      zIndex: "10000",
      padding: "10px"
    }}>
      <Link to="/">
        <CardMedia
          component="img"
          height="60"
          image="/assets/images/logo.jpg"
          alt="Paella dish"
          sx={{ objectFit: "cover", borderRadius: "50%" }}
        />
      </Link>
      <Link to="/cart" >
      <Badge badgeContent={cartItems?.length} color="primary">
      <LocalMallIcon color="warning" sx={{ fontSize: "30px" }} />
    </Badge>
      </Link>
      <Box mt={1}>
        <Link to="/login">
          <Button variant="contained" color="primary">Login</Button>
        </Link>
        <Link to="/register" >
          <Button variant="contained" color="warning" sx={{ marginLeft: "10px" }}>
            Register
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
export default Navbar;