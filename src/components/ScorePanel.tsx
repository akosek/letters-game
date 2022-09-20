//styles
import styled from "styled-components";
import theme from "../theme";

// Components
import Button from "./Button";

export type Props = {
  points: number;
  bonus: number;
  newGame: () => void;
};

const ScorePanel = (props: Props) => {
  return (
    <ContainerStyled>
      <Row>
        <p>Bonus: {props.bonus}</p>
        <p>Total: {props.points}</p>
      </Row>
      <Button onPress={props.newGame} text="New Game" />
    </ContainerStyled>
  );
};

// Styled Components
const ContainerStyled = styled.div`
  border-top: 2px dashed ${theme.colors.purple};
  display: flex;
  flex: 1;
  flex-direction: column;
  color: ${theme.colors.purple};
  margin: 15px;
  p {
    font-size: ${theme.fontSizes.header};
    margin: 0;
    padding: 0;
    font-weight: 700;
  }
  @media (max-width: 805px) {
    p {
      font-size: 18px;
    }
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 25px 15px 15px 15px;
`;

export default ScorePanel;
