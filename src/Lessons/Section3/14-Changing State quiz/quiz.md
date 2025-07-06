1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
    
    - (prevVar => callback function )
    1. new value for the variable
    2. callback function that uses the previous state of the variable as a parameter. To determine what the new value of state will be

2. When would you want to pass the first option (from answer
   above) to the state setter function?

   -  When we simply want to change the value of state


3. When would you want to pass the second option (from answer
   above) to the state setter function?

   -  When there is interaction involved and state variable must be updated based on it's last value