import React from 'react';
import {Link} from "react-router-dom";

function More() {
    return (
        <>
            <div>
                <ul className="links-list">
                    <li className="alink">
                        <Link to='electronics' className="link">Beauty&Cosmetics</Link>
                        <span className='angle-right-icon'><i class="fa-solid fa-angle-right"></i></span>
                    </li>
                    <li className="alink">
                        <Link to='decor' className="link">Lights&Lighting</Link>
                        <span className='angle-right-icon'><i class="fa-solid fa-angle-right"></i></span>
                    </li>
                    <li className="alink">
                        <Link to='men' className="link">Home Textiles</Link>
                        <span className='angle-right-icon'><i class="fa-solid fa-angle-right"></i></span>
                    </li>
                    <li className="alink">
                        <Link to='women' className="link">Women's Clothing</Link>
                        <span className='angle-right-icon'><i class="fa-solid fa-angle-right"></i></span>
                    </li>
                    <li className="alink">
                        <Link to='baby' className="link">Baby Toys</Link>
                        <span className='angle-right-icon'><i class="fa-solid fa-angle-right"></i></span>
                    </li>
                    <li className="alink">
                        <Link to='sports' className="link">Sports</Link>
                        <span className='angle-right-icon'><i class="fa-solid fa-angle-right"></i></span>
                    </li>
                    {/* <button> <li className="btn">More:</li></button> */}
                </ul>
            </div>
        </>
    )
}

export default More