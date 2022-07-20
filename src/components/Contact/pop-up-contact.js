import './contact.css';
import React from 'react'
import ContactBase from "./contact-base";


function PopUpContact() {


    return (<div className="bg-white">
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2"
                className="btn reg-popup-btn w-100 btn-primary btn-lg mt-4 mb-sm-2"> রেজিস্ট্রেশন করুন
        </button>
        <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 id="exampleModalLabel2">রেজিস্ট্রেশন</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                    </div>
                    <div className="modal-body">
                        <div className="contact-modal-body modal-body">
                            <ContactBase/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default PopUpContact;