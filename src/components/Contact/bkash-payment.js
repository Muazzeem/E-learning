import React from "react";
import axios from "axios";
import {DotLoader} from "react-spinners";

function BkashPayment() {
    const data = {
        "payerReference": " "
    }
    const [load, setLoad] = React.useState(false);

    function handleClick() {
        axios.post('https://p903lgfgy3.execute-api.ap-southeast-1.amazonaws.com/dev/create-payment', data, {headers: {"Content-Type": "application/json"}}).then(
            res => {
                console.log(res['data']['bkashURL'])
                if (res.status === 200) {
                    window.open(res['data']['bkashURL']);
                } else {
                    throw new Error("Server can't be reached!")
                }
                setLoad(false)
            }
        ).catch((error) => {
            console.log(error)
        })

    }

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