import React from "react";
import axios from "axios";
import {DotLoader} from "react-spinners";

function BkashPayment() {


    return (
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
            <button disabled={load} onClick={() => {
                setLoad(true);
                handleClick();
            }} type="button"
                    className="btn reg-popup-btn w-100 btn-primary btn-lg mt-4 mb-sm-2"> রেজিস্ট্রেশন
                করুন
            </button>
        </div>
    )
}

export default BkashPayment;