import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const { setImageSearch } = useContext(Context);

  useEffect(() => {
    return () => setImageSearch(false);
  }, []);

  const clickHandler = (keyssItem) => {
    let isTypeImage = keyssItem.name === "Images";
    setImageSearch(isTypeImage ? true : false);
    setSelectedMenu(keyssItem.name);
};

  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center grow">
          <Link to="/">
            <img src={Logo} className="hidden md:block w-[92px] mr-10" alt="" />
          </Link>
          <SearchInput from="searchResult" />
        </div>
        <div className="hidden md:block">
          <ProfileIcon />
        </div>
      </div>
      <div className="flex ml-[-12px] mt-3">
        {menu.map((key, index) => {
          return (
            <>
              <span
                key={index}
                className={`flex items-center p-3 text-[#5f6368] cursor-pointer relative ${
                  selectedMenu === key.name ? "text-[#1a73e8]" : "f"
                }`}
                onClick={() => {
                  clickHandler(key);
                }}
              >
                <span className="hidden md:block  mr-2">{key.icon}</span>
                <span className="text-sm">{key.name}</span>
                {selectedMenu === key.name && (
                  <span className="absolute h-[3px] w-[calc(100%-20px)] bg-blue-600 bottom-0 left-[10px]" />
                )}
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultHeader;
