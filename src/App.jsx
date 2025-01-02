import CarForm from "./components/CarForm"
import CarList from "./components/CarList"
import CarSearch from "./components/CarSearch"
import CarValue from "./components/CarValue"


function App() {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  )
}

export default App;





// [useRef case 1 - Accessing Dom]
// 1. Accessing DOM Elements
// Use useRef to directly interact with a DOM element, such as focusing an input field.

// import React, { useRef } from "react";

// const FocusInput = () => {
//     const inputRef = useRef(null);

//     const handleFocus = () => {
//         inputRef.current.focus(); // Focuses the input field
//     };

//     return (
//         <div>
//             <input ref={inputRef} type="text" placeholder="Type here" />
//             <button onClick={handleFocus}>Focus Input</button>
//         </div>
//     );
// };

// export default FocusInput;
// Why useRef?
// Access the DOM directly without triggering a re-render.




// Need to update value but it should not render
// [useRef case 2 - Persisting Mutable Variables Without Re-rendering]
// import React, { useRef, useState } from "react";

// const Timer = () => {
//     const count = useRef(0);
//     const [renderCount, setRenderCount] = useState(0);

//     const increment = () => {
//         count.current += 1; // Update ref value without re-render
//         console.log(`Count: ${count.current}`);
//     };

//     console.log('renders in useRef??? ====> no', count.current)

//     return (
//         <div>
//             <button onClick={increment}>Increment Count</button>
//             <button onClick={() => setRenderCount(renderCount + 1)}>
//                 Force Re-render
//             </button>
//             <p>Render Count: {renderCount}</p>
//         </div>
//     );
// };

// export default Timer;

// Why useRef?
// Keep a mutable value (count.current) that doesn't cause a re-render when updated.





// Tracking down the previous value of state
// [useRef case 3 - Tracking Previous State]
// import React, { useRef, useState, useEffect } from "react";

// const PreviousState = () => {
//     const [count, setCount] = useState(0);
//     const prevCount = useRef(null);
//     console.log('state')

//     useEffect(() => {
//         console.log('useEffect')
//         prevCount.current = count; // Update the ref after each render
//     });

//     console.log('component')

//     return (
//         <div>
//             <p>Current Count: {count}</p>
//             <p>Previous Count: {prevCount.current}</p>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//         </div>
//     );
// };

// export default PreviousState;
// Why useRef?
// Keep track of previous state values without triggering re-renders.





// [useRef case 4 - Debouncing or Throttling Events]
// import React, { useRef, useState } from "react";

// const Search = () => {
//     const [query, setQuery] = useState("");
//     const debounceRef = useRef(null);

//     const handleChange = (e) => {
//         const value = e.target.value;
//         if (debounceRef.current) clearTimeout(debounceRef.current);

//         debounceRef.current = setTimeout(() => {
//             setQuery(value); // Update the state after a delay
//         }, 500);
//     };

//     return (
//         <div>
//             <input type="text" onChange={handleChange} placeholder="Type to search..." />
//             <p>Search Query: {query}</p>
//         </div>
//     );
// };

// export default Search;
// Store the timeout ID (debounceRef.current) to control when the function executes without re-rendering.





// [useRef case 5 - useRef with forwardRef: Exposing Child Component's Functionality]
// import React, { useRef, forwardRef } from "react";

// // Child Component using forwardRef
// const CustomInput = forwardRef((props, ref) => {
//     return <input ref={ref} type="text" placeholder="Type something..." {...props} />;
// });

// // Parent Component
// const ParentComponent = () => {
//     const inputRef = useRef(null);

//     const handleFocus = () => {
//         inputRef.current.focus(); // Access and focus the child input
//     };

//     const handleClear = () => {
//         inputRef.current.value = ""; // Clear the input's value
//     };

//     return (
//         <div>
//             <CustomInput ref={inputRef} />
//             <button onClick={handleFocus}>Focus Input</button>
//             <button onClick={handleClear}>Clear Input</button>
//         </div>
//     );
// };

// export default ParentComponent;

// It enables the parent to control the internal state or behavior of a child component while maintaining encapsulation.
// Commonly used for reusable UI components like custom inputs, modals, or tooltips.





// [Memo]
// React.memo: Memoizing Components
// Scenario: Prevent a child component from re-rendering unless its props change.
// import React, { useState } from "react";

// const Counter = React.memo(({ count }) => {
//     console.log("Rendering Counter");
//     return <p>Count: {count}</p>;
// });

// const App = () => {
//     const [count, setCount] = useState(0);
//     const [text, setText] = useState("");

