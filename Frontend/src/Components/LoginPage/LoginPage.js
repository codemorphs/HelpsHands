import React from "react";
import "./LoginPage.css";

function LoginPage(){
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <h3>Sign In</h3>
                        <form id="login-form" action="#" method="#">
                            <div className="emailField">
                                <input type="email" id="email" name="email" required placeholder="Email"/>
                            </div>
                            <div className="passwordField">
                                <input type="password" id="password" name="password" required placeholder="Password"/>
                            </div>
                            <div className="SignBtn">
                                <button type="submit">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;