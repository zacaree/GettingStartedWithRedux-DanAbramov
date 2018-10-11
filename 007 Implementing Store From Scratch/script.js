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



// The Redux store contains 3 important methods / functions...
// getState()
// dispatch()
// subscribe()

// Instead of importing createStore from Redux: const { createStore } = Redux;
// Let's build our own so we understand how it works.
const createStore = (reducer) => {
  // 1. The store holds the current state so we'll keep it in a variable.
  let state;
  // 3. Because the subscribe function can be called many times, 
  // we need to keep track of all the change listeners.
  let listeners = [];

  // 2. getState will return the current value of the state variable.
  const getState = () => state;

  // 5. Dispatching an action is the only way to change the internal state of the store
  // and in order to calculate the new state, we call the reducer with the current state
  // and the action being dispatched and after the state was updated we need to 
  // notify every change listener by calling it.
  const dispatch = (action) => {
    // Reducer here is the fn at the top of the page.
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    // 4. and any time it is called we want to push the new listener into the array.
    listeners.push(listener);
    // 6. Here we return a function that removes this listener from the listeners array.
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  // 7. Finally, by the time the
  dispatch({});

  // The three important methods are returned at the end.
  return { getState, dispatch, subscribe };
};





// Same counter code as last lesson ↓
const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});
