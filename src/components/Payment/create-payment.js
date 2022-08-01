import './Payment.css';
import './steper.css'
import Contact2 from "../Contact/contact2";
import React, {useState} from "react";
import cartoon from "../../images/bkash_payment_logo.png"

function CreatePayment() {
    const [isChecked, setIsChecked] = useState(false);
    const SelectBkash = event => {
        setIsOther(false)
        setIsChecked(event.target.checked);
    };
    const [isOther, setIsOther] = useState(false);
    const SelectOtger = event => {
        setIsChecked(false)
        setIsOther(event.target.checked);
    };

    return (
        <div className="container-fluid create-payment">
            <div className="row justify-content-between">
                <div className="col-lg-7 col-md-6 col-sm-12">
                    <Contact2></Contact2>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="contact-card">
                        <div className="justify-content-center">
                            <div className="">
                                <div className="card main-card shadow bg-white p-4 position-relative">
                                    <div className="text-right step-number position-absolute top-0 end-0">
                                        <span className="badge badge-primary">Step: 2</span>
                                    </div>
                                    <h5 className="select-payment mb-lg-5">পেমেন্ট মেথড নির্বাচন করুন</h5>
                                    <div className={`card padding-card ${isChecked ? "border-success" : "border"}`}>
                                        <div className="form-check content_center">
                                            <input onChange={SelectBkash}
                                                   checked={isChecked} className="form-check-input" type="checkbox"
                                                   name="flexRadioDefault"
                                                   id="flexRadioDefault1"></input>
                                            <label className="form-check-label w-100 h-100 text-center" htmlFor="flexRadioDefault1">
                                                <div className="card border-0">
                                                    <div className="card-body p-0">
                                                        <img src={cartoon} alt=""/>
                                                    </div>
                                                </div>
                                                <h5>সম্পূর্ণ নিরাপদ পেমেন্ট নিশ্চয়তা </h5>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="h4 text-center mt-1 mb-1">
                                        অথবা
                                    </div>
                                    <div className={`card padding-card other-payment ${isOther ? "border-success" : "border"}`}>
                                        <div className="form-check content_center mt-3">
                                            <input onChange={SelectOtger}
                                                   checked={isOther} className="form-check-input" type="checkbox"
                                                   name="flexRadioDefault"
                                                   id="flexRadioDefault2"></input>
                                            <label className="form-check-label w-100 h-100 text-center" htmlFor="flexRadioDefault2">
                                                <div className="card border-0">
                                                    <div className="card-body">
                                                        <p className="h5">অন্যান্য পেমেন্ট এর জন্য যোগাযোগ করুন</p>
                                                        <div className="information">
                                            <span><i className="far fa-envelope"></i><a
                                                href="mailto:mr.saiful.azad@gmail.com"> mr.saiful.azad@gmail.com</a></span>
                                                        </div>
                                                        <div className="information">
                                            <span><i className="fas fa-phone-alt"></i><a
                                                href="tel:০১৬৭৬৭৪৩০৭৬"> ০১৬৭৬৭৪৩০৭৬</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="payment-button">
                                        <button hidden={!isChecked} type="submit"
                                                id="enroll-button"
                                                className="btn w-50 btn-success mt-3 reg-form-submit-btn">কোর্সটি কিনুন
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePayment;


