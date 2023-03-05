import { useEffect, useState } from 'react';
import '../App.css';

function CartList({ cart }) {

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: CART
            })
        }).then((response) => {
            return response.json()
        })
            .then((response) => {
                if (response.url) {
                    window.location.assign(response.url)
                }
            })
    }


    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div className='cart-side'>
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div>
                            <img src={cartItem.asset.imageURL} alt="pic" width={40} />
                            <span> {cartItem.name} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</button>
                            <span> {cartItem.quantity} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                            <span> Rs. {cartItem.itemPrice * cartItem.quantity} </span>
                        </div>
                    )
                })
            }

            <p> Total  <span></span>
                {
                    CART.map(item => item.itemPrice * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
            <button onClick={checkout}>purchase</button>
        </div >
    )
}

export default CartList