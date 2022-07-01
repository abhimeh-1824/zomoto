import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Tabs from "../../Components/Tabs/Tabs";

const HomePage = () => {
  const [tapPage, setTabPage] = useState("Dinig Out");
  const getClickTabPage = (tapPage) => {
    switch (tapPage) {
      case "Delivery":
        return <div>Delivery</div>;
      case "Dinig Out":
        return <div>Dinig Out</div>;
      case "Nighlife":
        return <div>Delivery</div>;
      default:
        <div>Delivery</div>;
    }
  };
  return (
    <div>
      <Header />
      <Tabs />

      {/* diffrent diffrent tabs pages */}
      {getClickTabPage(tapPage)}
      <Footer />
    </div>
  );
};
export default HomePage;
