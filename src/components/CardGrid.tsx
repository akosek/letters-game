// Components
import Card from "./Card";
// styles
import styled from "styled-components";

export type Props = {
  options: ICard[];
  addPoints: (item: ICard | any) => void;
};

const CardGrid = (props: Props) => {
  const handleClick = (option: any) => {
    props.addPoints(option);
  };

  return (
    <CardGridStyled>
      {props.options.map((option) => (
        <Card
          id={option.label}
          label={option.label}
          key={option.label}
          value={option.value}
          onClick={() => handleClick(option)}
        />
      ))}
    </CardGridStyled>
  );
};

// Styled Components
const CardGridStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default CardGrid;
