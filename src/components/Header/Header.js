import React from 'react';
import {Link} from "react-router-dom";
import CartBlock from "../CartBlock/cart-block";

const Header = () => {
    return (
        <header>
        <div>
            <span className='logo'>Buy Your Car</span>
            <ul className='nav'>
                <Link to="/about" className='li__link'>Про нас</Link>
                <Link to="/contacts" className='li__link'>Контакты</Link>
                <Link to="/cars" className='li__link'>Каталог авто</Link>
                <Link to="/account" className='li__link'>Личный кабинет</Link>
            </ul>
        </div>

                <div className='cart__icon'><CartBlock /></div>


        </header>
    );
};

export default Header;
