// Redux
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { reset } from "../store/actionCreators";
import { Dispatch } from "redux";

// Components
import CardInfo from "../components/CardInfo";
import ScorePanel from "../components/ScorePanel";
import Header from "../components/Header";

// styles
import styled from "styled-components";

const Dashboard = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const points = useSelector((state: CardState) => state.points, shallowEqual);

  const savedLetters: readonly string[] = useSelector(
    (state: CardState) => state.savedLetters,
    shallowEqual
  );

  const bonus: number = useSelector(
    (state: CardState) => state.bonus,
    shallowEqual
  );

  const handleClean = () => {
    dispatch(reset());
  };

  // Check how many times specific letter was clicked
  const countAmount = (value: string) => {
    let count = 0;

    savedLetters.forEach((element) => {
      if (element === value) {
        count += 1;
      }
    });
    return count;
  };

  const countSpecialPoints = (value: string, bonus: number, normal: number) => {
    // Count all A' or B' and check which bonus to give
    let amount = countAmount(value);
    let num = value === "A" ? 3 : 2;
    // Check how many bonuses  & how many normal points
    let bonusCount = Math.floor(amount / num);
    let normalPoints = amount - bonusCount;

    const allPoints = bonusCount * bonus + normalPoints * normal;
    return allPoints;
  };

  // Count points for letter without bonus
  const countPoints = (value: string, points: number) => {
    let amount = countAmount(value);
    return amount * points;
  };

  return (
    <DashboardStyled>
      <Header title="Player Items" />
      <InfoRow>
        <h4>Items</h4>
        <h4>Amount</h4>
        <h4>Score</h4>
      </InfoRow>
      <ListStyled>
        {savedLetters.includes("A") && (
          <CardInfo
            label={"A"}
            amount={countAmount("A")}
            score={countSpecialPoints("A", 100, 50)}
          />
        )}
        {savedLetters.includes("B") && (
          <CardInfo
            label={"B"}
            amount={countAmount("B")}
            score={countSpecialPoints("B", 60, 30)}
          />
        )}

        {savedLetters.includes("C") && (
          <CardInfo
            label={"C"}
            amount={countAmount("C")}
            score={countPoints("C", 20)}
          />
        )}
        {savedLetters.includes("D") && (
          <CardInfo
            label={"D"}
            amount={countAmount("D")}
            score={countPoints("D", 15)}
          />
        )}
      </ListStyled>

      <ScorePanel points={points} bonus={bonus} newGame={() => handleClean()} />
    </DashboardStyled>
  );
};

// Styled components
const DashboardStyled = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: white;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  color: #401581;
  //Target Tablets & Ipads
  @media (min-width: 481px) and (max-width: 767px) {
    h4 {
      font-size: 18px;
    }
  }
  //Target Mobile
  @media (max-width: 480px) {
    h4 {
      font-size: 14px;
    }
  }
`;

const ListStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  justify-content: flex-start;
  min-height: 22rem;
`;

export default Dashboard;
