import {lazy } from "react";
import * as alltype from "../types/index";
const CartRouter:alltype.RouteType[] = [
    {
        component: lazy(() => import('../modules/cart/Cart')),
        path: '/cart'
    },

];

export default CartRouter;