import styled from "styled-components";
import background_button from "@/assets/image/background/background-button.svg";
import background_button1 from "@/assets/image/background/background-button-1.svg";

export const HeaderContainer = styled.header`
  height: 5vw;
  z-index: 1;
  top: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding:30px 0;
  @media (max-width: 950px) {
    height: 10vw;
    background: var(--grey-0);
    padding:10px 0;
  }
  @media (max-width: 600px) {
    padding:5px 0;
    height: 20vw;
    background: var(--grey-0);
  }
`;
export const DivHeader = styled.div`
  width: 85%;
  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
  }
  .content-menu {
    display: flex;
    align-items: center;
    gap: 4.7vw;
  }
  .content img {
    width: 14vw;
  }
  .content nav {
    display: flex;
    gap: 4.7vw;
  }
  .link {
    font-weight: bold;
    text-decoration: none;
    position: relative;
    display: flex;
    background-color: transparent;
    text-decoration: none;
    color: var(--grey-1);
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    :after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--first-color);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    :hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
      background-color: var(--first-color);
    }
  }
  .login {
    font-weight: bold;
    text-decoration: none;
    position: relative;
    display: flex;
    background-color: transparent;
    text-decoration: none;
    color: var(--grey-1);
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    :hover {
      color: var(--first-color);
    }
    :after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--first-color);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    :hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
      background-color: var(--first-color);
    }
  }
  .login-register {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5vw;
  }
  .primary-button {
    color: var(--grey-1);
    cursor: pointer;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 0.05rem;
    border: 1px solid var(--grey-0);
    padding: 1rem 1rem;
    background-image: url(${background_button});
    background-color: var(--grey-0);
    background-size: 200%;
    background-position: 200%;
    background-repeat: no-repeat;
    transition: 0.3s ease-in-out;
    transition-property: background-position, border, color;
    position: relative;
    z-index: 1;
    text-transform: uppercase;
  }
  .primary-button:hover {
    border: 1px solid var(--first-color);
    color: var(--grey-0);
    background-position: 40%;
  }
  .primary-button:before {
    content: "";
    position: absolute;
    background-color: var(--grey-0);
    width: 0.2rem;
    height: 0.2rem;
    top: -1px;
    left: -1px;
    transition: background-color 0.15s ease-in-out;
  }
  .primary-button:hover:before {
    background-color: var(--grey-1);
  }
  .primary-button:hover:after {
    background-color: var(--grey-1);
  }
  .primary-button:after {
    content: "";
    position: absolute;
    background-color: var(--first-color);
    width: 0.3rem;
    height: 0.3rem;
    bottom: -1px;
    right: -1px;
    transition: background-color 0.15s ease-in-out;
  }
  .button-borders {
    position: relative;
    width: fit-content;
    height: fit-content;
  }
   .button-borders:before {
    content: "";
    position: absolute;
    width: calc(100% + 0.5em);
    height: calc(100% + 0.5em);
    left: -0.3em;
    top: -0.3em;
    border: 1px solid var(--grey-0);
  }
  .shape {
    fill: var(--grey-0);
  }
  .menu-icon {
    display: none;
  }
  @media (max-width: 950px) {
    .content-menu {
      gap: 0vw;
    }
    .menu-icon {
      display: flex;
      z-index: 4;
      cursor: pointer;
      font-size: 35px;
      color: var(--grey-1);
    }
    .link {
      display: none;
    }
    .content img {
      display: none;
    }
    .login {
      font-size: 15px;
      line-height: 25px;
    }
    .login-register {
      gap: 3vw;
    }
    .primary-button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--grey-0);
      cursor: pointer;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 0.05rem;
      border: 1px solid var(--sixth-color);
      padding: 0.8rem 0.1rem;
      background-image: url(${background_button1});
      background-color: var(--first-color);
      background-size: 200%;
      background-position: 200%;
      background-repeat: no-repeat;
      transition: 0.3s ease-in-out;
      transition-property: background-position, border, color;
      position: relative;
      z-index: 1;
      width: 120px;
    }
    .primary-button:hover {
      border: 1px solid var(--sixth-color);
      color: var(--grey-1);
      background-position: 40%;
    }
    .primary-button:before {
      content: "";
      position: absolute;
      background-color: var(--first-color);
      width: 0.2rem;
      height: 0.2rem;
      top: -1px;
      left: -1px;
      transition: background-color 0.15s ease-in-out;
    }
    .primary-button:hover:before {
      background-color: var(--grey-1);
    }
    .primary-button:hover:after {
      background-color: var(--grey-1);
    }
    .primary-button:after {
      content: "";
      position: absolute;
      background-color: var(--sixth-color);
      width: 0.3rem;
      height: 0.3rem;
      bottom: -1px;
      right: -1px;
      transition: background-color 0.15s ease-in-out;
    }
    .button-borders {
      position: relative;
      width: fit-content;
      height: fit-content;
    }
    .button-borders:before {
    content: "";
    position: absolute;
    width: calc(100% + 0.5em);
    height: calc(100% + 0.5em);
    left: -0.3em;
    top: -0.3em;
    border: 1px solid var(--first-color);
  }
    .shape {
      fill: var(--first-color);
    }
    .menu-icon-animation {
      position: relative;
      width: 40px;
      height: 30px;
      background: transparent;
      cursor: pointer;
    }
    .menu-icon-animation input {
      display: none;
    }
    .menu-icon-animation span {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background: var(--grey-1);
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
    }
    .menu-icon-animation span:nth-of-type(1) {
      top: 0px;
      transform-origin: left center;
    }
    .menu-icon-animation span:nth-of-type(2) {
      top: 50%;
      transform: translateY(-50%);
      transform-origin: left center;
    }
    .menu-icon-animation span:nth-of-type(3) {
      top: 100%;
      transform-origin: left center;
      transform: translateY(-100%);
    }
    .menu-icon-animation input:checked ~ span:nth-of-type(1) {
      transform: rotate(45deg);
      top: 0px;
      left: 5px;
    }
    .menu-icon-animation input:checked ~ span:nth-of-type(2) {
      width: 0%;
      opacity: 0;
    }
    .menu-icon-animation input:checked ~ span:nth-of-type(3) {
      transform: rotate(-45deg);
      top: 28px;
      left: 5px;
    }
  }
  @media (max-width: 600px) {
    .content-menu {
      gap: 0vw;
    }
    .menu-icon {
      display: flex;
      z-index: 4;
      cursor: pointer;
      font-size: 35px;
      color: var(--grey-1);
    }
    .link {
      display: none;
    }
    .content img {
      display: none;
    }
    .login {
      display: none;
    }
    .login-register {
      gap: 0vw;
    }
    .primary-button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--grey-0);
      cursor: pointer;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 0.05rem;
      border: 1px solid var(--sixth-color);
      padding: 0.6rem 0.1rem;
      background-image: url(${background_button1});
      background-color: var(--first-color);
      background-size: 200%;
      background-position: 200%;
      background-repeat: no-repeat;
      transition: 0.3s ease-in-out;
      transition-property: background-position, border, color;
      position: relative;
      z-index: 1;
      width: 100px;
    }
    .primary-button:hover {
      border: 1px solid var(--sixth-color);
      color: var(--grey-1);
      background-position: 40%;
    }
    .primary-button:before {
      content: "";
      position: absolute;
      background-color: var(--first-color);
      width: 0.2rem;
      height: 0.2rem;
      top: -1px;
      left: -1px;
      transition: background-color 0.15s ease-in-out;
    }
    .primary-button:hover:before {
      background-color: var(--grey-1);
    }
    .primary-button:hover:after {
      background-color: var(--grey-1);
    }
    .primary-button:after {
      content: "";
      position: absolute;
      background-color: var(--sixth-color);
      width: 0.3rem;
      height: 0.3rem;
      bottom: -1px;
      right: -1px;
      transition: background-color 0.15s ease-in-out;
    }
    .button-borders {
      position: relative;
      width: fit-content;
      height: fit-content;
    }
    .button-borders:before {
      content: "";
      position: absolute;
      width: calc(100% + 0.5em);
      height: 50%;
      left: -0.3em;
      top: -0.3em;
      border: 1px solid var(--first-color);
      border-bottom: 0px;
    }
    .button-borders:after {
      content: "";
      position: absolute;
      width: calc(100% + 0.5em);
      height: 50%;
      left: -0.3em;
      bottom: -0.3em;
      border: 1px solid var(--first-color);
      border-top: 0px;
      z-index: 0;
    }
    .shape {
      fill: var(--first-color);
    }
    .menu-icon-animation {
      position: relative;
      width: 40px;
      height: 30px;
      background: transparent;
      cursor: pointer;
    }
    .menu-icon-animation input {
      display: none;
    }
    .menu-icon-animation span {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background: var(--grey-1);
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
    }
    .menu-icon-animation span:nth-of-type(1) {
      top: 0px;
      transform-origin: left center;
    }
    .menu-icon-animation span:nth-of-type(2) {
      top: 50%;
      transform: translateY(-50%);
      transform-origin: left center;
    }
    .menu-icon-animation span:nth-of-type(3) {
      top: 100%;
      transform-origin: left center;
      transform: translateY(-100%);
    }
    .menu-icon-animation input:checked ~ span:nth-of-type(1) {
      transform: rotate(45deg);
      top: 0px;
      left: 5px;
    }
    .menu-icon-animation input:checked ~ span:nth-of-type(2) {
      width: 0%;
      opacity: 0;
    }
    .menu-icon-animation input:checked ~ span:nth-of-type(3) {
      transform: rotate(-45deg);
      top: 28px;
      left: 5px;
    }
  }
`;
