import React from "react";
import Layout from "../../Components/Layout";
import Check from "../../Components/UI/input/checkboxForm";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import './style.css'

/**
 * @author
 * @function Form
 **/

const Form = (props) => {
  return (
    <Layout>

      <Jumbotron className=" jumb ">
        <Row>
          <Col md={{ span: 6, offset: 4 }}>
          <label className="lab" >How many people are you shopping for?</label>
          </Col>
        </Row>
        <Row className="opt" >
          <Col>
            <Check type="checkbox" label="Adult" />
          </Col>
          <Col  >
            <Check type="checkbox" label="Children" />
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron className=" jumb ">
        <Row>
          <Col md={{ span: 6, offset: 4 }}>
          <label className="lab" >What is your cooking preference?</label>
          </Col>
        </Row>
        <Row className="opt" >
          <Col >
            <Check type="checkbox" label="Cook for 1-2 servings" />
          </Col>
          <Col>
            <Check type="checkbox" label="Cook for large batches" />
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron className=" jumb ">
        <Row>
          <Col md={{ span: 6, offset: 4 }}>
          <label className="lab" >How would you describe your eating habits?</label>
          </Col>
        </Row>
        <Row className="opt" >
          <Col >
            <Check type="checkbox" label="low sodium" />
          </Col>
          <Col>
            <Check type="checkbox" label="Gluten free" />
          </Col>
          <Col>
            <Check type="checkbox" label="kosher" />
          </Col>
        </Row>
        <Row className="opt" >
          <Col >
            <Check type="checkbox" label="Clean Eating" />
          </Col>
          <Col>
            <Check type="checkbox" label="Dairy free" />
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron className=" jumb ">
        <Row>
          <Col md={{ span: 6, offset: 4 }}>
          <label className="lab" >How often do you shop for groceries?</label>
          </Col>
        </Row>
        <Row className="opt" >
          <Col >
            <Check type="checkbox" label="Once per week" />
          </Col>
          <Col>
            <Check type="checkbox" label="Once every 10 days" />
          </Col>
        </Row>
        <Row className="opt" >
          <Col >
            <Check type="checkbox" label="Once every 2 weeks" />
          </Col>
          <Col>
            <Check type="checkbox" label="Once every month" />
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron className=" jumb ">
        <Row>
          <Col md={{ span: 6, offset: 4 }}>
          <label className="lab" >How many stores do you visit for groceries shopping?</label>
          </Col>
        </Row>
        <Row className="opt" >
          <Col>
            <Check type="checkbox" label="1" />
          </Col>
          <Col>
            <Check type="checkbox" label="2+" />
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron className=" jumb ">
        <Row>
          <Col md={{ span: 6, offset: 4 }}>
          <label className="lab" >Do you shop for any ethnic cuisines?</label>
          </Col>
        </Row>
        <Row className="opt" >
          <Col >
            <Check type="checkbox" label="Indian" />
          </Col>
          <Col>
            <Check type="checkbox" label="Middle Eastern" />
          </Col>
          <Col>
            <Check type="checkbox" label="Asian" />
          </Col>
        </Row>
        <Row className="opt" >
          <Col >
            <Check type="checkbox" label="Others" />
          </Col>
          <Col>
            <Check type="checkbox" label="None" />
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron className=" jumb ">
        <Row>
          <Col md={{ span: 6, offset: 4 }}>
          <label className="lab" >How do you like your produce?</label>
          </Col>
        </Row>
        <Row className="opt" >
          <Col >
            <Check type="checkbox" label="Conventional" />
          </Col>
          <Col>
            <Check type="checkbox" label="Organic" />
          </Col>
          <Col>
            <Check type="checkbox" label="Both" />
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron className=" jumb ">
        <Row>
          <Col md={{ span: 6, offset: 4 }}>
          <label className="lab" >How often do you add meat to your diet?</label>
          </Col>
        </Row>
        <Row className="opt" >
          <Col >
            <Check type="checkbox" label="Vegetarian" />
          </Col>
          <Col>
            <Check type="checkbox" label="Vegan" />
          </Col>
        </Row>
        <Row className="opt" >
          <Col >
            <Check type="checkbox" label="Pescetarian" />
          </Col>
          <Col>
            <Check type="checkbox" label="Eggetarian" />
          </Col>
        </Row>
        <Row className="opt" >
          <Col >
            <Check type="checkbox" label="Chickenatarian" />
          </Col>
          <Col>
            <Check type="checkbox" label="No Preference" />
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron className=" jumb ">
        <Row>
          <Col md={{ span: 6, offset: 4 }}>
          <label className="lab" >Would you like us to avoid any of the following?</label>
          </Col>
        </Row>
        <Row className="opt" >
          <Col >
            <Check type="checkbox" label="Pre-chopped vegetables" />
          </Col>
          <Col>
            <Check type="checkbox" label="Pre-cooked meat" />
          </Col>
        </Row>
        <Row className="opt" >
          <Col >
            <Check type="checkbox" label="Frozen Fruits & Vegetables" />
          </Col>
          <Col>
            <Check type="checkbox" label="Frozen cooked meat" />
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron className=" jumb ">
        <Row>
          <Col md={{ span: 6, offset: 4 }}>
          <label className="lab" >Would you like us to avoid any of the following items?</label>
          </Col>
        </Row>
        <Row className="opt" >
          <Col >
            <Check type="checkbox" label="Beef" />
          </Col>
          <Col>
            <Check type="checkbox" label="Pork" />
          </Col>
          <Col>
            <Check type="checkbox" label="Lamb" />
          </Col>
        </Row>
        <Row className="opt" >
          <Col >
            <Check type="checkbox" label="Soy" />
          </Col>
          <Col>
            <Check type="checkbox" label="Shelfish" />
          </Col>
          <Col>
            <Check type="checkbox" label="Shrimp" />
          </Col>
        </Row>
        <Row className="opt" >
          <Col >
            <Check type="checkbox" label="Tree-nuts" />
          </Col>
          <Col>
            <Check type="checkbox" label="Garlic" />
          </Col>
          <Col>
            <Check type="checkbox" label="Mushroom" />
          </Col>
        </Row>
        <Row className="opt" >
          <Col >
            <Check type="checkbox" label="Eggs" />
          </Col>
          <Col>
            <Check type="checkbox" label="Eggplant" />
          </Col>
          <Col>
            <Check type="checkbox" label="Peanuts" />
          </Col>
        </Row>
      </Jumbotron>

    </Layout>
  );
};

export default Form;
