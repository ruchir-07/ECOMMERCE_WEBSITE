import React, { useState, useEffect } from 'react'
import { BsBagCheckFill } from 'react-icons/bs'

import { useStateContext } from '@/context/StateContext'
import Link from 'next/link';
import { runFireworks } from '@/lib/utils';

const Success =() =>{
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, [])

    return(
        <div classname='success-wrapper'>
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>Thank you for your order</h2>
                <p className="email-msg">
                    Check your email inbox for your receipt.
                </p>
                <p className="description">
                    If you have any question please email
                    <a href="mailto:order@example.com" className="email">order@example.com</a>
                </p>
                <Link href='/'>
                    <button type='buttton' width="300px" className='btn'>
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success