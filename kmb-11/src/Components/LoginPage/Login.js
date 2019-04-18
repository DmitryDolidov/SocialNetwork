import React from 'react';
import './LoginPage.css';

const Login = (props) => {

    let errorMessageBlock = props.errorMessage && <p className={"error-message"}>{props.errorMessage}</p>;
    let statusBarBlock = props.statusBar &&
        <img src="https://cdn2.scratch.mit.edu/get_image/user/16235410_60x60.png" className={"status-bar-icon"} alt=""/>
    let captchaBlock = props.captchaUrl &&
        <div className={"login-captcha"}><img src={props.captchaUrl}/><span>Введите надпись с изображения:</span><input
            type="text" onChange={props.addCurrentCaptcha} value={props.currentCaptcha}/></div>

    return <div className={"content"}>
        <div className={"login-box"}>
            <div className="main-blocks">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" onChange={props.addCurrentLogin} value={props.currentLogin}/>
            </div>
            <div className="main-blocks">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" onChange={props.addCurrentPassword} value={props.currentPassword}/>
            </div>
            <div className="main-last-blocks">
                <label htmlFor="checkbox" id="remember">
                    <input type="checkbox" className={"checkbox"}/>
                    remember me
                </label>
                <button id="login" onClick={props.onSubmitButtonClick}>Log In</button>
                {statusBarBlock}
            </div>
            {errorMessageBlock}
            {captchaBlock}
        </div>
    </div>
}

export default Login;