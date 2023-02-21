import React from "react"
import { Navbar, Container } from "react-bootstrap";
import '../App.css';

const Header = (props) => {
    return ( 
        <div className='NavProp'>
           <Navbar variant="dark" bg="dark" expand="lg">
                <Container fluid>
                  <Navbar.Brand href="#home">                    
                    <ul>
                      <li>
                        <img
                          alt=""
                          src="https://pbs.twimg.com/profile_images/1142044419924910081/2jVH0Hcb_400x400.jpg"
                          width="50"
                          height="50"
                          className="d-inline-block align-top"
                        />
                      </li>
                      <li><h1>ADMIN PANEL</h1></li>
                    </ul>
                  </Navbar.Brand>
                </Container>
              </Navbar>
        </div>
    )
}

export default Header;