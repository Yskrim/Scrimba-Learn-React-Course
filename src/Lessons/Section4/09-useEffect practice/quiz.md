1. In what way are React components meant to be "pure functions"
    -- in the way that they only perform the render the same UI given the same input without interfering with any other outside system.


2. What is a "side effect" in React? What are some examples?
    -- Side Effect is a way to step outside the React primary tasks and be able to use components to get the data from or affect some kind of data outside the component.
    -- api fetch requests, websockets connections, DOM manipulations

3. What is NOT a "side effect" in React? Examples?
    -- working with DOM
    -- remembering the state value
    -- Changing the State/props


4. When does React run your useEffect function? When does it NOT run
   the effect function?
    -- Based on the specified dependencies array, the effect first renders on page load and rerenders once the dependency variables change


5. How would you explain what the "dependecies array" is?
    -- it is an array of the values React is monitoring and re-running the effect function if it detects any change in this comparison of the past values and the ones it has now.
