//styles
import styled from "styled-components";
import theme from "../theme";

export type Props = {
  onPress: () => void;
  text: string;
};

const Button = (props: Props) => {
  return <ButtonStyled onClick={props.onPress}>{props.text}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  display: inline-block;
  align-self: center;
  color: ${theme.colors.pink};
  font-size: ${theme.fontSizes.bigButton};
  padding: 0.25em 1em;
  background: ${theme.colors.white};
  border: 2px solid ${theme.colors.lightPink};
  border-radius: 8px;
  display: block;
  position: absolute;
  bottom: 3rem;
  transition: all 0.5s ease;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    background: ${theme.colors.pink};
    color: white;
  }
  @media (max-width: 805px) {
    font-size: 22px;
  }
`;

export default Button;
