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
                    <button hidden={load} type="button" className="btn btn-primary"
                            data-bs-toggle="modal" data-bs-target="#exampleModal3">
                        লগইন
                    </button>
                    <button onClick={logOut} hidden={!load} type="button" className="btn btn-danger">
                        লগ আউট
                    </button>
                </div>
            </nav>
            <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">লগইন করুন </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="contact-modal-body modal-body">
                                <LoginPage></LoginPage>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default HomePage;