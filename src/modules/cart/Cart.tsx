import {
  Button, Card,  CardActions,  CardContent,  CardMedia,  Container,  Typography,} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  decreaseCart,  removeFromCart,  increaseCart,  clearCart,  getTotals,} from "../../features/cartSlice/CartSlice";
import React, { useEffect } from "react";
const Cart = () => {
  const { cartItems, cartTotalAmount } = useAppSelector(
    (state) => state.createSlice
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  const HandleDeleteCart = (id: number) => {
    dispatch(removeFromCart(id));
  };
  const HandleIncrease = (id: number) => {
    dispatch(increaseCart(id));
  };
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {cartItems.length > 0 ? (
          <>
            <Button onClick={() => dispatch(clearCart("kdjdjjd"))}>
              Clear Cart
            </Button>
            <Typography variant="h4">
              Cart Total Amount $ {cartTotalAmount}
            </Typography>
          </>
        ) : (
          ""
        )}
        {cartItems.length > 0 ? (
          cartItems.map((cartelement: any, index: number) => {
            return (
              <React.Fragment key={index}>
                     <Card
                sx={{
                  width: 900,
                  margin: "20px 0px",
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <CardMedia
                  sx={{
                    height: 150,
                    width: 150,
                    objectFit: "contain",
                    padding: "10px",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                  }}
                  image={cartelement.image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontSize: "16px" }}
                  >
                    {cartelement.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cartelement.cartQuantity * cartelement.price} USD
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => dispatch(decreaseCart(cartelement.id))}
                    size="small"
                    variant="contained"
                    color="success"
                    sx={{ marginRight: "8px" }}
                  >
                    -
                  </Button>
                  <Typography>{cartelement.cartQuantity}</Typography>
                  <Button
                    onClick={() => HandleIncrease(cartelement.id)}
                    size="small"
                    variant="contained"
                    color="success"
                  >
                    +
                  </Button>
                  <DeleteIcon
                    onClick={() => HandleDeleteCart(cartelement.id)}
                    sx={{
                      marginLeft: "10px",
                      width: "80px",
                      cursor: "pointer",
                    }}
                    color="error"
                  />
                </CardActions>
         
              </Card>
              </React.Fragment>
         
            );
          })
        ) : (
          <Typography sx={{ marginTop: "100px" }} variant="h2">
            Cart is empty
          </Typography>
        )}
      </Container>
    </>
  );
};
export default Cart;
