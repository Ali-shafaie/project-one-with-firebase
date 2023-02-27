import { useState } from "react";
import styles from "./login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h3>Login</h3>
      <label>
        <span>Email</span>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <span>password</span>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button className="btn">Login</button>
    </form>
  );
}
