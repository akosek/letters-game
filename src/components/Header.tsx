// styles
import styled from "styled-components";
import theme from "../theme";

export type Props = {
  title: string;
};

const Header = (props: Props) => {
  return (
    <HeaderStyled>
      <h2>{props.title}</h2>
    </HeaderStyled>
  );
};

// Styled Components
const HeaderStyled = styled.div`
  background: #45178e;
  width: 100%;
  h2 {
    align-self: flex-start;
    padding: 15px;
  }
  // Terget phone view
  @media (max-width: 482px) {
    h2 {
      padding: 4px;
      font-size: ${theme.fontSizes.normal};
      text-align: center;
    }
  }
`;

export default Header;
