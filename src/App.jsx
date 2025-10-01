import React, { useState, useEffect } from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial", margin: "20px" }}>
      <h1>Danh sách Bài tập React</h1>
      <section>
        <h2>Bài 1: Bộ đếm ký tự</h2>
        <TextCounter />
      </section>
      <section>
        <h2>Bài 2: Đèn giao thông</h2>
        <TrafficLight />
      </section>
      <section>
        <h2>Bài 3: Danh sách công việc</h2>
        <TodoList />
      </section>
      <section>
        <h2>Bài 4: Giỏ hàng</h2>
        <Cart />
      </section>
      <section>
        <h2>Bài 5: Form Đăng ký</h2>
        <RegisterForm />
      </section>
    </div>
  );
}


const TextCounter = () => {
  const [text, setText] = useState("");
  const maxLength = 100;

  const handleChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập văn bản..."
        value={text}
        onChange={handleChange}
      />
      <p style={{ color: text.length >= maxLength ? "red" : "black" }}>
        Số ký tự: {text.length}/{maxLength}
      </p>
    </div>
  );
};


const TrafficLight = () => {
  const [light, setLight] = useState("red");

  const changeLight = () => {
    if (light === "red") setLight("green");
    else if (light === "green") setLight("yellow");
    else setLight("red");
  };

  useEffect(() => {
    const interval = setInterval(changeLight, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      {["red", "yellow", "green"].map((color) => (
        <div
          key={color}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: light === color ? color : "gray",
            margin: "5px 0",
          }}
        />
      ))}
      <button onClick={changeLight}>Chuyển đèn</button>
    </div>
  );
};


const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (i) => {
    setTasks(tasks.filter((_, index) => index !== i));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập công việc..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Thêm</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => deleteTask(i)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


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


const RegisterForm = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    setError("");
    setSubmitted(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Tên"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Đăng ký</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {submitted && (
        <div>
          <h4>Thông tin đã nhập:</h4>
          <p>Tên: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Mật khẩu: {submitted.password}</p>
        </div>
      )}
    </div>
  );
};
