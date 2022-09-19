import * as actionTypes from "./actionTypes";

const initialState: CardState = {
  letters: [],
  savedLetters: [],
  points: 0,
  bonus: 0,
};

const reducer = (
  state: CardState = initialState,
  action: CardAction
): CardState => {
  switch (action.type) {
    case actionTypes.ADD_POINT:
      return {
        ...state,
        points: state.points + Number(action.payload),
      };
    case actionTypes.ADD_LETTER:
      return {
        ...state,
        letters: state.letters.concat(action.payload),
        savedLetters: state.savedLetters.concat(action.payload),
      };
    case actionTypes.ADD_BONUS:
      let lettersState = [...state.letters];
      let currentPoints = state.points;
      let currentBonus = state.bonus;
      let countA = 0;
      let countB = 0;

      // Count how many B is collected
      lettersState.forEach((element) => {
        if (element === "B") {
          countB += 1;
        }
      });

      // Count how many A is collected
      lettersState.forEach((element) => {
        if (element === "A") {
          countA += 1;
        }
      });
      // Add bonus 50 points for 3 A' and +30 points for 2 B'
      if (countA === 3) {
        currentPoints = currentPoints + 50;
        currentBonus = currentBonus + 50;
        lettersState = lettersState.filter((letter) => letter !== "A");
      } else if (countB === 2) {
        currentPoints = currentPoints + 30;
        currentBonus = currentBonus + 30;
        lettersState = lettersState.filter((letter) => letter !== "B");
      }

      return {
        ...state,
        points: currentPoints,
        letters: lettersState,
        bonus: currentBonus,
      };
    case actionTypes.RESET:
      return {
        ...state,
        letters: [],
        points: 0,
        savedLetters: [],
        bonus: 0,
      };
  }
  return state;
};

export default reducer;
