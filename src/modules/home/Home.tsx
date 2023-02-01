import { Container } from "@mui/system";
import Product from "../product/Product";
import CategoryName from "./category/CategoryName";

const Home = ()=>{
    return (
<>
    <CategoryName/>
     <Container maxWidth="lg" sx={{display:"flex",alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
     <Product/>
     </Container>
</>
    )
}
export default Home;