import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Landingpage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Landingpage() {

  const navigate=useNavigate()
  const sinupbtn=()=>{
    navigate('/login')
  }
  return (
    <div>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#" className="mx-5">
              <i class="fa-regular fa-pen-to-square fa-xl"></i>
              <span className="text-danger ms-2">todolist</span>
            </Navbar.Brand>
            <Navbar.Toggle style={{ border: "none" }} />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex accordion-body me-2">
                <Link to={'/login'}>
                  <Button variant="light">Log in</Button>
                </Link>
                <Button onClick={sinupbtn} variant="danger" className="mx-2">
                    Start For Free
                  </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Container id="tagline" className="text-center">
        <h1 style={{ marginTop: "7.5rem" }}>
          Organize your work and life, finally.
        </h1>
      </Container>
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <h5 className="description" style={{ color: "gray" }}>
          Become focused, organized, and calm with Todoist. The world’s #1 task
          manager and to-do list app.
        </h5>
          <Button onClick={sinupbtn} class="button" variant="danger" className="mx-2">
            Start For Free
          </Button>
      </div>
    </div>
  );
}

export default Landingpage;
