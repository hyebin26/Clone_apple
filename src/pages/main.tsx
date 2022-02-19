import React from "react";
import Feature from "src/components/Feature/feature";
import Nav from "src/components/Nav/nav";
import ShopOnline from "src/components/ShopOnline/shopOnline";

const Main = () => {
  return (
    <section>
      <Nav />
      <ShopOnline />
      <Feature />
    </section>
  );
};

export default Main;
