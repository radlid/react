import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header= ()=>{
    const [btnLogin,setBtnLogin]=useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <div className="logo">
                <img id="pic" src={LOGO_URL}/>
                </div>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li> Cart</li>
                    <button className="btn-login" onClick={()=> btnLogin === "Login"? setBtnLogin("Logout") : setBtnLogin("Login")} >{btnLogin}</button>
                </ul>
            
            </div>

        </div>
    );
};
export default Header;