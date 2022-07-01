import React from "react";
import "./header.css";
import { GoLocation ,GoSearch} from "react-icons/go";
import { AiFillCaretDown } from "react-icons/ai";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-bar">
          <div className="loaction-wraper">
            <div className="location-icon-name">
              <GoLocation className="absolute-center location-icon" />
              <div className="location-name">Bangalore</div>
            </div>
            <AiFillCaretDown className="absolute-center" />
          </div>
          <div className="serch-bar-sperater"></div>
          <div className="search-bar-wraper">
              <GoSearch className="absolute-center"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
