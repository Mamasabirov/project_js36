import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";
import { Box } from "@mui/system";
import { useSearchParams } from "react-router-dom";
import PaginationControlled from "./Pagination";
import Aos from "aos";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(()=>{
    Aos.init({duration:2000})
    Aos.refresh()
  }, [])
  // Pagination
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const itemPerPage = 9;
  const count = Math.ceil(products.length / itemPerPage);

  function currentData() {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;

    return products.slice(begin, end);
  }

  return (
    <Box
      data-aos="fade-in"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "80%",
        margin: "auto",
      }}
    >
      {currentData().map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
      <PaginationControlled
        count={count}
        page={page}
        handleChange={handleChange}
      />
    </Box>
  );
};

export default ProductList;
