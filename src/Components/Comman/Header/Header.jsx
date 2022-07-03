import React from "react";
import "./header.css";
import { GoLocation ,GoSearch} from "react-icons/go";
import { AiFillCaretDown } from "react-icons/ai";
import {BiChevronDown} from "react-icons/bi"

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
              <div className="location-name">Indore</div>
            </div>
            <AiFillCaretDown className="absolute-center" />
          </div>
          <div className="serch-bar-sperater"></div>
          <div className="search-bar-wraper">
              <GoSearch className="absolute-center search-icon"/>
              <input type="text" placeholder="Search for Restraurant,couhisin or a dish" className="input-txt-box" />
          </div>
        </div>
        <div className="profile-wraper">
        <img src="https://b.zmtcdn.com/data/user_profile_pictures/4d9/1a5ff8500c29cea411904e4d1ca324d9.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" className="profile-image" />
          <span className="profile-holder-name">Abhishek Mehra</span>
          <BiChevronDown className="absolute-center down-errow"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
