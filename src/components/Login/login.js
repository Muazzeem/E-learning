import React, {useState} from "react";
import Swal from "sweetalert2";


function LoginPage() {
    const apiUrl = process.env.NODE_ENV === 'development' ? 'https://dev.explorer.fractalslab.com' : 'https://dev.explorer.fractalslab.com';
    console.log(apiUrl)
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const [passwordErr, setpasswordErr] = useState('')
    const [emailErr, setEmailErr] = useState('')

    const passwordOnChanged = (e) => {
        setpassword(e.target.value)
    }

    const emailOnChanged = (e) => {
        setUsername(e.target.value)
    }

    const handleOnClicked = (e) => {
        e.preventDefault()
        if (password.length > 0) {
        } else {
            setpasswordErr(' password is required!')
        }
        if (username.length > 0) {
        } else {
            setEmailErr(' email is required!')
        }
        const form = {
            password, username
        }
        const axios = require('axios').default;
        const url = `${apiUrl}/api/user/login`
        axios.post(url, form)
            .then(res => {
                if (res.data['token']){
                    localStorage.setItem('token', res.data['token'])
                    window.location.reload()
                }
            })
    }

    return (<>
        <form onSubmit={handleOnClicked} autoComplete="off">
            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    <div className="row-2">
                        <input
                            type="text"
                            name="username"
                            onChange={emailOnChanged}
                            id='username'
                            value={username}
                            className="name" placeholder="Username"></input>
                    </div>
                </div>
                <div className="col-lg-12 col-sm-12">
                    <div className="row-2">
                        <input
                            type="password"
                            name="password"
                            onChange={passwordOnChanged}
                            id='password'
                            value={password}
                            className="name" placeholder="Password"></input>
                    </div>
                </div>
            </div>
            <div>
                <button type="submit"
                        className="btn payment-button-bkash d-flex mx-auto text-white">
                    <b> লগইন </b></button>

            </div>
        </form>
    </>)
}

export default LoginPage;