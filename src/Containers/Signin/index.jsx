import React,{ useState }from "react";
import Layout from "../../Components/Layout";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import Input from '../../Components/UI/input/index';
import {login} from '../../redux/actions';
import { useDispatch,useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


/**
 * @author
 * @function Signin
 **/

const Signin = (props) => {

  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('');
  // const [error,setErrors] = useState();

  //work as mapStatetoProps, useSelector Allows you to extract data from the Redux store state
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();

  const userLogin =(e)=>{
    e.preventDefault();
    const user={
      email,
      password
    }
    dispatch(login(user));
  }
  //stop user from going back to signin page after login  
  if(auth.authenticate){
    return <Redirect to='/' />
  }

  return (
    <Layout>
      <Container>
        <Row style={{marginTop:'50px'}}>
          <Col md={{span:'6', offset:'3'}}>
            <Form onSubmit={userLogin}>
            <Input
                label="Email Address"
                placeholder="Enter Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;
