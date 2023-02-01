import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useEffect, useState } from "react";
import { fetchProduct } from "../../../features/productSlice/ProductSlice";
import { useAppDispatch } from "../../../store";
const categoryName: string[] = [
  "All",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const CategoryName = () => {
  const dispatch = useAppDispatch();
  const [category, setcategory] = useState("All");
  useEffect(() => {
    dispatch(fetchProduct(category));
  }, [category,dispatch]);

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <Typography>Category:{category}</Typography>
        {categoryName.map((categorys, index) => {
          return (
            <React.Fragment key={index}>
              <Button
                variant="outlined"
                key={index}
                onClick={() => setcategory(categorys)}
              >
                {categorys}
              </Button>
            </React.Fragment>
          );
        })}
      </Container>
    </>
  );
};
export default CategoryName;
