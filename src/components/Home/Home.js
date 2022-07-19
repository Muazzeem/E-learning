import './home.css';
import '@justinribeiro/lite-youtube';
import Teacher from "./teacher";
import Course from "../Course/course";
import Content from "../Content/content";
import Contact2 from "../Contact/contact2";
import React, {useState} from 'react';
import axios from "axios";
import BkashPayment from "../Contact/bkash-payment";


function HomePage() {
    const [size, setSize] = useState()
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY
        setSize(scrolled)
    })

    return (<div className="container-fluid">
        <div className="home">
            <div className="row d-flex justify-content-between">
                <div className="col-lg-6 col-sm-12">
                    <div className="about">
                        <h1>ভূমিকা</h1>
                        <p>
                            কেমন হবে আপনি যদি আপনার ওয়েবসাইট এর জন্য ফ্রি REST API ব্যবহার করতে পারেন? আপনাকে প্রতি
                            মাসে, একটি নির্দিষ্ট সীমা পর্যন্ত, সার্ভার ও
                            ডাটাবেসের জন্য গুনতে হবে না কোনো টাকা আজীবনের জন্য। হ্যাঁ, আপনি ঠিকই পড়েছেন। এই কোর্সে আপনি
                            এমন কিছু
                            টেকনোলজি নিয়ে জানবেন।আপনি যে ওয়েবসাইটে ভিজিট করছেন সেটিও একটি সার্ভারলেস ওয়েবসাইট। আমাদের
                            এই কোর্সের
                            মাধ্যমে আপনিও এমন ওয়েবসাইট তৈরি করতে পারবেন একদম বিনামূল্যে। আপনি যদি অল্প কিছু প্রোগ্রামিং
                            জানেন যেমন:
                            python3.8, node.js তাহলে আপনিও হতে পারবেন ভালো একজন ব্যাকএন্ড ডেভেলপার। আমরা আছি আপনার
                            ক্যারিয়ারের পথে।
                        </p>
                    </div>
                    <div className="sm-player">
                        <div className='player-wrapper bg-white mt-sm-5'>
                            <lite-youtube videoid="-7Fd585bFr8"
                                          playlabel="Play: Intro AWS Serverless REST API development"></lite-youtube>
                        </div>
                        <div className={size > 210 ? "about" : "bla"}>
                            <BkashPayment/>
                        </div>
                        <div className="bg-white sort-details p-4">
                            <div className="video-text"><i className="fa-solid fa-check"></i> ১০ ঘন্টা ভিডিও
                                লেকচার
                            </div>
                            <div className="video-text"><i className="fa-solid fa-check"></i> ৮ টি লেকচার
                                সেশন
                            </div>
                            <div className="video-text"><i className="fa-solid fa-check"></i> ১ মাস কোর্সের
                                সময়সীমা
                            </div>
                            <div className="video-text"><i className="fa-solid fa-check"></i> সম্পূর্ণ অনলাইন ভিত্তিক
                                ক্লাস (Google Meet)
                            </div>
                            <div className="video-text"><i className="fa-solid fa-check"></i> সরাসরি প্রশ্নোত্তর সেশনের
                                জন্য ৩০ মিনিট
                            </div>
                            {/*<div className="video-text"><i className="fa-solid fa-check"></i> ক্লাস শুরু হবে ২৫ শে জুন*/}
                            {/*    ২০২২*/}
                            {/*</div>*/}
                            <div className="mt-3">
                                <span className="h5">কোর্স ফি: ৩,০০০</span> <span className="h2 mb-4">৳</span> <br/>
                                <small>৭ দিনের মানি ব্যাক গ্যারান্টি </small>
                            </div>
                        </div>
                        <div className="bg-white details">
                            <div className="bg-white p-4">
                                <div className="video-text"><i className="fa-solid fa-check"></i> ১০ ঘন্টা ভিডিও
                                    লেকচার
                                </div>
                                <div className="video-text"><i className="fa-solid fa-check"></i> ৮ টি লেকচার
                                    সেশন
                                </div>
                                <div className="video-text"><i className="fa-solid fa-check"></i> ১ মাস কোর্সের
                                    সময়সীমা
                                </div>
                                <div className="video-text"><i className="fa-solid fa-check"></i> সম্পূর্ণ অনলাইন
                                    ভিত্তিক
                                    ক্লাস (Google Meet)
                                </div>
                                <div className="video-text"><i className="fa-solid fa-check"></i> সরাসরি প্রশ্নোত্তর
                                    সেশনের
                                    জন্য ৩০ মিনিট
                                </div>
                                {/*<div className="video-text"><i className="fa-solid fa-check"></i> ক্লাস শুরু হবে ২৫ শে*/}
                                {/*    জুন ২০২২*/}
                                {/*</div>*/}
                                <div className="mt-3">
                                    <span className="h5">কোর্স ফি: ৩,০০০</span> <span className="h2 mb-4">৳</span> <br/>
                                    <small>৭ দিনের মানি ব্যাক গ্যারান্টি </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm-device">
                        <Teacher/>
                    </div>
                    <div className="lg-device">
                        <Content/>
                    </div>
                    <Course/>
                </div>
                <div className="col-lg-6 video-player">
                    <div className='player-wrapper bg-white mt-sm-5'>
                        <lite-youtube videoid="-7Fd585bFr8"
                                      playlabel="Play: Intro AWS Serverless REST API development"></lite-youtube>
                    </div>
                    <div className="bg-white">
                        <BkashPayment/>
                    </div>
                    <div className="bg-white details">
                        <div className="bg-white p-4">
                            <div className="video-text"><i className="fa-solid fa-check"></i> ১০ ঘন্টা ভিডিও
                                লেকচার
                            </div>
                            <div className="video-text"><i className="fa-solid fa-check"></i> ৮ টি লেকচার
                                সেশন
                            </div>
                            <div className="video-text"><i className="fa-solid fa-check"></i> ১ মাস কোর্সের
                                সময়সীমা
                            </div>
                            <div className="video-text"><i className="fa-solid fa-check"></i> সম্পূর্ণ অনলাইন ভিত্তিক
                                ক্লাস (Google Meet)
                            </div>
                            <div className="video-text"><i className="fa-solid fa-check"></i> সরাসরি প্রশ্নোত্তর সেশনের
                                জন্য ৩০ মিনিট
                            </div>
                            {/*<div className="video-text"><i className="fa-solid fa-check"></i> ক্লাস শুরু হবে ২৫ শে জুন*/}
                            {/*    ২০২২*/}
                            {/*</div>*/}
                        </div>
                        <div className="text-end me-5">
                            <span className="h5">কোর্স ফি: ৩,০০০</span><span className="h2 mb-4">৳</span> <br/>
                            <small>৭ দিনের মানি ব্যাক গ্যারান্টি </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="sm-device">
            <Content/>
        </div>
        <div className="lg-device mt-5">
            <Teacher/>
        </div>
        <Contact2/>
        <div className={size < 210 ? "about" : "bla"}>
            <div className="fixed-bottom bottom-contact">
                <BkashPayment/>
            </div>
        </div>
    </div>);
}

export default HomePage;