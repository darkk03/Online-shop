import React from "react";

import AppRoutes from "../Routes/Routes";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/sidebar";

const App = () => {
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
