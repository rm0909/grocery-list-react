import React, { useContext } from "react";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import { Context } from "../components/authContext/authContext";
const Homepage = () => {
  const {authenticated} = useContext(Context)
 return( authenticated && <>
    <Header />
    <MainContainer />
  </>);
};

export { Homepage };
