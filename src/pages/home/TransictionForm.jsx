import React, { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestor";

export default function TransictionForm({ uid }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions");
  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ uid, name, amount });
  };

  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
    }
  }, []);
  return (
    <>
      <h3>Add a Transiction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transiction Name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>Amount($):</span>
          <input
            type="text"
            required
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button type="submit">Add Transiction</button>
      </form>
    </>
  );
}
