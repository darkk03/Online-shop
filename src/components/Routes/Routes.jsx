import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "../Home/Home";
import {ROUTES} from "../../utils/routes"
import Singleproduct from "../Products/singleproduct"
import Help from "../help/help"

const AppRoutes = () => {
    return(
        <Routes>
            <Route index element={<Home />}/>
            <Route path={ROUTES.PRODUCT} element={<Singleproduct />}/>
            <Route path={ROUTES.HELP} element={<Help />} />
        </Routes>
    );
};

export default AppRoutes;