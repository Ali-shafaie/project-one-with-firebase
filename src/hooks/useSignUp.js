import { useState } from "react";
import { projectAuth } from "../firebase/config";
export const useSignup = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword();
      console.log(res.user);
      if (!res) {
        throw new Error("could not complete the signup");
      }

      await res.user.updateProfile({ displayName });
      setError(null);
      setIsPending(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };
  return { error, isPending, signup };
};
