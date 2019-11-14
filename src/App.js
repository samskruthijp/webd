import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormCheck from 'react-bootstrap/FormCheck';
function App() {
  return (
    <div className="App">
      <Form>
        <FormCheck
        inline label="2" type="radio" label="Owner" id="role"/>

        <FormCheck
        inline label="2" type="radio" label="Manager" id="role"/>

      </Form>
    </div>
  );
}

export default App;
