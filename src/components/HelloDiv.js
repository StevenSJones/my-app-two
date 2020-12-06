import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import axios from "axios";

/*two ways to pass in data:
1) inside the component you can create a variable (hardcoded) and place the name that you assign the variable into curly brackets in the return statement in the component || (OR) 
2) pass props into the function and return props.theNameOfTheVariable in curly brackets in the component && (AND) 
then inside the App.js file you return the actual variable name example of what is in the return in App.js: <HelloDiv name='Steven Jones'/>
*/
let favs;
let peopleFavs;

//using the axios get function and handling the response.
axios.get("http://localhost:7800/favoriteThings").then((response) => {
//favs is set to the value of the response data recieved from the server  
favs = response.data;
//using a for loop to iterate over the array
  for (let i = 0; i < favs.length; i++) {
    //peoplefavs += creates a jumbotron for each item in the array 
    peopleFavs += (
      <Jumbotron>
        <h1>My Name is {favs[i].first_name + favs[i].last_name} </h1>
        {/* <h2>These Are A Few Of My Favorite Things</h2>
        <ul>
          <li>{props.favorites[0]}</li>
          <li>{props.favorites[1]}</li>
          <li>{props.favorites[2]}</li>
          <li>{props.favorites[3]}</li>
          <li>{props.favorites[4]}</li>
          <li>{props.favorites[5]}</li>
        </ul> */}
      </Jumbotron>
    );
  }

  // console.log(response.status);
  // console.log(response.statusText);
  // console.log(response.headers);
  // console.log(response.config);
});
//actually exporting the function including the peopleFavs jumbo
export default function HelloDiv(props) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
          {peopleFavs}
          </Col>
        </Row>
      </Container>
    </>
  );
}
