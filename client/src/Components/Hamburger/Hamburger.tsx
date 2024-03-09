import React, { useState } from "react"
import "./Hamburger.css"

export default function Hamburger() {

    const [activeMenu, setActiveMenu] = useState(false);

    return (
        <>
            <div className="hamburger nav">
                <ul className="hamburger buttons">
                    <div className="hamburger menu" onClick={() => { setActiveMenu(!activeMenu) }}>
                        <div className="lines"></div>
                        <div className="lines"></div>
                        <div className="lines"></div>
                    </div>
                    <li className="hamburger button"><a className="hamburger link" href="./Home">Hello</a></li>
                    <li className="hamburger button"><a className="hamburger link" href="./Home">Animal</a></li>
                    <li className="hamburger button"><a className="hamburger link" href="./Home">People</a></li>
                    <li className="hamburger button"><a className="hamburger link" href="./Home">Help</a></li>
                </ul>
            </div >
        </>
    );
}