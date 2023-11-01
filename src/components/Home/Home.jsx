import React from "react";
import Poster from '../Poster/Poster';
import Products from "../Products/Products";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import Categories from "../Categories/categories";
import Banner from "../Banner/Banner";




const Home = () => {

    const { products, categories } = useSelector((state) => state);

    return (
        <>
            <Sidebar/>
            <Poster />
            <Products products={products.list} amount={5}/>
            <Categories products={categories.list} amount={5}/>
            <Banner />
        </>
    )
};

export default Home;