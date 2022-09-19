interface ICard {
  id: string;
  label: string;
  value: number;
}

type CardState = {
  letters: string[];
  savedLetters: string[];
  points: number;
  bonus: number;
};

type CardAction = {
  type: string;
  card: ICard;
  payload?: any;
};

type DispatchType = (args: CardAction) => CardAction;
