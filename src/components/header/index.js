import React from "react";
import './header.css';
import { useUserAuth } from "../../provider/context";


export default ({ black }) => {
    const { logOut } = useUserAuth();
    const logout = async (e) => {
        e.preventDefault();
        try {
            await logOut();
        } catch (error) {
            alert("error: " + error.message);
            console.log(error.message);
        }
    }
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="featured--logo" />
                </a>
            </div>
            <div className="header--user">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="logout" onClick={logout} />
                </a>
            </div>
        </header>
    )
}