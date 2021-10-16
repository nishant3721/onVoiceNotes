import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { LinkContainer } from "react-router-bootstrap";
import {
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import "../custom.css";

export default function NavBar(props) {
  const context = useContext(noteContext);

  return (
    <Navbar
      style={{
        backgroundImage: `url(
          "https://unsplash.com/photos/JH_R66BihvA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM0NDAwNzYy&force=true&w=1920"
        )`,
      }}
      sticky="top"
      bg="light"
      variant="light"
      expand="lg"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="branding">{props.title}</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link className="fontEditing">
                <Button variant="outline-primary">
                  Get Started <i class="fas fa-sign-in-alt"></i>
                </Button>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/home">
              <Nav.Link className="fontEditing">
                <Button variant="outline-info">Home <i class="fas fa-home"></i></Button>
              </Nav.Link>
            </LinkContainer>
          </Nav>
          {/* <Form className="d-flex my-1 me-5">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          {localStorage.getItem("token") ? (
            <Button
              onClick={context.logOut}
              className="me-1 my-1"
              variant="warning"
            >
              Log Out
            </Button>
          ) : (
            ""
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
