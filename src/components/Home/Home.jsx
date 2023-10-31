import React from "react";
import Poster from '../Poster/Poster';
import Products from "../Products/Products";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import Categories from "../Categories/categories"


const Home = () => {

    const { products, categories } = useSelector((state) => state);

    return (
        <>
            <Sidebar/>
            <Poster />
            <Products products={products.list} amount={5}/>
            <Categories products={categories.list} amount={5}/>
        </>
    )
};

export default Home;