// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import Whatsapp from "../../images/Component 26 – 1.svg";
import logoimg from "../../images/Mask Group 1.svg";

import Offcanvas from "react-bootstrap/Offcanvas";

function Navbars() {
  return (
    <>
      <div className="NavbarMobile">
        {["lg"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="mb-3 navbar"
            style={{ backgroundColor: "white" }}
          >
            <Container bg="light" variant="light">
              <Navbar.Brand as={Link} to="/">
                <img src={logoimg} /> 
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <NavLink to="/Home">
                      <p className="nav-link" style={{fontSize:'18px'}}>In Prop</p>
                    </NavLink>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 ">
                    {/* <NavLink to="/">
                    <span className="nav-link navpaddingright">
                      <p> In Prop</p>
                    </span>
                  </NavLink> */}
                   <NavLink to="/PropertiesPage">
                      <span className="nav-link navpaddingright">
                        <p style={{fontSize:'18px'}}>All Projects </p>
                      </span>
                    </NavLink>
                    <NavLink to="/PropertiesPage">
                      <span className="nav-link navpaddingright">
                        <p style={{fontSize:'18px'}}>All Properties </p>
                      </span>
                    </NavLink>
                    <NavLink to="/Agents">
                      <span className="nav-link navpaddingright">
                        <p style={{fontSize:'18px'}}>All Agents</p>
                      </span>
                    </NavLink>
                    <NavLink to="/UploadProject">
                      <span className="nav-link navpaddingright">
                        <p style={{fontSize:'18px'}}>Upload Project</p>
                      </span>
                    </NavLink>
                    <NavLink to="/UploadProperty">
                      <span className="nav-link navpaddingright">
                        <p style={{fontSize:'18px'}}>Upload Property</p>
                      </span>
                    </NavLink>
                    <NavLink to="/UploadAgents">
                      <span className="nav-link navpaddingright">
                        <p style={{fontSize:'18px'}}>Upload Agents</p>
                      </span>
                    </NavLink>
    
        
                    
                
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
}

export default Navbars;