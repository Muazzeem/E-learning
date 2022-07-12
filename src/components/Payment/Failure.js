import './Payment.css';
import cartoon from "../../images/icon-failed.png";

function FailurePage() {

    return (
        <div className="container-fluid home">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="card payment-card p-3 mb-5 bg-white">
                        <div className="card-body">
                            <div className="text-center">
                                <div className="profile-image float-md-right"><img
                                    src={cartoon} alt=""/></div>
                                <h1 className="header-title text-danger mt-3">Oh no, your payment failed!</h1>
                                <hr className="horizontal dark"></hr>
                                <p className="dis-text">
                                    Your payment has failed. Please check your balance and try again later.
                                </p>
                                <span>OR</span> <br/>
                                <p className="contact-text"><a href="mailto:muazzem.mamun@gmail.com?cc=mr.saiful.azad@gmail.comsubject=Payment%failed"><u>Contact Us</u></a></p>
                                <a href="/" type="button" className="btn btn-danger w-auto me-2 mt-4">Back to home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FailurePage;