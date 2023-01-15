import styled from "styled-components";

export const StyledCards = styled.div`
  width: 85%;
  height: 100%;
  .container-card {
    display: flex;
    flex-wrap: wrap;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding-bottom: 40px;
  }
  .border {
    position: relative;
    width: fit-content;
    height: fit-content;
  }
  .border:before {
    content: "";
    position: absolute;
    width: calc(100% + 0.5rem);
    height: calc(100% + 0.5rem);
    left: -0.3em;
    top: -0.3em;
    border: 1px solid var(--grey-1);
    opacity: 0.4;
    :hover {
      border: 1px solid var(--first-color);
    }
  }
  .card {
    position: relative;
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    z-index: 1;
    overflow: hidden;
    transition: ease-in 0.2s;
    :hover {
      cursor: pointer;
      filter: saturate(150%);
    }
  }
  .img {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .content-card {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: ease-in 0.2s;
    padding: 5px;
    flex: none;
  }
  .content-card div:first-child {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 10px;
  }
  .content-card div:last-child {
    width: 100%;
    height: 150%;
    display: flex;
    position: absolute;
    align-items: flex-end;
    justify-content: space-around;
    opacity: 0;
    transition: ease-in 0.3s;
    transform: translate(0px, 50px);
    :hover {
      opacity: 1;
      transform: translate(0px, -65px);
    }
  }
  .content-card div:last-child .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 30px;
    height: calc(16% + -0.5rem);
    color: var(--grey-0);
  }
  .border-icon {
    position: relative;
    width: fit-content;
    height: fit-content;
  }
  .border-icon:before {
    content: "";
    position: absolute;
    width: calc(100% + -0.5rem);
    height: calc(16% + -0.5rem);
    background-color: var(--sixth-color);
    backdrop-filter: blur( 1.5px );
    -webkit-backdrop-filter: blur( 1.5px );
    border: 1px solid var(--first-color);
    opacity: 0.4;
    z-index:0;
    bottom:1px ;
  }
  .content-card h1 {
    font-family: "Rick", sans-serif;
    font-weight: 600;
    font-size: 25px;
    color: var(--sixth-color);
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: var(--first-color);
    max-width: 15ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .content-card p {
    font-family: "Rick", sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: var(--grey-0);
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: var(--first-color);
    max-width: 18ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tooltip {
    background: var(--grey-0);
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    padding: 0.5rem 0.4rem;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: 600;
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, -90%);
    transition: all 0.2s ease;
    z-index: 1;
    color: var(--grey-1);
  }
  .tooltip-social:after {
    content: " ";
    position: absolute;
    bottom: 1px;
    left: 50%;
    border: solid;
    border-width: 10px 10px 0 10px;
    border-color: transparent;
    transform: translate(-50%, 100%);
  }
  .content-card div:last-child .icon:hover .tooltip {
    opacity: 1;
    transform: translate(-50%, -150%);
  }
  @media (max-width: 600px) {
  .list {
    gap: 40px;
  }
  .card {
    width: 250px;
    height: 300px;
  }
  .content-card div:last-child:hover {
    transform: translate(0px, -80px);
  }
  .content-card div:last-child .icon {
    height: calc(14% + -0.5rem);
  }
  .border-icon:before {
    height: calc(14% + -0.5rem);
  }
  }
`;
