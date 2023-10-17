import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart, selectCart } from "../store/Cart/cartSlice";
import Sale from "../components/Sale";

const Cart = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  return (
    <div style={{ width: "100%", height: "100%", overflowX: "hidden" }}>
      <h1 style={{width: "100%", transform: "translate(50%, 50%)" }}>Cart</h1>
      {cart.items.length > 0 ? (
        <div>
          {cart.items.map((item) => (
            <div key={item.id} style={{ width:'70%', display: "flex", gap: "1rem", margin: '2rem', justifyContent: 'space-between' }}>
              <figure
                style={{
                  width: "40%",
                  height: "300px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  style={{ width: "100%", objectFit: "contain", objectPosition: "center" }}
                  src={item.image}
                  alt={item.name}
                />
              </figure>
              <div>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                {item.selectedColor && item.selectedSize ? (
                  <p>
                    Style: {item.selectedColor} and Size: {item.selectedSize}
                  </p>
                ) : null}
                <p>Price: {item.price}</p>
              </div>
              <div>
                <button onClick={() => dispatch(removeItemFromCart(item))}>
                  Remove Item
                </button>
              </div>
            </div>
          ))}
          <div style={{ position: 'absolute', top: '7.5rem', right: '5rem', backgroundColor: 'white', padding: '1rem', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', cursor: 'arrow' }}>
            <p style={{userSelect: 'none'}}>Total Price: {cart.totalCartPrice}</p>
          </div>
        </div>
      ) : (
        <div>
          <p>Cart is empty</p>
          <h2>Check out some featured items!</h2>
          <Sale />
        </div>
      )}
    </div>
  );
};

export default Cart;
