import React from "react";

/*two ways to pass in data:
1) inside the component you can create a variable (hardcoded) and place the name that you assign the variable into curly brackets in the return statement in the component || (OR) 
2) pass props into the function and return props.theNameOfTheVariable in curly brackets in the component && (AND) 
then inside the App.js file you return the actual variable name example of what is in the return in App.js: <HelloDiv name='Steven Jones'/>
*/
function HelloDiv(props) {
  const fav1 = "Food";
  const fav2 = "Family";
  const fav3 = "Coding";
  const fav4 = "Hockey";
  const fav5 = "Learning";
  const fav6 = "Combat Sports";

  return (
    <>
      <h1>My Name is {props.name}</h1>
      <h2>These Are A Few Of My Favorite Things</h2>
      <ul>
        <li>{fav1}</li>
        <li>{fav2}</li>
        <li>{fav3}</li>
        <li>{fav4}</li>
        <li>{fav5}</li>
        <li>{fav6}</li>
      </ul>
    </>
  );
}

export default HelloDiv;
