import { HeaderContainer, DivHeader } from "./style";
import logo from "../../../public/logo-letter.svg";
import { useContext } from "react";
import SideBar from "./Sidebar";
import { Context } from "../../context/pageContext";

const Header = () => {
    const { showSideBar, isSideBarVisible } = useContext(Context);

  return (
    <HeaderContainer>
      <DivHeader>
        <div className="content">
          <div className="content-menu">
            <div className="menu-icon">
              <label className="menu-icon-animation">
                <input type="checkbox" />
                <span onClick={showSideBar}></span>
                <span onClick={showSideBar}></span>
                <span onClick={showSideBar}></span>
              </label>
            </div>
            <a>
              <img src={logo} alt="logo-letter"/>
            </a>{" "}
            <nav>
              <a className="link">
                Homepage
              </a>
              <a className="link">
                Collectibles
              </a>
              <a className="link">
                Faq
              </a>
              <a className="link">
                Contact
              </a>
            </nav>
          </div>
          <div className="login-register">
            <button className="login">Login</button>
            <div className="button-borders">
              <button className="primary-button">Get Started</button>
            </div>
          </div>
          {isSideBarVisible && <SideBar/>}
        </div>
      </DivHeader>
    </HeaderContainer>
  );
};

export default Header;
