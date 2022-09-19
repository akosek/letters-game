// Components
import CardGrid from "../components/CardGrid";
import Header from "../components/Header";
// Redux
import { useDispatch } from "react-redux";
import { addPoint, addLetter, addBonus } from "../store/actionCreators";
import { Dispatch } from "redux";
// styles
import styled from "styled-components";

const options = [
  { label: "A", value: 50, id: "A" },
  { label: "B", value: 30, id: "B" },
  { label: "C", value: 20, id: "C" },
  { label: "D", value: 15, id: "D" },
];

const Playgroud = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const handleAddPoints = (item: ICard) => {
    dispatch(addPoint(item.value));
    dispatch(addLetter(item.label));
    dispatch(addBonus());
  };

  return (
    <PlaygroundStyled>
      <Header title="Kahoot! Points" />
      <div>
        <h3>Pick Item:</h3>
        <CardGrid options={options} addPoints={handleAddPoints} />
      </div>
    </PlaygroundStyled>
  );
};

// Styled Components
const PlaygroundStyled = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #401581;
  h3 {
    align-self: flex-start;
    margin: 30px;
    width: 100%;
  }
`;

export default Playgroud;
