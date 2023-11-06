import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { useGetProductQuery } from "../../feauters/singleproduct/singleproductSlice";
import { getRelatedProducts } from "../../feauters/products/productsSlice";
import { shuffle } from "../../feauters/products/productsSlice";

import Poster from "../Poster/Poster";
import Sidebar from "../Sidebar/Sidebar";
import Products from "../Products/Products";

const categoryToProductMap = {
  1: 6,  
  2: 7,  
  3: 9,
  4: 13,
  5: 28
};

const SingleCategory = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { list, related } = useSelector(({ products }) => products);


  const productId = categoryToProductMap[id];
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id: productId });

  useEffect(() => {
    if (!data || !list.length) return;

    dispatch(getRelatedProducts(data.category.id));
  }, [data, dispatch, list.length]);

  return (
    <>
      <Sidebar />
      <Poster />
      <Products products={related} title="Products" />
    </>
  );
};

export default SingleCategory;
