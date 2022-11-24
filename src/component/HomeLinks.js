import React, { useEffect ,useState} from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
// import photo from "../images/cart-image.JPG";
import Home from '../views/Home';
import HomeProductCard from './HomeProductCard';
import Header from "../component/header";
import Footer from './footer';
import "../component/styles/homelinks.css"

const HomeLinks = () => {
    const params = useParams();
    const [showMoreCategories,setShowMoreCategories] = useState(false);
    useEffect(()=> {
        console.log(window.location.pathname);
    },[])
    const[cart,setcart]= useState([])
    const [show,setshow] =useState(true);

    const [warning, setwarning]= useState(false);
    return (
        <>
        <Header  />
            <div className="Box-container">
                <div className='links-container'>
                    <div>
                        <ul className="links-list">
                            <button> <li className="btn"><a href="/" className="link">All Categories:</a></li></button>
                            <li className="alink">
                                <Link to='electronics' className="link">Electonics</Link>
                                <span className='angle-right-icon'><i class="fa-solid fa-angle-right"></i></span>
                            </li>
                            <li className="alink">
                                <Link to='decor' className="link">Home Decorations</Link>
                                <span className='angle-right-icon'><i class="fa-solid fa-angle-right"></i></span>
                            </li>
                            <li className="alink">
                                <Link to='men' className="link">Men's Clothing</Link>
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

                           {showMoreCategories && (<>

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
                            
                            </>)}
                            <button> <li className="more-button" onClick={()=>setShowMoreCategories(!showMoreCategories)}>See More:</li></button>
                        </ul>
                    </div>

                    <div style={{ width: "70%" }}>
                        { window.location.pathname ==='/' ? <> <div className='cart-image'></div> <Home /></> : <Outlet />}
                
                    </div>
            
                </div>

            </div>

            <Footer/>
            
        </>
    )
}
export default HomeLinks