import { useEffect } from "react";
import { fetchProduct } from "../../features/productSlice/ProductSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import ProductItem from "./subproduct/ProductItem";

const  Product = ()=>{
   const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProduct("All"));
  },[dispatch])
 const {loading,error,info} =  useAppSelector(state=>state.productSlice);
  return (
    <>

    {
    loading && "Loading"
      }
      {
       error && "Error occured"
      }
      {
      !loading &&   info && info.map((element,index) => 
     <ProductItem product={element} key={index}/>
      )
      }

    </>
  )
}
export default Product;
