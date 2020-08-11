import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import firebase from "../firebase";

const Shortener = () => {
  const { id } = useParams();

  const [destination, setDestination] = useState();
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();

      const document = await db.collection("urls").doc(id).get();

      setFetched(true);
      setDestination(document.data()?.url);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (destination) window.location.replace(destination);
  }, [destination]);

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
      }}
    >
      {fetched && !destination ? (
        <p>Couldn't find {id}.</p>
      ) : (
        <p>Looking up {id}!</p>
      )}
    </div>
  );
};

export default Shortener;
