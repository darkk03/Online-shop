import React from "react";
import Poster from '../Poster/Poster';
import Products from "../Products/Products";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";


const Home = () => {

    const { list } = useSelector(({products}) => products)

    return (
        <>
            <Sidebar />
            <Poster />
            <Products products={list} amount={5}/>
        </>
    )
};

export default Home;