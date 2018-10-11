// Counter is the reducer that manages the state updates.
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// Here's' the Counter component.
const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);


const { createStore } = Redux;
const store = createStore(counter);

// render is called any time the store state changes 
// so I can safely pass the current state of the store as a prop to my root component:
// value={store.getState()}
const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: INCREMENT })}
      onDecrement={() => store.dispatch({ type: DECREMENT })}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

// document.addEventListener("click", () => {
//   store.dispatch({ type: "INCREMENT" });
// });
