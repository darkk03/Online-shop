import React, { useEffect } from "react";

import { ROUTES } from "../../utils/routes";
import { Route, Routes } from 'react-router-dom';
import AppRoutes from "../Routes/Routes";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { getCategories } from "../../feauters/categories/categoriesSlice";
import { getProducts } from "../../feauters/products/productsSlice";
import Help from "../help/help"
import Terms from "../terms/terms"

const App = () => {

    const dispath = useDispatch();

    useEffect(() => {
        dispath(getCategories())
        dispath(getProducts())
    }, [dispath])

    return (
        <div className="app">
            <Header />

            <div className="container">
                
                <Routes>
                    <Route path={ROUTES.HELP} element={<Help />} />
                    <Route path={ROUTES.TERMS} element={<Terms />} />
                </Routes>
                <AppRoutes />

            </div>


            <Footer />
        </div>
    );
};

export default App;
