import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { useGetProductQuery  } from "../../feauters/singleproduct/singleproductSlice";

import { ROUTES } from "../../utils/routes";

import Product from "../Products/Product";

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
  
    }, [data, dispatch, list.length]);
  
    return !data ? (
      <section className="preloader">Loading...</section>
    ) : (
      <>
        <Product {...data} />
      </>
    );
  };
  
  export default SingleProduct;
