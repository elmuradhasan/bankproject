import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'
import axios from 'axios'
import { IForinitialState, ProductTypeB } from '../../types'
const initialState: IForinitialState = {
  info: [],
  loading:false,
  error:"",
  countItemBasket: 0,
}

export const fetchProduct = createAsyncThunk("productSlice/fetchProduct", 
async (category:string): Promise<ProductTypeB[]> =>{
  if (category === "All") {
    const products = await axios.get<ProductTypeB[]>(`https://fakestoreapi.com/products`);
    return products.data;  
  }else{
    const products = await axios.get<ProductTypeB[]>(`https://fakestoreapi.com/products/category/${category}`);
    return products.data;  
  }  
});
export const fetchProductDetail = createAsyncThunk("productSlice/fetchProductDetail", 
async (id: any): Promise<ProductTypeB> =>{
    const productdetail = await axios.get<ProductTypeB>("https://fakestoreapi.com/products/"+id);
    return productdetail.data;    
});

// export const fetchAddToCart = createAsyncThunk("productSlice/fetchAddToCart",
//  async (data: ICartItem): Promise<IAddCartItem> => {
//     const result = await axios.post<IAddCartItem>("https://fakestoreapi.com/carts", data)
//     return result.data;
//  }
// )

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    },
  extraReducers:(builder)=>{
    builder.addCase(fetchProduct.fulfilled,(state, action)=>{
        state.info = action.payload;
    });
    builder.addMatcher(isPending(fetchProduct),(state,action)=>{
        state.loading = true;
        state.error = "";
    });
    builder.addMatcher(isFulfilled(fetchProduct),(state, action)=>{
        state.loading = false;
    });
    builder.addMatcher(isRejected(fetchProduct),(state, action)=>{
        state.loading = false;
        state.error = "Error fetching data";
    });
  }
})


export default productSlice.reducer