import './Payment.css';
import cartoon from "../../images/successful-icon-10.jpg"

function SuccessPage() {

    return (
        <div className="container-fluid home">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="card payment-card p-3 mb-5 bg-white">
                        <div className="card-body">
                            <div className="text-center">
                                <div className="profile-image float-md-right"><img
                                    src={cartoon} alt=""/></div>
                                <h1 className="header-title text-success mt-3">Payment Successful!</h1>
                                <hr className="horizontal dark"></hr>
                                <p className="dis-text">Thanks for enroll our serverless api development course, your
                                    payment is now pending.
                                    We will confirm you bia your providing email address.
                                </p>
                                <a href="/" type="button" className="btn return-btn btn-success w-auto me-2 mt-4">Back to home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage;