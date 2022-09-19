// styles
import styled from "styled-components";
import themes from "../theme";

export type Props = {
  label: string;
  amount?: number;
  score?: number;
};

const CardInfo = (props: Props) => {
  return (
    <CardRow>
      <h2>{props.label}</h2>
      <div>{props.amount}</div>
      <div>{props.score}</div>
    </CardRow>
  );
};

// Styled Components
const CardRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;
  padding: 0.5rem 0;
  height: 50px;
  margin: 0.5rem 1rem;
  background: ${themes.colors.lightPink};
  color: white;
  border: 2px solid white;
  h2,
  div {
    text-align: center;
    align-self: center;
    flex: 1;
  }
`;

export default CardInfo;
