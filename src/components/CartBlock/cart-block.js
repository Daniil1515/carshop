import React from 'react';
import {BsCartCheck} from "react-icons/bs";

const CartBlock = () => {
    return (
        <div className='cart__block'>
            <BsCartCheck size={26} className="cart-block__icon"/>
            <span className="cart-block__price">1000$</span>
        </div>
    );
};

export default CartBlock;
