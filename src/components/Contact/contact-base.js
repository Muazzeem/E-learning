import React, {useEffect, useState} from "react";
import axios from "axios";
import {DotLoader} from "react-spinners";

const SITE_KEY = "6LetAmYeAAAAAPVdEy3rzYYohRzIU5Nr6FHvKCNQ";

function ContactBase() {
    useEffect(() => {
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
    const url = "https://g9tasxr6hg.execute-api.ap-southeast-1.amazonaws.com/dev/save-contact"
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [nameErr, setNameErr] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [phoneErr, setPhoneErr] = useState('')
    const [load, setLoad] = React.useState(false);
    const areAllFieldsFilled = (name !== "") && (email !== "") && (phone !== "")


    const data = {
        "payerReference": " "
    }

    function handleClick() {
        axios.post('https://p903lgfgy3.execute-api.ap-southeast-1.amazonaws.com/dev/create-payment', data, {headers: {"Content-Type": "application/json"}}).then(
            res => {
                console.log(res['data']['bkashURL'])
                if (res.status === 200) {
                    // window.open(res['data']['bkashURL']);
                } else {
                    throw new Error("Server can't be reached!")
                }
                setLoad(false)
            }
        ).catch((error) => {
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
                console.log(token);
                setLoad(false)
                if (name.length > 1 && email.length > 1 && phone.length > 1) {
                    const form = {
                        name, email, phone, token
                    }
                    setLoad(true)
                    const Swal = require('sweetalert2')
                    const axios = require('axios').default;
                    handleClick();
                    // axios.post(url, form)
                    //     .then(res => {
                    //         console.log(res.status)
                    //         if (res.status === 200) {
                    //             setName("");
                    //             setEmail("");
                    //             setPhone("");
                    //             Swal.fire({
                    //                 icon: '',
                    //                 text: 'আপনার দেওয়া ইমেইল এ payment কিভাবে করবেন জানানো হয়েছে । দয়া করে আপনার ইমেইল এর ইনবক্স / স্প্যাম বক্স দেখুন ।',
                    //             });
                    //             onClick();
                    //             setLoad(false)
                    //         }
                    //     })
                }

            });
        });


    }
    return (<div>
        <div className="container-form-2" id='contact'>
            <div className="form-2">
                <div className="contact-info">
                    <div className="row justify-content-center">
                        <div className="contact-form">
                            <form onSubmit={handleOnClicked} autoComplete="off">
                                <div className="input-container">
                                    <label>নাম</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder=''
                                        onChange={nameOnChanged}
                                        id='name'
                                        value={name}/>
                                    {name.length > 1 ? "" : <p className='errormsg'>{nameErr}</p>}
                                </div>
                                <div className="input-container">
                                    <label>ই-মেইল</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder=''
                                        onChange={emailOnChanged}
                                        id='email'
                                        value={email}

                                    />
                                    {email.length > 1 ? "" : <p className='errormsg'>{emailErr}</p>}
                                </div>
                                <div className="input-container">
                                    <label>ফোন নাম্বার</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-control"
                                        placeholder=''
                                        onChange={phoneOnChanged}
                                        id='phone'
                                        value={phone}/>
                                    {phone.length > 1 ? "" : <p className='errormsg'>{phoneErr}</p>}
                                </div>
                                <div className="col-md-12 text-center">
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
                                    <div>
                                        <button hidden={!areAllFieldsFilled || load} type="submit"
                                                id="enroll-button"
                                                className="btn btn-primary mt-3 reg-form-submit-btn">রেজিস্ট্রেশন
                                            করুন
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default ContactBase;