import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomButton } from "../../component/elements/CustomButton";
import { CustomTextField } from "../../component/elements/CustomTextField";
import {  IFormInputsforREgister } from "../../types";
import { RegisterSchema } from "../../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
const Register = () => {
  const { handleSubmit, reset, control } = useForm<IFormInputsforREgister>({
    defaultValues: {
      username: "",
      email:"",
      password: "",
    },
    resolver: yupResolver(RegisterSchema),
  });
  const onSubmit = async (data: IFormInputsforREgister) => {
  const dataregister :any =  {
      email:data.email,
      username:data.username,
      password:data.password,
      name:{
          firstname:'John',
          lastname:'Doe'
      },
      address:{
          city:'kilcoole',
          street:'7835 new road',
          number:3,
          zipcode:'12926-3874',
          geolocation:{
              lat:'-37.3159',
              long:'81.1496'
          }
      },
      phone:'1-570-236-7033'
  }
//  await axios.post('https://fakestoreapi.com/users', dataregister).then(res=>{
//   console.log(res);
//  });
fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:'John@gmail.com',
                    username:'johnd',
                    password:'m38rmF$',
                    name:{
                        firstname:'John',
                        lastname:'Doe'
                    },
                    address:{
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
 
    reset();
  };
  return (
    <>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          height: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" color="primary" pl=".8rem" fontWeight="700">
          Register Page
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <CustomTextField
            name="username"
            control={control}
            label="username"
            type="text"
            placeholder="Enter your username..."
          />
          <CustomTextField
            name="email"
            control={control}
            label="email"
            type="email"
            placeholder="Enter your email..."
          />
          <CustomTextField
            name="password"
            control={control}
            label="Password"
            type="password"
            placeholder="Enter your password..."
          />
          <CustomButton text={"Sign up"} />
          <Typography align="center">
          You have an account
            <Link to="/login"> Sign in</Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Register;
