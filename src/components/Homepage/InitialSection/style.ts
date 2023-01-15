import styled from "styled-components";
import background_home from "@/assets/image/background/background.svg";
import background_button from "@/assets/image/background/background-button.svg";

  
export const StyledInitialSection = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${background_home});
  background-repeat: no-repeat;
  background-size: cover;
  .container-background {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    background: linear-gradient(
      127deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .container {
    display: flex;
    justify-content: center;
    width: 85%;
  }
  .container-left {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    gap: 30px;
  }
  .container-left h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 65px;
    color: var(--grey-1);
    width: 400px;
  }
  .container-left p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--grey-1);
    opacity: 0.7;
  }
  .primary-button {
    color: var(--grey-1);
    cursor: pointer;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 0.05rem;
    border: 1px solid var(--grey-0);
    padding: 1rem 3rem;
    background-image: url(${background_button});
    background-color: var(--grey-0);
    background-size: 200%;
    background-position: 200%;
    background-repeat: no-repeat;
    transition: 0.3s ease-in-out;
    transition-property: background-position, border, color;
    position: relative;
    z-index: 0;
  
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
  .container-right {
    width: 50%;
    height: 100%;
  }
  @media (max-width: 950px) {
    background-position: right;
    .container-left {
      width: 100%;
      gap: 50px;
    }
    .container-left h1 {
      font-size: 50px;
      line-height: 55px;
      width: 100%;
    }
    .container-left p {
      font-size: 18px;
      line-height: 28px;
    }
    .container-right {
      display:none;
    }
  }
  @media (max-width: 600px) {
    background-position: right;
    .container-left {
      width: 100%;
      gap: 50px;
    }
    .container-left h1 {
      font-size: 50px;
      line-height: 55px;
      width: 100%;
    }
    .container-left p {
      font-size: 18px;
      line-height: 28px;
    }
    .container-right {
      display:none;
    }
  }
`;
