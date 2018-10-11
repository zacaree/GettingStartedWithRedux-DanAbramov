
// Counter is the reducer that manages the state updates.
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};


// The store has 3 important methods
const { createStore } = Redux;
const store = createStore(counter);


// getState()
// The first method of the store is called getState 
// and it retrieves the current state of the Redux store.
console.log(store.getState())


// dispatch()
// The second and most commonly used store method is called dispatch 
// and it lets you dispatch actions to change the state of your application.
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());


// subscribe()
// The third Redux store method is called subscribe.
// It lets you register a callback that the Redux store will call any time an action 
// has been dispatched so that you can update the UI of 
// your application to reflect the current application state.
// See all three methods working together ↓
const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});