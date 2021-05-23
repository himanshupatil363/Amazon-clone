import React from 'react'
import CartProduct from '../components/CartProduct'
const Cart = () => {
    const products=[{
        "title":"Dr Trust Professional Series Finger Tip Pulse Oximeter With Audio Visual Alarm and Respiratory Rate(Blue)",
        "price":349900,
        "InStock":true,
        "FreeDelivery":true,
        "AFullfilled":true,
        "Quantity":1,
        "Selected":true,
        "img":"https://m.media-amazon.com/images/I/71M-09ee9AL._AC_AA180_.jpg"
    }]
    return (
        <div className="flex flex-col bg-gray-200 min-h-screen p-3">
            <div className="flex flex-col">
                <span className="font-bold flex">Pay faster for all your shopping needs<p className="text-red-700 ml-1">with Amazon Pay balance</p></span>
                <p>Get Instant refund on cancellations | Zero payment failures</p>
            </div>
            <div className="flex justify-between mt-5">
                <div className="flex p-4 flex-col bg-white w-4/5">
                    <p className="text-3xl">Shopping Cart</p>
                    <p className="text-sm text-green-600">Deselect all items</p>
                    <p className=" text-right ">Price</p>
                    <hr />
                    {
                        products.map((product,index)=>(
                        
                        <CartProduct key={index} product={product}/>
                    ))}
                </div>
                <div className="flex flex-col ml-3 w-1/5  bg-white">
                    <div>h</div>
                    <div>h</div>
                </div>
            </div>
        </div>
    )
}

export default Cart
