
import {  Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header =() => {
    return(
      <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand >
          <Link to= "/">Diary Manager  </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
          <Form className="d-flex ml-auto">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 px-2"
              aria-label="Search"
            />
          </Form>
          </Nav>
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link >
              <Link to="/mynotes">My Diary</Link></Nav.Link>
            <NavDropdown title="Deepika" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My profile</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
         
         
        </Navbar.Collapse>
       
        
      </Container>
     
    </Navbar>
    
    );
};
export default Header;