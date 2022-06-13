import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function ItemsContainer(props) {
    const [items, setItems] = useState([]);
    const userID = localStorage.getItem("userID");
  
    useEffect(() => {
      const postRequest = async () => {
        try {
          const res = await axios.get(`http://localhost:8000/author/${userID}`);
          setItems(res.data.posts);
        } catch (error) {
          console.log(error);
        }
      };
      postRequest()
    }, [items]);
  return (
    <>
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item._id}>
            <p>{item.text}</p>
            <p>{item.quantity}</p>
          </div>
        ))
      ) : (
        <p>Você já fez <Link to="/login">login?</Link>. Se sim, apenas ignore.</p>
      )}
    </>
  );
}
