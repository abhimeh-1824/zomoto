import React, { useState } from "react";
import Footer from "../../Components/Comman/Footer/Footer";
import Header from "../../Components/Comman/Header/Header";
import Tabs from "../../Components/Comman/Tabs/Tabs";
import Delivery from "../../Components/Delivery/Delivery";
import DiningOut from "../../Components/DiningOut/DiningOut";
import Nightlife from "../../Components/Nightlife/Nightlife";

const HomePage = () => {
  const [tapPage, setTabPage] = useState("Delivery");
  const getClickTabPage = (tapPage) => {
    switch (tapPage) {
      case "Delivery":
        return <Delivery />
      case "Dining Out":
        return <DiningOut />
      case "Nightlife":
        return <Nightlife />;
      default:
        <div>Delivery</div>;
    }
  };
  return (
    <div>
      <Header />
      <Tabs tapPage={tapPage} setTabPage={setTabPage}/>

      {/* diffrent diffrent tabs pages */}
      {getClickTabPage(tapPage)}
      <Footer />
    </div>
  );
};
export default HomePage;
