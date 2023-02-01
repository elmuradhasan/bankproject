import { Box, Checkbox, Container, FormControlLabel, Grid, Link as Links, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "../../component/elements/CustomButton";
import { CustomTextField } from "../../component/elements/CustomTextField";
import { IFormInputs } from "../../types";
import { schema } from "../../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
const  Login = ()=>{
  const nav = useNavigate();
   const { handleSubmit, reset, control } = useForm<IFormInputs>({
      defaultValues: {
        username: "",
        password: "",
      },
      resolver: yupResolver(schema),
    });
    const onSubmit = async  (data: IFormInputs) => {
    await  axios.post("https://fakestoreapi.com/auth/login", data).then((response) => {
      localStorage.setItem("token", JSON.stringify(response.data));
      toast.success("You seccessfully login 5 second after redirect Home page", {
        position: "bottom-right",
      });
      setTimeout(() => {
        nav("/");
      }, 5000);
    });

      reset();
    };
     return (
        <>
        <Container component="main" maxWidth="xs" 
        sx={{
          height:"600px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          flexDirection:"column"
          }}>
        <Typography variant="h4" color="primary" pl=".8rem" fontWeight="700">
           Login Page
          </Typography>
           <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
          <CustomTextField
            name="username"
            control={control}
            label="username"
            type="text"
            placeholder="Enter your username..."
          />
          <CustomTextField
            name="password"
            control={control}
            label="Password"
            type="password"
            placeholder="Enter your password..."
          />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
         <CustomButton text={"Sign in"}/>
            <Grid container>
              <Grid item xs>
                <Links href="#" variant="body2">
                  Forgot password?
                </Links>
              </Grid>
              <Grid item>
                <Typography fontSize={"14px"} component="span">
                    Don't have an account?<Link to="/register">{"Sign Up"}</Link>
                </Typography>                
              </Grid>
            </Grid>
          </Box>
          </Container>
        </>
     )
}
export default Login;