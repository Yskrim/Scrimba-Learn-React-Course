1. What is "conditional rendering"?
    - Conditional rendering is a react term for rendering the element interactively depending on state condition. This condition has to be truthy to render the element.


2. When would you use &&?
    -  AND && operator is used in if-statements to check if all of the mentioned conditions meet left to right. When checking if(condition1 && condition2), if the first condition is met, the second one can be replaced with a piece of code, thus making it meet only one condition, more likely independently from other conditions.

    Either to show something or NOT.

3. When would you use a ternary?
    - Ternary is used for selecting either one of the conditions. Either the value is going to be truthy or falsy. We can use ternary for rendering depending on either conditions.


4. What if you need to decide between > 2 options on
   what to display?
    - Ternary, because it reduces the amount of code to be written, and doenst produce no copies for the elements.
