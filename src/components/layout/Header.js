import React from 'react';
import {Link} from 'react-router-dom';
function Header(props){
    return (
        <header id="header" className={props.color}>
            <div className="header__port">
                <Link to="/portfolio">portfoilo</Link>
            </div>
            <div className="header__logo">
                <Link to="/">LeeHyunwoo</Link>
            </div>
            <div className="header__menu">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/reference">Refer</Link></li>
                    <li><Link to="/youtube">Youtube</Link></li>
                    <li><Link to="/movie">Movie</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                </ul>
            </div>
        </header>
    )
}
export default Header;