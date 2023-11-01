import React from "react";
import Poster from '../Poster/Poster';
import Products from "../Products/Products";
import Productsless from "../Products/Productsless";
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
            <Products products={products.list} amount={5} title="Trending"/>
            <Categories products={categories.list} amount={5}/>
            <Banner />
            <Productsless products={products.list} amount={5} title="Less than 100$" maxPrice={100} />

        </>
    )
};

export default Home;