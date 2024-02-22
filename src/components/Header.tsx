import HamburgerIcon from "../assets/hamburger.png";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <div className="bg-white rounded-full p-4 w-11 h-11 flex items-center justify-center">
        <img src={HamburgerIcon} alt="hamburger_icon" />
      </div>

      <div>
        <img src={Logo} className="w-14 h-14 rounded-full " />
      </div>
    </div>
  );
};

export default Header;
