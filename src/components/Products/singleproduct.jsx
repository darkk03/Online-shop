import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { useGetProductQuery  } from "../../feauters/singleproduct/singleproductSlice";
import { getRelatedProducts } from "../../feauters/products/productsSlice";
import { shuffle } from "../../feauters/products/productsSlice";



import { ROUTES } from "../../utils/routes";

import Product from "../Products/Product";
import Products from "../Products/Products";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { list, related } = useSelector(({ products }) => products);
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isSuccess]);

  useEffect(() => {
    if (!data || !list.length) return;

    dispatch(getRelatedProducts(data.category.id));
  }, [data, dispatch, list.length]);

  return (
    <>
      {data ? <Product {...data} /> : null}
      {related && related.length > 0 ? (
        <Products products={related} amount={5} title="Related products" />
      ) : null}
    </>
  );
};

export default SingleProduct;