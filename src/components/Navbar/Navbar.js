import './navbar.css';
import LoginPage from "../Login/login";
import React, {useEffect, useState} from "react";

function HomePage() {
    const [load, setLoad] = useState(false);
    const token = localStorage.getItem('token')
    useEffect(() => {
        if (token) {
            setLoad(true)
        }
    }, [load]);

    function logOut() {
        localStorage.clear()
        setLoad(false)
    }

    return (<div className="bg-white shadow">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
                <div className="container">
                    <a className="navbar-brand" href="/">Fractalslab</a>
                </div>
            </nav>
        </div>
    </div>);
}

export default HomePage;