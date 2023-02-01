import AuthRouter from "./authRouter";
import CartRouter from "./CartRouter";
import MainRouter from "./MainRouter";
import ProductDetailRouter from "./ProductDetailRouter";

const routes = [...AuthRouter, ...MainRouter,...ProductDetailRouter,...CartRouter];

export default routes;