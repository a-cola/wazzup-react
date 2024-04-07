import React from "react";
import { useNavigate } from "react-router-dom";

export function ErrorPage() {
    const navigate = useNavigate();

    return <>
        <div className="error-page">
            <h1>Page Not Found</h1>
            <button className="home-button" onClick={()=>navigate("/")}>Return to Start Page</button>
        </div>
    </>
}