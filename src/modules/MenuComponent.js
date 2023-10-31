import React from 'react';
import logo from '../images/logo.svg';

function MenuComponent() {
    return(
       <div className="menu-component">
        <img src={logo} alt="logo" />
        <a href="#">Pricing</a>
        <a href="#">Product</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Community</a>
        <a href="#" className="button">Get Started</a>
       </div> 
    );
}

export default MenuComponent;