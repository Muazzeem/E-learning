import './Payment.css';
import './steper.css'
import React, {useEffect, useState} from "react";
import axios from "axios";
import {DotLoader} from "react-spinners";
import cartoon from "../../images/payment-logo.jpg";
import {useBkash} from "react-bkash";

const SITE_KEY = "6LetAmYeAAAAAPVdEy3rzYYohRzIU5Nr6FHvKCNQ";

const apiUrl = process.env.NODE_ENV === 'development' ? 'https://api.dev.learning.fractalslab.com' : 'https://api.learning.fractalslab.com';
console.log(process.env.NODE_ENV)

function CreatePayment() {
    const Swal = require('sweetalert2')
    const payment_cancel = {
        icon: 'error',
        title: 'Payment Cancellation',
        text: 'Payment has been canceled by the user',
        confirmButtonText: 'Close',
        allowOutsideClick: false,
        allowEscapeKey: false,
        closeOnClickOutside: false
    }
    const {error, loading, triggerBkash} = useBkash({
        onSuccess: (data) => {
            console.log(data)
            if (data.errorMessage)
                window.open("/failure?errorMessage="+data.errorMessage,"_self")

            else if (data.trxID){
                window.open("/success","_self")
            }

            else if(data['internal_error']){
                const payementId = JSON.stringify({"paymentID": data.paymentID})
                const token = localStorage.getItem('token')
                const headers = {
                      'Content-Type': 'application/json',
                      'Authorization': token
                    }
                axios.post(`${apiUrl}/payment/bkash/query-payment`, payementId, {headers:headers}).then(res=>{
                    if (res.data['transactionStatus'] === 'Completed'){
                        window.open("/success","_self")
                    }
                    else {
                        window.open("/failure?errorMessage=Your+payment+has+not+been+completed","_self")
                    }
                })
            }
            else {
                window.open("/failure","_self")
            }
        }, onClose: () => {
            Swal.fire(payment_cancel).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload()
                    console.log(loading)
                }
            })
        },
        bkashScriptURL: 'https://scripts.pay.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout.js', // https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js

        amount: 3000,
        onCreatePayment: async (paymentRequest) => {
            const token = localStorage.getItem('token')
            return await fetch(`${apiUrl}/payment/bkash/create-payment`,  {
                method: 'POST', headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }, body: JSON.stringify(paymentRequest),
            }).then((res) => {
                if (res.status === 200){
                    return res.json()
                }else {
                    Swal.fire('Please login first')
                }
            });
        },
        onExecutePayment: async (paymentID) => {
            const token = localStorage.getItem('token')
            return await fetch(`${apiUrl}/payment/bkash/execute-payment`, {
                method: 'POST', headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                },body: JSON.stringify({'paymentID': paymentID}),
            }).then((res) => {
                return res.json()
            });

        },
    });
    console.log(error);

    function resetSelect() {
        setIsOther(false)
        setIsChecked(false)
    }

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

    useEffect(() => {
        const token = localStorage.getItem('token')
        const loadScriptByURL = (id, url, callback) => {
            const isScriptExist = document.getElementById(id);

            if (!isScriptExist) {
                const script = document.createElement("script");
                script.type = "text/javascript";
                script.src = url;
                script.id = id;
                script.onload = function () {
                    if (callback) callback();
                };
                document.body.appendChild(script);
            }

            if (isScriptExist && callback) callback();
        }

        // load the script by passing the URL
        loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`, function () {
            console.log("Script loaded!");
        });
    }, []);
    const url = `${apiUrl}/crm/save-contact`
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [nameErr, setNameErr] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [phoneErr, setPhoneErr] = useState('')
    const [load, setLoad] = React.useState(false);
    const areAllFieldsFilled = (name !== "") && (email !== "") && (phone !== "")


    function handleClick() {
        axios.post(`${apiUrl}/crm/save-contact`, {headers: {"Content-Type": "application/json"}}).then(res => {
            console.log(res['data']['bkashURL'])
            if (res.status === 200) {
                // window.open(res['data']['bkashURL']);
            } else {
                throw new Error("Server can't be reached!")
            }
            setLoad(false)
        }).catch((error) => {
            console.log(error)
        })
    }


// onChange function

    const nameOnChanged = (e) => {
        setName(e.target.value)
    }

    const emailOnChanged = (e) => {
        setEmail(e.target.value)
    }
    const phoneOnChanged = (e) => {
        setPhone(e.target.value)
    }


//   onClick function

    function onClick() {
        if (typeof window !== "undefined") {
            if (window.fbq != null) {
                console.warn("Purchase")
                window.fbq('track', 'Purchase', {currency: "BDT", value: 3000});
            }
        }
    }

    const handleOnClicked = (e) => {
        e.preventDefault()
        onClick();
        if (name.length > 0) {
        } else {
            setNameErr(' name is required!')
        }
        if (email.length > 0) {
        } else {
            setEmailErr(' email is required!')
        }
        if (phone.length > 0) {
        } else {
            setPhoneErr(' phone is required!')
        }
        window.grecaptcha.ready(() => {
            setLoad(true)
            window.grecaptcha.execute(SITE_KEY, {action: 'submit'}).then(token => {
                setLoad(false)
                if (name.length > 1 && email.length > 1 && phone.length > 1) {
                    const form = {
                        name, email, phone, token
                    }
                    setLoad(true)
                    const axios = require('axios').default;
                    handleClick();
                    axios.post(url, form)
                        .then(res => {
                            console.log(res.status)
                            if (res.status === 200) {
                                setName("");
                                setEmail("");
                                setPhone("");
                                onClick();
                                setLoad(false)
                                if (isOther === true) {
                                    Swal.fire({
                                        icon: '',
                                        text: 'আপনার দেওয়া ইমেইল এ payment কিভাবে করবেন জানানো হয়েছে । দয়া করে আপনার ইমেইল এর ইনবক্স / স্প্যাম বক্স দেখুন ।',
                                    });
                                } else {
                                    triggerBkash();
                                }
                            }
                        })
                }

            });
        });


    }

    return (<div className="payment-card mt-50 mb-50">
        <div className="card-title text-center mx-auto">
            কোর্সটিতে এনরোল করুন
        </div>
        <div className="">
            <span className="mt-4 h5">আপনার তথ্য প্রদান করুন: </span>
            <form onSubmit={handleOnClicked} autoComplete="off">
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="row-2">
                            <input
                                type="text"
                                name="name"
                                onChange={nameOnChanged}
                                id='name'
                                value={name}
                                className="name" placeholder="নাম"></input>
                            {name.length > 1 ? "" : <p className='errormsg'>{nameErr}</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="row-2">
                            <input
                                type="email"
                                name="email"
                                onChange={emailOnChanged}
                                id='email'
                                value={email}
                                className="name" placeholder="ই-মেইল"></input>
                            {email.length > 1 ? "" : <p className='errormsg'>{emailErr}</p>}
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="row-2">
                            <input type="tel"
                                   name="phone"
                                   onChange={phoneOnChanged}
                                   id='phone'
                                   value={phone} className="number" placeholder="ফোন নাম্বার"></input>
                            {phone.length > 1 ? "" : <p className='errormsg'>{phoneErr}</p>}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <DotLoader
                                color="#4207eb"
                                loading={load}
                                size={80}
                            />
                        </div>

                    </div>
                </div>
                <div className="form">
                    <span className="h5">পেমেন্ট মেথড নির্বাচন করুন: </span>

                    <div className="row-1">
                        <div className="">
                            <div className="form-check content_center">
                                <input onChange={SelectBkash}
                                       checked={isChecked} className="form-check-input" type="radio"
                                       name="flexRadioDefault"
                                       id="flexRadioDefault1"></input>
                                <label className="form-check-label w-100 h-100 text-center"
                                       htmlFor="flexRadioDefault1">
                                    <div className="border-0">
                                        <div className="card-body p-0">
                                            <img className="bkash-logo" src={cartoon} alt=""/>
                                        </div>
                                    </div>
                                    <p className="h6">সম্পূর্ণ নিরাপদ পেমেন্ট নিশ্চয়তা </p>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="row-1">
                        <div className="">
                            <div className="form-check content_center mt-3">
                                <input onChange={SelectOtger}
                                       checked={isOther} className="form-check-input" type="radio"
                                       name="flexRadioDefault"
                                       id="flexRadioDefault2"></input>
                                <label className="form-check-label w-100 h-100 text-center"
                                       htmlFor="flexRadioDefault2">
                                    <div className="border-0">
                                        <div className="">
                                            <p className="h6 mt-3">অন্যান্য পেমেন্ট এর জন্য যোগাযোগ করুন</p>
                                            <div className="information mt-2">
                                            <span><i className="far fa-envelope"></i><a
                                                href="mailto:mr.saiful.azad@gmail.com"> mr.saiful.azad@gmail.com</a></span>
                                            </div>
                                            <div className="information mt-3">
                                            <span><i className="fas fa-phone-alt"></i><a
                                                href="tel:০১৬৭৬৭৪৩০৭৬"> ০১৬৭৬৭৪৩০৭৬</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                    <div>
                        <button type="submit" disabled={!areAllFieldsFilled || load}
                                onClick={handleOnClicked}
                                className="btn payment-button-bkash d-flex mx-auto text-white">
                            <b> কোর্সটি কিনুন </b></button>

                </div>
            </form>
        </div>
    </div>)
}

export default CreatePayment;


