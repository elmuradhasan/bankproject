import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import {  addToCart } from "../../../features/cartSlice/CartSlice";
import { useAppDispatch } from "../../../store";
import {  ForItemType, ProductTypeB,   } from "../../../types";
const ProductItem = ({ product }: ForItemType) => {
  const dispatch =  useAppDispatch();
  
  //const [list, setList] = useState<IAddProductList[]>([])

  const handleAddToCart = (product: ProductTypeB) => {
    dispatch(addToCart(product));
  };
    
  //   if(findItem) {
  //     setList(prev => ([ ...prev, { productId: product.id, quantity: 1 }]))
  //   } else {
  //     setList(prev => (prev.map(item => item.productId === product.id 
  //       ? { ...item, quantity: item.quantity++ } 
  //       : item
  //     )));
  //   }

    // const requestData: ICartItem = {
    //   userId: 1,
    //   date: "2023-01-01",
    //   products: list
    // };

  //   console.log('list', list);
    
  //   dispatch(fetchAddToCart(requestData))
  // }

  return (
    <>
      {
        <Card sx={{ width: 345, margin: "20px 0px", height: "480px" }}>
          <CardMedia
            sx={{
              height: 280,
              objectFit: "contain",
              padding: "10px",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
            image={product.image}
            title="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontSize: "16px" }}
            >
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.price} USD
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" onClick={()=>handleAddToCart(product)}>
              Add Card
            </Button>
             <Link to={`/productdetail/${product.id}`}>
            <Button size="small" variant="contained" color="warning" sx={{marginLeft:"15px"}}>  Product Detail
            </Button>
            </Link>
          </CardActions>
        </Card>
        
      }
    </>
  );
};
export default ProductItem;