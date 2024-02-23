import { useState } from "react";
import HamburgerIcon from "../assets/hamburger.png";
import Logo from "../assets/logo.png";
import CloseIcon from "../assets/closeIcon.png";
import { DropdownContentProps, HeaderContentProps } from "../types/header";

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <header>
      {isDropdownVisible ? (
        <DropdownContent closeDropdown={closeDropdown} />
      ) : (
        <HeaderContent toggleDropdown={toggleDropdown} />
      )}
    </header>
  );
};

const HeaderContent = ({ toggleDropdown }: HeaderContentProps) => (
  <div className="flex justify-between items-center p-5">
    <div
      className="bg-white rounded-full p-4 w-11 h-11 flex items-center justify-center"
      onClick={toggleDropdown}
    >
      <img src={HamburgerIcon} alt="hamburger_icon" />
    </div>
    <div>
      <img src={Logo} className="w-14 h-14 rounded-full " alt="logo" />
    </div>
  </div>
);

const DropdownContent = ({ closeDropdown }: DropdownContentProps) => (
  <div className="w-full h-auto rounded-lg p-10 bg-white flex flex-col gap-20">
    <div className="flex justify-between items-center">
      <img
        src={CloseIcon}
        alt="close_icon"
        className="w-7 h-7"
        onClick={closeDropdown}
      />
      <h1 className="text-3xl font-extrabold">CodeNovex</h1>
    </div>
    <div className="flex flex-col gap-10 text-2xl font-bold items-center">
      <p>HOME</p>
      <p>ABOUT</p>
      <p>TEAM</p>
      <p>SERVICES</p>
      <p>CONTACT</p>
    </div>
  </div>
);

export default Header;
