import React, { useState } from "react"

export default function Hamburger() {

    const [activeMenu, setActiveMenu] = useState(false);

    return (
        <>
            <div className="hamburger-navigation">
                <ul className="hamburger-buttons">
                    <li className="hamburger-button"><a>Wahoo</a></li>
                    <li className="hamburger-button"><a>Wahoo</a></li>
                    <li className="hamburger-button"><a>Wahoo</a></li>
                    <li className="hamburger-button"><a>Wahoo</a></li>
                </ul>
            </div>
        </>
    );
}