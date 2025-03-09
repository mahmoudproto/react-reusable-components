import { useReducer } from "react";
import Button from "../Components/Button";
import Panel from "../Components/Panel";
import { produce } from "immer";

const actionType = {
  incrementCount: 0,
  decrementCount: 1,
  changeValue: 2,
  bulkIncrement: 3,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.incrementCount:
      state.count = state.count + 1;
      return;
    case actionType.decrementCount:
      state.count = state.count - 1;
      return;
    case actionType.changeValue:
      state.bulkValue = action.payload;
      return;
    case actionType.bulkIncrement:
      state.count = state.count + state.bulkValue;
      state.bulkValue = 0;
      return;
    default:
      return;
  }
};

function CounterPage({ intialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: intialCount || 0,
    bulkValue: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: actionType.bulkIncrement,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: actionType.changeValue,
      payload: value,
    });
  };

  const increment = () => {
    dispatch({
      type: actionType.incrementCount,
    });
  };
  const decrement = () => {
    dispatch({
      type: actionType.decrementCount,
    });
  };

  return (
    <Panel className="m-3 space-y-8">
      <h1 className="text-lg">count is {state.count}</h1>

      <div className="flex flex-row space-x-8">
        <Button primary onClick={increment}>
          Increase Count
        </Button>
        <Button primary onClick={decrement}>
          Decrease Count
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.bulkValue || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button secondary>Add it</Button>
      </form>
    </Panel>
  );
}
export default CounterPage;
