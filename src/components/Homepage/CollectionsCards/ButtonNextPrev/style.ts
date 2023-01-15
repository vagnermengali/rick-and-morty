import styled from "styled-components";
import background_button from "../../../../../public/background-button-1.svg";

export const StyledButtonNextPrev = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  .primary-button {
    display:flex;
    align-items:center;
    justify-content:center;
    color: var(--grey-0);
    cursor: pointer;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 0.05rem;
    border: 1px solid var(--sixth-color);
    padding: 1rem 3rem;
    background-image: url(${background_button});
    background-color: var(--first-color);
    background-size: 200%;
    background-position: 200%;
    background-repeat: no-repeat;
    transition: 0.3s ease-in-out;
    transition-property: background-position, border, color;
    position: relative;
    z-index: 1;
    width: 200px;
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

  .primary-button-disable {
    display:flex;
    align-items:center;
    justify-content:center;
    color: var(--grey-0);
    cursor: not-allowed;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 0.05rem;
    border: 1px solid var(--grey-1);
    padding: 1rem 3rem;
    background-color: var(--grey-1);
    background-size: 200%;
    background-position: 200%;
    background-repeat: no-repeat;
    transition: 0.3s ease-in-out;
    transition-property: background-position, border, color;
    position: relative;
    z-index: 1;
    width: 200px;
    opacity: 0.4;
  }
  .primary-button-disable:hover {
    border: 1px solid var(--grey-1);
    color: var(--grey-0);
    background-position: 40%;
    opacity: 0.4;
  }
  .primary-button-disable:before {
    content: "";
    position: absolute;
    background-color: var(--grey-1);
    width: 0.2rem;
    height: 0.2rem;
    top: -1px;
    left: -1px;
    transition: background-color 0.15s ease-in-out;
    opacity: 0.4;
  }
  .primary-button-disable:hover:before {
    background-color: var(--grey-1);
    opacity: 0.4;
  }
  .primary-button-disable:hover:after {
    background-color: var(--grey-1);
    opacity: 0.4;
  }
  .primary-button-disable:after {
    content: "";
    position: absolute;
    background-color: var(--grey-1);
    width: 0.3rem;
    height: 0.3rem;
    bottom: -1px;
    right: -1px;
    transition: background-color 0.15s ease-in-out;
    opacity: 0.4;
  }
  .button-borders-disable {
    position: relative;
    width: fit-content;
    height: fit-content;
    opacity: 0.4;
  }
  .button-borders-disable:before {
    content: "";
    position: absolute;
    width: calc(100% + 0.5em);
    height: calc(100% + 0.5em);
    left: -0.3em;
    top: -0.3em;
    border: 1px solid var(--grey-1);
  }
  .shape {
    fill: var(--grey-1);
    opacity: 0.4;
  }
  @media (max-width: 600px) {
    .primary-button {
      width: 120px;
    }

    .primary-button-disable {
      width: 120px;
    }
  }
`;
