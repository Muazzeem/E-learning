import './content.css';
import cartoon2 from "../../images/faq-image-2.jpg"
import cartoon3 from "../../images/faq-image-3.jpg"
import cartoon4 from "../../images/faq-image-4.jpg"


function Content() {
    return (<div className="">
        <div className="about mt-3 mt-sm-5">
            <h1 className="text-center">আমাদের কোর্স সম্পর্কে</h1>
        </div>
        <div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card service-card">
                        <div className="text-center">
                            <div className="profile-image float-md-right"><img
                                src={cartoon3} alt=""/></div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Q. কোর্সটি কাদের জন্য ?</h5>
                            <p>🧿 যাদের AWS পাবলিক ক্লাউড গভীর আগ্রহ রয়েছে</p>
                            <p>🧿 যারা বিনামূল্যে API ব্যাকএন্ড তৈরি করতে চায়</p>
                            <p>🧿 ব্যাকএন্ড ওয়েব ডেভেলপমেন্ট সম্পর্কে কিছু ধারণা আছে</p>
                            <p>🧿 বিভিন্ন AWS সার্টিফিকেশন পরীক্ষা দিতে চান</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card service-card">
                        <div className="text-center">
                            <div className="profile-image float-md-right"><img
                                src={cartoon2} alt=""/></div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Q. এই কোর্স থেকে আপনি কি শিখবেন?</h5>
                            <p>🧿 সম্পূর্ণ সার্ভারলেস ব্যাকএন্ড তৈরি করতে পারবেন</p>
                            <p>🧿 ১০০% বিনামূল্যে REST API ডেভেলপমেন্ট করতে পারবেন</p>
                            <p>🧿 AWS সার্ভিস গুলি শিখতে পারবেন</p>
                            <p>🧿 সার্ভারলেস অ্যাপ্লিকেশন সম্পর্কে জানতে পারবেন</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card service-card">
                        <div className="text-center">
                            <div className="profile-image float-md-right"><img
                                src={cartoon3} alt=""/></div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Q. আপনি এই কোর্সের আপনার জ্ঞান কোথায় প্রয়োগ করবেন?</h5>
                            <p>🧿 এই কোর্সটি AWS জগতে প্রবেশের একটি রাস্তার মতো</p>
                            <p>🧿 অনেক কোম্পানি রয়েছে যারা AWS এর বিভিন্ন সার্ভিস নিয়ে কাজ করে তাদের সাথে কাজ করতে
                                পারবেন</p>
                            <p>🧿 আপনার জ্ঞান যেকোনো কোম্পানিকে REST API তৈরি করতে সাহায্য করবে।</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 d-none d-md-block d-lg-none">
                    <div className="card service-card">
                        <div className="text-center">
                            <div className="profile-image float-md-right"><img
                                src={cartoon2} alt=""/></div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Q. কোর্সের কালচার কি?</h5>
                            <p>🧿 প্রতি সপ্তাহে ২ দিন লাইভ সেশন</p>
                            <p>🧿 আপনার কর্মজীবনকে এগিয়ে নেওয়ার জন্য নিজেকে প্রকাশ করার একটি সুযোগ</p>
                            <p>🧿 প্রতিটি সেশনে শিক্ষকের সাথে হ্যান্ডস-অন এবং লাইভ কোডিং এর সুযোগ রয়েছে</p>
                            <p>🧿 আপনার শেখার কার্যকারিতা নিশ্চিত করার জন্য রয়েছে অ্যাসাইনমেন্ট।</p>
                            <p>🧿 AWS ক্যারিয়ার রিলেটেড কিছু লাইভ সেশন</p>
                            <p>🧿 প্রতিটি লেকচারের শেষে প্রশ্ন করে বুঝে নিতে পারবেন</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card service-card">
                        <div className="text-center">
                            <div className="profile-image float-md-right"><img
                                src={cartoon2} alt=""/></div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Q. কোর্সের কালচার কি?</h5>
                            <p>🧿 প্রতি সপ্তাহে ২ দিন লাইভ সেশন</p>
                            <p>🧿 আপনার কর্মজীবনকে এগিয়ে নেওয়ার জন্য নিজেকে প্রকাশ করার একটি সুযোগ</p>
                            <p>🧿 প্রতিটি সেশনে শিক্ষকের সাথে হ্যান্ডস-অন এবং লাইভ কোডিং এর সুযোগ রয়েছে</p>
                            <p>🧿 আপনার শেখার কার্যকারিতা নিশ্চিত করার জন্য রয়েছে অ্যাসাইনমেন্ট।</p>
                            <p>🧿 AWS ক্যারিয়ার রিলেটেড কিছু লাইভ সেশন</p>
                            <p>🧿 প্রতিটি লেকচারের শেষে প্রশ্ন করে বুঝে নিতে পারবেন</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card service-card">
                        <div className="text-center">
                            <div className="profile-image float-md-right"><img
                                src={cartoon4} alt=""/></div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Q. এই কোর্সের পূর্বশর্ত কি ?</h5>
                            <p>🧿 সপ্তাহে কমপক্ষে ৮ ঘন্টা সময় দিতে হবে</p>
                            <p>🧿 ক্রেডিট/ডেবিট/প্রিপেইড কার্ড</p>
                            <p>🧿 উচ্চ মানের ইন্টারনেট গতি</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Content;