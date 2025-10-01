import React, { useState, useEffect } from "react";

export default function Bai4() {
  return (
    <div style={{ margin: "20px" }}>
        <h2>Bài 4: Giỏ hàng</h2>
        <Cart />
    </div>
  );
}

const ProductItem = ({ product, addToCart }) => (
  <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px 0" }}>
    <h3>{product.name}</h3>
    <p>Giá: {product.price}đ</p>
    <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
  </div>
);

const Cart = () => {
  const products = [
    { id: 1, name: "Bút bi", price: 5000 },
    { id: 2, name: "Bút chì", price: 3000 },
    { id: 3, name: "Tẩy", price: 10000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (p) => setCart([...cart, p]);

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div>
      <p>
        Giỏ hàng: {cart.length} sản phẩm, tổng tiền: {total}đ
      </p>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
};