import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { signout } from "../../redux/actions";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(signout());
  };

  const renderNoNLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link">
            SignIn
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link">
            SignUp
          </NavLink>
        </li>
      </Nav>
    );
  };

  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link" onClick={logout}>
            SignOut
          </NavLink>
        </li>
      </Nav>
    );
  };

  return (
    <Container fluid style={{ padding: "0rem" }}>
      {/*zIndex in nabar usage */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="white"
        style={{ zIndex: "1", height:'4rem' }}
      >
        <Link to="/" className="navbar-brand">
          <img
            src="logov2.png"
            alt=""
            className="img-fluid"
            style={{
              height: 150,
              position: "absolute",
              top: -47,
              left: 500,
              paddingTop: 10,
              paddingLeft: 30,
            }}
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          {auth.authenticate ? renderLoggedInLinks() : renderNoNLoggedInLinks()}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
