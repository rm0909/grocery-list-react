
import React, { useState } from "react";
import Header from "../components/Header.js";
import AddForm from "../components/AddForm.js";
import ItemsContainer from "../components/ItemsContainer.js";

export default function Homepage() {
  
  return (
    <>
      <Header />
      <AddForm />
      <ItemsContainer />
    </>
  );
}
//TODO REFAZER APP NO REACTO DO ZERO, NÃO TENTAR IMPORTAR DO JAVASCRIPT
