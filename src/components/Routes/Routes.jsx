import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "../Home/Home";
import {ROUTES} from "../../utils/routes"
import Singleproduct from "../Products/singleproduct"
import Help from "../help/help"
import SingleCategory from "../Categories/singleCatgory"
import Cart from "../Cart/Cart";
import Payment from "../Payment/Payment"
import Favorites from "../favorites/favorites"

const AppRoutes = () => {
    return(
        <Routes>
            <Route index element={<Home />}/>
            <Route path={ROUTES.PRODUCT} element={<Singleproduct />}/>
            <Route path={ROUTES.HELP} element={<Help />} />
            <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
            <Route path={ROUTES.CART} element={<Cart />} />
            <Route path={ROUTES.PAY} element={<Payment/>}/>
            <Route path={ROUTES.FAVORITES} element={<Favorites />}/>
        </Routes>
    );
};

export default AppRoutes;