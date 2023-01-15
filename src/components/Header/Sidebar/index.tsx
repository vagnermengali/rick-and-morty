import { Container } from "./style";
import logo from "../../../../public/logo-letter.svg";
import { useContext } from "react";
import { Context } from "../../../context/pageContext";

const SideBar = () => {
  const { isSideBarVisible } = useContext(Context);
  
  return (
    <Container isSideBarVisible={isSideBarVisible}>
      <div className="menu">
        <div>
          <button className="menu-item">Homepage</button>
          <button className="menu-item">Collectibles</button>
          <button className="menu-item">Contact</button>
          <button className="menu-item menu-item-disable">Login</button>
          <button className="menu-item">Faq</button>
        </div>
        <div>
          <img src={logo} className="menu-item img" />
        </div>
      </div>
    </Container>
  );
};

export default SideBar;
