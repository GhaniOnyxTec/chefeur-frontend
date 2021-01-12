import React from "react";
import { Jumbotron, Row, Col, Container, Button } from "react-bootstrap";
import Layout from "../../Components/Layout";
import "./style.css";
import Learn_n_Draw from "../../assets/undraw_online_groceries_a02y.svg";
import Celebration from "../../assets/undraw_celebration_0jvk.svg";
import banner1 from "../../assets/2102.jpg";
import Personalization from "../../assets/undraw_survey_05s5.svg";
import Savings from "../../assets/undraw_Savings_re_eq4w.svg";
import Clock from "../../assets/undraw_time_management_30iu.svg";
import Cooking from "../../assets/undraw_cooking_lyxy.svg";
import Forms from "../../assets/undraw_shopping_app_flsj.svg";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <Layout className="pageContainer" >
      <Jumbotron style={{margin: '20px 20px 20px 20px',padding:'0px' }} >
        <img src={banner1} style={{ width:'100%', height:'400px' }} />
      </Jumbotron>
      <Container className="landing-page" fluid>
        <Row
          className="justify-content-md-center"
          style={{ padding: 30, backgroundColor: "#eaeae3" }}
        >
          <Row>
            <Col>
              <h1>How does it work?</h1>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={3} xs={12}>
              <h2 className="text-center">Personalization</h2>
              <p className="text-muted">
                Sign up for our service and answer few questions to help us
                understand your needs a little better.
              </p>
              <img
                className="d-block mx-auto"
                src={Personalization}
                alt="Logo"
                style={{
                  marginTop: 3,
                  height: 100,
                  width: 195,
                }}
              />
            </Col>
            <Col md={5} xs={12}>
              <h2 className="text-center">Learn and Adapt</h2>
              <p className="text-muted">
                We pre-populate your cart with items. You review, make changes
                (if needed) and approve. You can also shop for items that we
                missed which will give us a chance to learn more.
              </p>
              {/* <div className="center"> */}
              <img
                className="d-block mx-auto"
                src={Learn_n_Draw}
                alt="Logo"
                style={{
                  marginTop: 3,
                  height: 100,
                  width: 195,
                  display: "block",
                }}
              />
              {/* </div> */}
            </Col>
            <Col md={3} xs={12}>
              <h2 className="text-center">Voila!</h2>
              <p className="text-muted">
                Be done with your grocery needs within minutes from the stores
                you love delivered right to your doorsteps!
              </p>
              <div className="justify-content-md-center">
                <img
                  className="d-block mx-auto"
                  src={Celebration}
                  alt="Logo"
                  style={{
                    marginTop: 3,
                    height: 100,
                    width: 195,
                  }}
                />
              </div>
            </Col>
          </Row>
        </Row>
        <Row style={{ paddingTop: 40 }}>
          <Col className="text-center" style={{ padding: 5 }}>
            <h2>Introducing Chefeur</h2>
          </Col>
        </Row>
        <Row>
          <Col className="text-center" style={{ paddingBottom: 30 }}>
            <h6 className="text-muted">
              {" "}
              Gone are the days of "actually" shopping for groceries
            </h6>
          </Col>
        </Row>
        <Row className="justify-content-center" style={{ padding: 20 }}>
          <Col md="auto">
            <img
              src={Savings}
              alt="Logo"
              style={{
                height: 100,
                width: 150,
              }}
            />
          </Col>
          <Col style={{ padding: 0 }} md={4}>
            <h3>Track your expenditure</h3>
            <p className="text-muted">
              Keep a tab on grocery bills and avoid overspending
            </p>
          </Col>
          <Col md="auto">
            <img
              src={Clock}
              alt="Logo"
              style={{
                height: 100,
                width: 150,
              }}
            />
          </Col>
          <Col style={{ padding: 0 }} md={3}>
            <h3>Bring back lost time</h3>
            <p className="text-muted">
              Regain lost time to focus on things you enjoy the most
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="auto">
            <img
              src={Cooking}
              alt="Logo"
              style={{
                height: 100,
                width: 150,
              }}
            />
          </Col>
          <Col style={{ padding: 0 }} md={4}>
            <h3>Reduce food wastage</h3>
            <p className="text-muted">
              Recieve the right amount of groceries or produce to avoid wastage
              or spoilage
            </p>
          </Col>
          <Col md="auto">
            <img
              src={Forms}
              alt="Logo"
              style={{
                height: 100,
                width: 150,
              }}
            />
          </Col>
          <Col style={{ padding: 0 }} md={3}>
            <h3>Multiple stores delivered</h3>
            <p className="text-muted">
              Can't find everything in one store or prefer ethnic groceries? We
              have you covered.
            </p>
          </Col>
        </Row>
        <Row style={{ paddingTop: 70 }}>
          <Col className="text-center" style={{ padding: 10 }}>
            <h1>
              <b>Grocery Shopping? Not a chore anymore!</b>
            </h1>
          </Col>
        </Row>
        <Row style={{ padding: 10 }}>
          <Col className="text-muted text-center ">
            <h4>
              Let us serve you better so that you can do the same with your
              life.
            </h4>
          </Col>
        </Row>
      </Container>
      <Jumbotron style={{borderRadius: '10em/3em' }}>
          <Row className='justify-content-md-center'>
          <p>
           Ready to build your own personalized grocery order?
          </p>
          </Row>
          <Row className='justify-content-md-center'>
          <NavLink to='/form'><Button>Get Started today</Button></NavLink>
          </Row>
          <br/>
          <Row className='justify-content-md-center'>
          <p>
          Let us serve you better so that you can do the same with your life
          </p>
          </Row>
      </Jumbotron>
    </Layout>
  );
};

export default Home;
