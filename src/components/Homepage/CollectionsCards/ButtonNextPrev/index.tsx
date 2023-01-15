import { useContext } from "react";
import { StyledButtonNextPrev } from "./style";
import { Context } from "../../../../context/pageContext";

const ButtonNextPrev = () => {
  const { currentPage, previousPage, nextPage } = useContext(Context);

  return (
    <StyledButtonNextPrev>
      {currentPage == 1 ? (
        <div className="button-borders-disable">
          <button className="primary-button-disable" disabled>
            PREVIOUS
          </button>
        </div>
      ) : (
        <div className="button-borders">
          <button className="primary-button" onClick={previousPage}>
            PREVIOUS
          </button>
        </div>
      )}
      {currentPage == 42 ? (
        <div className="button-borders-disable">
          <button className="primary-button-disable" disabled>
            NEXT
          </button>
        </div>
      ) : (
        <div className="button-borders">
          <button className="primary-button" onClick={nextPage}>
            NEXT
          </button>
        </div>
      )}
    </StyledButtonNextPrev>
  );
};

export default ButtonNextPrev;
