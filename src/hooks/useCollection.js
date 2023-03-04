import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

import React from "react";

export default function useCollection(collection) {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocument(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Could not featch the data");
      }
    );
    return () => unsubscribe();
  }, [collection]);
  return { document, error };
}
