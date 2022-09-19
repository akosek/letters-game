// styles
import styled from "styled-components";
import themes from "../theme";

export type Props = {
  id: string;
  label: string;
  value: number;
  onClick: () => void;
};

const Card = (props: Props) => {
  return (
    <ClickableCard onClick={props.onClick}>
      <h1>{props.label}</h1>
    </ClickableCard>
  );
};

// Styled Components
const ClickableCard = styled.a`
  display: inline-block;
  text-align: center;
  border-radius: 6px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: ${themes.colors.lightPink};
  color: white;
  border: 2px solid white;
  transition: all 0.5s ease;
  &:hover {
    background: ${themes.colors.pink};
    cursor: pointer;
    box-shadow: rgba(255, 255, 255) 0px 2px 8px 0px;
  }
  h1 {
    font-weight: bold;
    color: white;
  }
  // Target Tablet View
  @media (max-width: 768px) {
    width: 9rem;
  }
  // Terget phone view
  @media (max-width: 480px) {
    width: 6rem;
    font-size: 16px;
  }
`;

export default Card;
