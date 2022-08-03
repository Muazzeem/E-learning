import './contact2.css'
import ContactBase from "./contact-base";
import React from "react";

function Contact2() {
    return (<div>
        <div className="contact-card">
            <div className="justify-content-center">
                <div className="">
                    <div className="card main-card shadow bg-white">
                        <div className="text-right step-number position-absolute top-0 end-0">
                            <span className="badge badge-primary">Step: 1</span>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 sm-player">
                                <div className="contact-from p-lg-5 p-4">
                                    <h3>রেজিস্ট্রেশন করুন</h3>
                                    <ContactBase/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 lg-contact-card">
                                <div className="paddin-lg-5 p-4">
                                    <h3>আমাদের সাথে যোগাযোগ করুন</h3>
                                    <div className="info mt-4">
                                        <div className="information">
                                            <span><i
                                                className="fas fa-map-marker-alt"></i>  মিরপুর, ঢাকা - বাংলাদেশ</span>
                                        </div>
                                        <div className="information">
                                            <span><i className="far fa-envelope"></i><a
                                                href="mailto:mr.saiful.azad@gmail.com"> mr.saiful.azad@gmail.com</a></span>
                                        </div>
                                        <div className="information">
                                            <span><i className="fas fa-phone-alt"></i><a
                                                href="tel:০১৬৭৬৭৪৩০৭৬"> ০১৬৭৬৭৪৩০৭৬</a></span>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <a href="https://www.facebook.com/mr.saiful.azad" target="_blank"
                                           rel="noreferrer" title="ফেসবুক প্রোফাইল"
                                           className="btn btn-primary btn-floating facebook m-1"><i
                                            className="fab fa-facebook-f"></i></a>
                                        <a href="https://www.linkedin.com/in/saifulazad/" target="_blank"
                                           rel="noreferrer" title="লিঙ্কডইন প্রোফাইল"
                                           className="btn btn-primary btn-floating linkedin m-1"><i
                                            className="fab fa-linkedin-in"></i></a>
                                    </div>
                                    <div className="mt-5" id="page-content">
                                        <p className="share-text"><i className="fas fa-share"
                                                                     aria-hidden="true"></i> Share Our Web:</p>
                                        <div className="fb-share-button"
                                             data-href="https://learning.fractalslab.com"
                                             data-layout="button" data-size="large">
                                            <a target="_blank" rel="noreferrer"
                                               href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                                               className="fb-xfbml-parse-ignore">Share</a>
                                        </div>
                                        <a className="btn btn-sm linkedin-btn text-white linkedin"
                                           href="https://linkedin.com/shareArticle?url=https://learning.fractalslab.com/&title=E-Learning"
                                           target="_blank" rel="noreferrer"><i
                                            className="fa-brands fa-linkedin-in"></i> Share</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 video-player">
                                <div className="contact-from p-lg-5 p-4">
                                    <h3>রেজিস্ট্রেশন</h3>
                                    <ContactBase/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Contact2;