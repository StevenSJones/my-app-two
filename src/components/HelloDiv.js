import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import axios from "axios";

/*two ways to pass in data:
1) inside the component you can create a variable (hardcoded) and place the name that you assign the variable into curly brackets in the return statement in the component || (OR) 
2) pass props into the function and return props.theNameOfTheVariable in curly brackets in the component && (AND) 
then inside the App.js file you return the actual variable name example of what is in the return in App.js: <HelloDiv name='Steven Jones'/>
*/
 
export default function HelloDiv(props) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Jumbotron>
              <h1>My Name is {props.name}</h1>
              <h2>These Are A Few Of My Favorite Things</h2>
              <ul>
                <li>{props.favorites[0]}</li>
                <li>{props.favorites[1]}</li>
                <li>{props.favorites[2]}</li>
                <li>{props.favorites[3]}</li>
                <li>{props.favorites[4]}</li>
                <li>{props.favorites[5]}</li>
              </ul>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </>
  );
}



 