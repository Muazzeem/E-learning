import './Payment.css';
import cartoon from "../../images/icon-failed.png";

function CancelPage() {

    return (
        <div className="container-fluid home">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="card payment-card p-3 mb-5 bg-white">
                        <div className="card-body">
                            <div className="text-center">
                                <div className="profile-image float-md-right"><img
                                    src={cartoon} alt=""/></div>
                                <h1 className="header-title text-danger mt-3">Payment Canceled</h1>
                                <hr className="horizontal dark"></hr>
                                <p className="dis-text">
                                    Payment has been canceled and will not be charged.
                                </p>
                                <a href="/" type="button" className="btn btn-danger w-auto me-2 mt-4">Back to home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CancelPage;