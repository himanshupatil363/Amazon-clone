import React, { useRef } from "react";

const CartProduct = ({ product }) => {
  const list = useRef(null);
  const opt = [];
  for (var i = 0; i < 10; i++) {
    opt.push(<option value={i}>{i}</option>);
  }
  return (
    <div className="flex">
      <div className="flex items-center">
        <input type="checkbox" />
      </div>
      <div>
        <img className="p-2" src={product.img} alt="ok" />
      </div>
      <div className="flex flex-col mr-10">
        <p className=" text-green-700 font-bold text-xl">{product.title}</p>
        {product.InStock ? (
          <div className="text-xs text-green-800">In stock</div>
        ) : (
          <div>Out of stock</div>
        )}
        {product.FreeDelivery ? (
          <div className="text-sm">Eligible for FREE Shipping</div>
        ) : (
          <div className="text-sm">Not eligible for FREE shipping</div>
        )}
        {product.AFullfilled && (
          <div>
            <img
              src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
              alt="not available"
            />
          </div>
        )}
        <div className=" flex flex-start mt-1">
          <div
            className="bg-gray-100 border border-gray-400 px-2 py-1 rounded-md shadow-lg "
            onClick={() => {
              console.log(list);
            }}
          >
            <p className=""> Qty:</p>
            <select
              ref={list}
              className="bg-gray-100 outline-none pl-5"
              name="qty"
              id="qty"
            >
              {opt}
            </select>
          </div>
        </div>
      </div>
      <div>
        <p className="font-bold flex">
          <p>₹</p> {product.price}
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
