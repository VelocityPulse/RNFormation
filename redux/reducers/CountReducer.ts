// redux/reducers/countReducer.ts

interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

interface CountAction {
  type: string;
}

const countReducer = (state: State = initialState, action: CountAction): State => {
  switch (action.type) {
    case 'COUNT_INCREASE':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'COUNT_DECREASE':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default countReducer;