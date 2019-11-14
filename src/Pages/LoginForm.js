import React from 'react';
import './Pages.css';

import Button from 'react-bootstrap/Button'
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import FormCheck from 'react-bootstrap/FormCheck';
import { Component } from 'react';

class LoginForm extends Component{
    constructor(props){
        super(props);
        //functions binding
    }
    //functions


render(){
    return(
    <Container className="form-container">
        <Row className="row" size="12">
          <Col size="4"></Col>
          <Col size="8" className="justify-content-md-center">

            <Form>
              <p>Login to dashboard</p>
            
              <Form.Group controlId="form-role">
                <FormCheck
                  inline label="2" type="radio" name="radio-group" label="Owner" id="role"/>
                <FormCheck
                  inline label="2" type="radio" name="radio-group" label="Manager" id="role"/>
              </Form.Group>

              <Form.Group controlId="form-id">
                <Form.Control type="text" placeholder="ID" />
              </Form.Group>
              
              <Form.Group controlId="form-email">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              
              <Form.Group controlId="form-password">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              
              <Form.Group>
                <Button variant="outline-primary" type="submit">
                  Submitt
                </Button>
              </Form.Group>
            </Form>
          </Col>
          <Col size="4"></Col>
        </Row>
</Container>
)
}}

export default LoginForm;
