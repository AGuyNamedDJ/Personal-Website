import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useNavigate, useOutletContext, useParams} from "react-router-dom"

const HomePage = () => {
    return (
        <div class="content">
            
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}



export default HomePage;