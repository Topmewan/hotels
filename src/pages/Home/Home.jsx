import React from 'react';
import Navbar from "../../components/Navbar";
import {HeaderProvider} from "../../providers/HeaderProvider";
import {Header} from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeaderProvider>
        <Header/>
      </HeaderProvider>
    </div>
  );
};

export default Home;