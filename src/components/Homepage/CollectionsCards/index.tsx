import { StyledCollectionsCardsSection } from "./style";
import Cards from "./Cards";
import ButtonNextPrev from "./ButtonNextPrev";

const CollectionsCardsSection = () => {
  return (
    <StyledCollectionsCardsSection>
      <Cards />
      <ButtonNextPrev />
    </StyledCollectionsCardsSection>
  );
}

export default CollectionsCardsSection;
