import './teacher.css';
import cartoon from "../../images/teacher.jpg"

function Teacher() {
    return (<div className="">
        <div className="about-teacher mt-3 mt-sm-5">
            <h1>শিক্ষক</h1>
            <section>
                <div className="profile-page">
                    <div className="card border-0 profile-header">
                        <div className="body">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="profile-image float-md-right"><img
                                        src={cartoon} alt=""/></div>
                                </div>
                                <div className="col-lg-9 col-md-8 col-12">
                                    <h4 className="m-t-0 m-b-0"><strong>মোঃ সাইফুল ইসলাম</strong></h4>
                                    <p>একজন AWS সার্টিফাইড সলিউশন আর্কিটেক্ট (অ্যাসোসিয়েট)। AWS ক্লাউডে তার ৪ বছরের
                                        অধিক
                                        অভিজ্ঞতা রয়েছে। তিনি অত্যন্ত পরোপকারি এবং তার স্টুডেন্টদের প্রতি নিবেদিত। এই
                                        কোর্সে
                                        এনরোল এর মাধ্যমে একটা সোশ্যাল নেটওয়ার্ক তৈরি হবে যা আপনাদের পরবর্তী ভালো চাকরি
                                        পেতে
                                        ভূমিকা রাখবে।</p>
                                    <div className="mt-t">
                                        <a href="https://www.facebook.com/mr.saiful.azad" target="_blank"
                                           rel="noreferrer" title="ফেসবুক প্রোফাইল"
                                           className="btn social-btn ms-2 btn-primary btn-floating facebook social-share-link m-1">ফেসবুক
                                            প্রোফাইল</a>
                                        <a href="https://www.linkedin.com/in/saifulazad" target="_blank"
                                           rel="noreferrer" title="লিঙ্কডইন প্রোফাইল"
                                           className="btn social-btn btn-primary btn-floating  social-share-link linkedin m-1">লিঙ্কডইন
                                            প্রোফাইল</a>
                                        <a href="https://www.youtube.com/channel/UCDSgZ1hkrD6lKu1dL7AKIfQ"
                                           target="_blank" rel="noreferrer"
                                           className="btn btn-danger social-btn ms-2 btn-floating social-share-link text-white youtube m-1">ইউটিউব
                                            চ্যানেল</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>);
}

export default Teacher;