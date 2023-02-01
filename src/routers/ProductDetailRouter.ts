import {lazy } from "react";
import * as alltype from "../types/index";
const ProductDetailRouter:alltype.RouteType[] = [
    {
        component: lazy(() => import('../modules/product/productDetail/ProductDetail')),
        path: '/productdetail/:id'
    }
];

export default ProductDetailRouter;