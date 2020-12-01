import React from "react";
import HelloDiv from "./components/HelloDiv";
import Navigation from "./components/Navigation";
import favorites from "./data/favorites";
import names from "./data/names";


function App() {
  let favoriteThings = favorites;
  return (
    <>
      <Navigation />
      <HelloDiv name={names[0]} favorites={favoriteThings} />
      <HelloDiv name={names[1]} favorites={favoriteThings}/>
    </>
  );
}

export default App;
