import React, { useState } from "react"
import "./Hamburger.css"

export default function Hamburger() {

    const [activeMenu, setActiveMenu] = useState(false);

    return (
        <>
            <div className="hamburger nav">
                <ul className="hamburger buttons">
                    <li className="hamburger button"><a className="hamburger link" href="./Home">Hello</a></li>
                    <li className="hamburger button"><a className="hamburger link" href="./Home">Animal</a></li>
                    <li className="hamburger button"><a className="hamburger link" href="./Home">People</a></li>
                    <li className="hamburger button"><a className="hamburger link" href="./Home">Help</a></li>
                </ul>
                <div className={`${activeMenu ? "hamburger-active" : "hamburger-inactive"}`} onClick={() => { setActiveMenu(!activeMenu) }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div >
        </>
    );
}