//     return (
//         <div>
//             <Counter count={count} />
//             <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
//             <input
//                 placeholder="Type something"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//             />
//         </div>
//     );
// };

// export default App;

// Why React.memo?

// Without React.memo, the Counter component re-renders every time App renders, even if count doesn’t change.
// With React.memo, Counter only re-renders when its count prop changes.







// [useCallback 1 - use case for function props]
import React, { useState, useCallback } from "react";

// const Button = React.memo(({ onClick, label }) => {
//     console.log(`Rendering button: ${label}`);
//     return <button onClick={onClick}>{label}</button>;
// });

// const App = () => {
//     const [count, setCount] = useState(0);
//     const [text, setText] = useState("");

//     // Memoize the increment function
//     const increment = useCallback(() => {
//         setCount((prev) => prev + 1);
//     }, []);

//     return (
//         <div>
//             <Button onClick={increment} label="Increment" />
//             <p>Count: {count}</p>
//             <input
//                 placeholder="Type something"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//             />
//         </div>
//     );
// };

// export default App;








// [useCallback 2 - use case - when we need to call a function only in specific cases and set different logic in a function]
// import React, { useState, useEffect, useCallback } from "react";

// const FilteredData = () => {
//     const [filter, setFilter] = useState("all");
//     const [data, setData] = useState(null);

//     const fetchFilteredData = useCallback(async () => {
//         console.log(`Fetching data for filter: ${filter}`);
//         // Simulate API call
//         const result = await new Promise((resolve) =>
//             setTimeout(() => resolve(`Data for filter "${filter}"`), 1000)
//         );
//         setData(result);
//     }, [filter]);

//     useEffect(() => {
//         fetchFilteredData();
//     }, [fetchFilteredData]);

//     return (
//         <div>
//             <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//                 <option value="all">All</option>
//                 <option value="completed">Completed</option>
//                 <option value="pending">Pending</option>
//             </select>
//             <p>{data}</p>
//         </div>
//     );
// };

// export default FilteredData;






// [useCallback 3 - use case for Event Listeners with Stable Handlers]
// import React, { useState, useCallback, useEffect } from "react";

// const KeyPressHandler = () => {
//     const [key, setKey] = useState("");

//     const handleKeyPress = useCallback((event) => {
//         setKey(event.key); // Update state when a key is pressed
//     }, []);

//     useEffect(() => {
//         window.addEventListener("keydown", handleKeyPress);

//         return () => {
//             window.removeEventListener("keydown", handleKeyPress);
//         };
//     }, [handleKeyPress]);

//     return (
//         <div>
//             <p>Last Key Pressed: {key}</p>
//         </div>
//     );
// };

// export default KeyPressHandler;






// [useCallback case 4 - debouncing and useEffect]
// import React, { useState, useEffect, useCallback } from "react";

// const SearchWithDebounce = () => {
//     const [query, setQuery] = useState("");
//     const [data, setData] = useState(null);

//     const fetchData = useCallback(async (searchQuery) => {
//         console.log(`Fetching data for: ${searchQuery}`);
//         // Simulate a fetch call
//         const result = await new Promise((resolve) =>
//             setTimeout(() => resolve(`Result for "${searchQuery}"`), 1000)
//         );
//         setData(result);
//     }, []);

//     useEffect(() => {
//         if (!query) return;

//         const handler = setTimeout(() => {
//             fetchData(query);
//         }, 500);

//         return () => clearTimeout(handler); // Cleanup on query change
//     }, [query, fetchData]);

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Search..."
//             />
//             {data && <p>{data}</p>}
//         </div>
//     );
// };

// export default SearchWithDebounce;








// [useMemo]
// import React, { useMemo, useState } from "react";

// const ExpensiveCalculation = ({ num }) => {
//     const calculateFactorial = (n) => {
//         console.log("Calculating factorial...");
//         return n <= 1 ? 1 : n * calculateFactorial(n - 1);
//     };

//     // Memoize the result of the calculation
//     const factorial = useMemo(() => calculateFactorial(num), [num]);

//     return <div>Factorial of {num} is {factorial}</div>;
// };

// const App = () => {
//     const [number, setNumber] = useState(5);
//     const [text, setText] = useState("");

//     return (
//         <div>
//             <ExpensiveCalculation num={number} />
//             <button onClick={() => setNumber((prev) => prev + 1)}>Increment Number</button>
//             <input
//                 placeholder="Type something"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//             />
//         </div>
//     );
// };

// export default App;
