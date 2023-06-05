// import useState reducer
import { useReducer } from "react";

// create object to store values
const initialTodos = [
  {
    id: 1,
    title: "Sausages",
    complete: false,
  },
  {
    id: 2,
    title: "Eggs",
    complete: false,
  },
];


// create reducer function
// two parameters: current state, action required
const reducer = (state, action) => {
    // switch statment
  switch (action.type) {
    // evaluation case
    case "COMPLETE":
        // return the current state mapped with the current variable held in todo parameter
      return state.map((todo) => {
        // if statement, evaluate id in todo array held in initialTodos object
        if (todo.id === action.id) {
            // return spread syntax on todo array
          return { ...todo, complete: !todo.complete };
        //   else, return todo
        } else {
          return todo;
        }
      });
    //   default value is return state
    default:
      return state;
  }
};

// create Todo function
function Todos() {
    // create reducer, useState syntax with useRecuer passing in recducer functon and initialTodos function 
  const [todos, dispatch] = useReducer(reducer, initialTodos);
//   function handleComplete with todo parameter
  const handleComplete = (todo) => {
    // TODO: dispatch must be a keyword....
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  
//   return todos function call passing todo blank paramter which will access arrays held in object which we will display 
  return (
    <>
    {/* todos to map, todo */}
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

export default Todos;