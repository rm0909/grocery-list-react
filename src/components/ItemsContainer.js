import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ItemsContainer(props) {
  const [items, setItems] = useState([]);
  // const userID = localStorage.getItem("userID");
  const { userID } = JSON.parse(localStorage.getItem("getData"));
  useEffect(() => {
    const postRequest = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/author/${userID}`);
        setItems(res.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    postRequest();
  }, [items]);
  const deleteItem = async (id) => {
    try {
      const deleteRequest = await axios.delete(
        `http://localhost:8000/item/${id}`
      );
      console.log(deleteRequest);
    } catch (e) {
      console.log(e.response.data);
    }
  };

  return (
    <>
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item._id}>
            <p>{item.text}</p>
            <p>{item.quantity}</p>
            <button onClick={() => deleteItem(item._id)}>excluir</button>
          </div>
        ))
      ) : (
        <p>
          Você já fez <Link to="/login">login?</Link>. Se sim, apenas ignore.
        </p>
      )}
    </>
  );
}
