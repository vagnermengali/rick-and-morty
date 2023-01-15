import { StyledInitialSection } from "./style";

const InitialSection = () => {
  return (
    <StyledInitialSection>
      <div className="container-background">
        <div className="container">
          <div className="container-left">
            <h1>Your collectibles website.</h1>
            <p>
              Find the most beautiful Rick and Morty collectibles in one place!
            </p>
            <div className="button-borders">
              <button className="primary-button">VIEW MORE</button>
            </div>
          </div>
          <div className="container-right"></div>
        </div>
      </div>
    </StyledInitialSection>
  );
};

export default InitialSection;
