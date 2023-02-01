import {lazy } from "react";
import * as alltype from "../types/index";
const MainRouter:alltype.RouteType[] = [
    {
        component: lazy(() => import('../modules/home/Home')),
        path: '/'
    },
    {
        component: lazy(() => import('../modules/notFound/PageNotFound')),
        path: '*'
    }
];

export default MainRouter;