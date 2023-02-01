export interface IForinitialState {
    info: ProductTypeB[] | null;
    loading: boolean;
    error:string
    countItemBasket: number
};

export type ProductTypeB = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}
export type CartType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity:number,
  rating: Rating;
}
export interface ForItemType {
    product: ProductTypeB
  }

export interface Rating {
    rate: number;
    count: number;
}

// export interface IAddProductList { productId:number, quantity:number };

// export interface ICartItem {
//     userId: number
//     date: string
//     products: IAddProductList[]
// }

// export interface IAddCartItem extends ICartItem {
//   id: number
// }