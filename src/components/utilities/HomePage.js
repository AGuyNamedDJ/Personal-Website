import React from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate, useOutletContext, useParams} from "react-router-dom"

const HomePage = () => {
    return (
        <div class="content">
            
            <Navbar />
            <Outlet />
        </div>
    )
}



export default HomePage;