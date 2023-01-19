import { Container } from "./style";
import logo from "../../../../public/logo-letter.svg";
import { useContext } from "react";
import { Context } from "../../../context/pageContext";
import Image from "next/image";

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
        <Image src={logo} width="100" height="100" alt="logo-letter" className="menu-item img"></Image>
        </div>
      </div>
    </Container>
  );
};

export default SideBar;
