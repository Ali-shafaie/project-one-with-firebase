import { useState } from "react";
import styles from "./Signup.module.css";
import { useSignup } from "../../hooks/useSignUp";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, ispending, signup] = useSignup();

  const onSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <div className={styles["signup-form"]}>
      <h2>Sign up</h2>
      <form action="" onSubmit={onSubmit}>
        <label>
          <span>Email</span>
          <input
            type="email"
            name=""
            onChange={(e) => setEmail(e.target.value)}
            id=""
            value={email}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name=""
            onChange={(e) => setPassword(e.target.value)}
            id=""
            value={password}
          />
        </label>
        <label>
          <span>Display Name</span>
          <input
            type="text"
            name=""
            onChange={(e) => setDisplayName(e.target.value)}
            id=""
            value={displayName}
          />
        </label>
        <button className="btn">Login</button>
      </form>
    </div>
  );
}
