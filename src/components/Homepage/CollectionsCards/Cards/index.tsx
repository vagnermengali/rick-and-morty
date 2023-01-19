import { useContext } from "react";
import { StyledCards } from "./style";
import { Context } from "@/context/pageContext";
import { TbGenderGenderless } from "react-icons/tb";
import {
  GiAlienBug,
  GiPieceSkull,
  GiFemale,
  GiMale,
  GiHearts,
  GiCowled,
  GiRobotHelmet,
  GiHalfDead,
  GiFlatPawPrint,
  GiMinotaur,
  GiVirus,
  GiGooeyEyedSun,
  GiBrainTentacle,
  GiPadlock,
} from "react-icons/gi";

const Cards = () => {
  const { characterList } = useContext(Context);

  return (
    <StyledCards>
      <div className="container-card">
        <ul className="list">
          {characterList.map((elem, index) => (
            <div className="border">
              <div key={elem.id} className="card">
                <img src={elem.image} alt={elem.name} className="img" />
                <div className="content-card">
                  <div>
                    <h1>{elem.name}</h1>
                    <p>{elem.origin.name}</p>
                  </div>
                  <div className="border-icon">
                    <a className="icon">
                      {elem.status === "Alive" ? (
                        <GiHearts className="icon-inner" />
                      ) : elem.status === "Dead" ? (
                        <GiPieceSkull className="icon-inner" />
                      ) : (
                        <GiPadlock className="icon-inner" />
                      )}
                      <span className="tooltip">{elem.status}</span>
                    </a>
                    <a className="icon">
                      {elem.species === "Human" ? (
                        <GiCowled className="icon-inner" />
                      ) : elem.species === "Alien" ? (
                        <GiAlienBug className="icon-inner" />
                      ) : elem.species === "Robot" ? (
                        <GiRobotHelmet className="icon-inner" />
                      ) : elem.species === "Humanoid" ? (
                        <GiHalfDead className="icon-inner" />
                      ) : elem.species === "Animal" ? (
                        <GiFlatPawPrint className="icon-inner" />
                      ) : elem.species === "Mythological Creature" ? (
                        <GiMinotaur className="icon-inner" />
                      ) : elem.species === "Poopybutthole" ? (
                        <GiVirus className="icon-inner" />
                      ) : elem.species === "Disease" ? (
                        <GiGooeyEyedSun className="icon-inner" />
                      ) : elem.species === "Cronenberg" ? (
                        <GiBrainTentacle className="icon-inner" />
                      ) : elem.species === "unknown" ? (
                        <GiPadlock className="icon-inner" />
                      ) : (
                        <GiPadlock className="icon-inner" />
                      )}
                      <span className="tooltip">{elem.species}</span>
                    </a>
                    <a className="icon">
                      {elem.gender === "Female" ? (
                        <GiFemale className="icon-inner" />
                      ) : elem.gender === "Male" ? (
                        <GiMale className="icon-inner" />
                      ) : elem.gender === "Genderless" ? (
                        <TbGenderGenderless className="icon-inner" />
                      ) : elem.gender === "unknown" ? (
                        <GiPadlock className="icon-inner" />
                      ) : (
                        <GiPadlock className="icon-inner" />
                      )}
                      <span className="tooltip">{elem.gender}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </StyledCards>
  );
};

export default Cards;
