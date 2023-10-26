import React, { useEffect } from "react";


import AppRoutes from "../Routes/Routes";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { getCategories } from "../../feauters/categories/categoriesSlice";

const App = () => {

    const dispath = useDispatch();

    useEffect(() => {
        dispath(getCategories())
    }, [dispath])

    return (
    <div className="app">
        <Header />

        <div className="container">

            <Sidebar />
            <AppRoutes />

        </div>


        <Footer />
    </div>
    );
};

export default App;
