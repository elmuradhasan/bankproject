import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../../../features/cartSlice/CartSlice";
import { fetchProductDetail } from "../../../features/productSlice/ProductSlice";
import { useAppDispatch } from "../../../store";
import { ProductTypeB } from "../../../types";

const ProductDetail = () => {
  const [productDetails, setProductDetails] = useState<ProductTypeB | null>(null)
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductDetail(id)).unwrap().then(res => setProductDetails(res))
  }, [dispatch, id]);
  const handleAddToCart = (product: ProductTypeB) => {
    dispatch(addToCart(product));
  };
  return (
    <>
      {
        productDetails &&
        <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap", marginTop: "40px" }}>
          <Card sx={{ width: 600, margin: "20px 0px", height: "550px" }}>
            <CardMedia
              sx={{
                height: 280,
                objectFit: "contain",
                padding: "10px",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
              image={productDetails.image}
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontSize: "16px" }}
              >
                {productDetails.title}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontSize: "14px",color:"green" }}
              >
                {productDetails.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {productDetails.price} USD
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button size="small" variant="contained" onClick={() => handleAddToCart(productDetails)}>
                Add Card
              </Button>

              <Link to="/"><Button size="small" variant="outlined">
                Back Home</Button>
              </Link>
            </CardActions>

          </Card>
        </Container>

      }
    </>
  )
}
export default ProductDetail;