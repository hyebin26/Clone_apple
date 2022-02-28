import React from "react";
import Nav from "src/components/Nav/nav";
import ShopOnline from "src/components/ShopOnline/shopOnline";
import Footer from "src/components/Footer/footer";
import HomeMain from "src/components/HomeMain/homeMain";

export default function Home() {
  return (
    <>
      <Nav />
      <ShopOnline />
      <HomeMain />
      <Footer />
    </>
  );
}
