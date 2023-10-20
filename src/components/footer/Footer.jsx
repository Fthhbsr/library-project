import React from "react";
import { FooterBtn, FooterContainer } from "./Footer.style";
// import dark  from "../../assets/moon.png";
import { darkIcon, lightIcon } from "../../helper/iconData";
import { useThemeContext } from "../../context/ThemeContext";

const Footer = () => {
  const { myTheme, setMyTheme } = useThemeContext();

  const handleClick = () => {
    setMyTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <FooterContainer>
      <FooterBtn onClick={handleClick}>
        {/* <img src={dark} alt="dark mode" /> */}
        {myTheme === "light" ? darkIcon : lightIcon}
      </FooterBtn>
    </FooterContainer>
  );
};

export default Footer;
