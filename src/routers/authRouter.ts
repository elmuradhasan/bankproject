import { lazy } from "react";
import * as alltype from "../types/index"
const AuthRouter: alltype.RouteType[] = [
    {
        component: lazy(() => import('../modules/login/Login')),
        path: '/login'
    },
    {
        component: lazy(() => import('../modules/register/Register')),
        path: '/register'
    },

];

export default AuthRouter;