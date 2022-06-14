import React, { useCallback, useState, useReducer } from "react";

const userSettingsInitialState = {
  isUserLoggedIn: false,
  theme: "dark",
  userTimeFormat: "mm/dd/yyyy",
};

function reducer(state, action) {
  switch (action.type) {
    case "theme-change":
      return {
        ...state, // facem spread la obiect pentru ca vrem sa fie nou
        theme: action.payload,
      };
    case "date-format-change":
      return {
        ...state, // facem spread la obiect pentru ca vrem sa fie nou
        userTimeFormat: action.payload,
      };
    case "login-status-change":
      return {
        ...state, // facem spread la obiect pentru ca vrem sa fie nou
        isUserLoggedIn: action.payload,
      };
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, userSettingsInitialState);

  return (
    <div style={{ display: "flex", flexDirection: 'column' }}>
      <div>
        <div>
          User current theme: {state.theme}
          <button
            onClick={() =>
              dispatch({
                type: "theme-change",
                payload: state.theme === "dark" ? "light" : "dark",
              })
            }
          >
            Change theme
          </button>
        </div>
      </div>

      <div>
        <div>User current login status: {state.isUserLoggedIn.toString()}</div>
        <button
          onClick={() =>
            dispatch({
              type: "login-status-change",
              payload: !state.isUserLoggedIn, //...
            })
          }
        >
          {state.isUserLoggedIn ? 'Logout' : 'login'}
        </button>
      </div>
      <button
        onClick={() =>
          dispatch({
            type: "date-format-change", // sa aveti un combobox din care sa selectati un user format nou si sa il setati in state
            payload: {}, //...
          })
        }
      >
        Change user date format
      </button>
    </div>
  );
};

// const Counter = () => {
//   //   const [state, dispatch] = useReducer(reducer, initialState);
//   const [counter, setState] = useState(0);

//   const increment = useCallback(() => {
//     setState(counter + 1);
//   }, [setState, counter]);

//   const decrement = useCallback(() => {
//     setState(counter - 1);
//   }, [setState, counter]);

//   return (
//     <>
//       Count: {counter}
//       <button onClick={decrement}>-</button>
//       <button onClick={increment}>+</button>
//       {/* <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       <button onClick={() => dispatch({type: 'increment'})}>+</button> */}
//     </>
//   );
// };

export default Counter;
