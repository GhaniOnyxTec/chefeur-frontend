import React from "react";
import Layout from "../../Components/Layout";
import Check from "../../Components/UI/input/checkboxForm";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";

/**
 * @author
 * @function Form
 **/

const Form = (props) => {
  return (
    <Layout>
      <Jumbotron className="d-flex justify-content-center">
        <Row>
          <h2>How many people are you sopping for?</h2>
        </Row>
        <Row>
          <Col>
            <Check type="checkbox" label="Adult" />
          </Col>
          <Col>
            <Check type="checkbox" label="Children" />
          </Col>
        </Row>
      </Jumbotron>
      <Jumbotron className="d-flex justify-content-center">
        <Row>
          <Col>
            <Check type="checkbox" label="Adult" />
          </Col>
          <Col>
            <Check type="checkbox" label="Children" />
          </Col>
        </Row>
      </Jumbotron>
      <Jumbotron className="d-flex justify-content-center">
        <Row>
          <Col>
            <Check type="checkbox" label="Adult" />
          </Col>
          <Col>
            <Check type="checkbox" label="Children" />
          </Col>
        </Row>
      </Jumbotron>
      <Jumbotron className="d-flex justify-content-center">
        <Row>
          <Col>
            <Check type="checkbox" label="Adult" />
          </Col>
          <Col>
            <Check type="checkbox" label="Children" />
          </Col>
        </Row>
      </Jumbotron>
      <Jumbotron className="d-flex justify-content-center">
        <Row>
          <Col>
            <Check type="checkbox" label="Adult" />
          </Col>
          <Col>
            <Check type="checkbox" label="Children" />
          </Col>
        </Row>
      </Jumbotron>
    </Layout>
  );
};

export default Form;
