import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
   .navbar, .navbar-expand-lg, .navbar-light{
      background : rgba(2,0,36,1);
      transition:0.9s;
   }

   .navbar-brand{
       padding : 0;
       margin : 0;
   }
   
   a{
      color : white;
      margin : 8px ;
      font-weight : bold;
      font-size : 16px;

      &:hover{
       color :#cd4339;
       text-decoration:none;
    }
   }

   .scrolled{   
    position : fixed;
    background:rgba(63,63,179,1);
    z-index:1;
    width : 1349px;
    transition:0.9s;
    @media only screen and (max-width: 768px) {
          width:100%;
      }
   }

   .register{
       background : #4d8abc;
       border-radius : 5px;
       text-align : center;
    }

    .navbar-toggler-icon {
       background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    }

`;


function NavBar() {
     
    useEffect(
        () => {
            window.addEventListener('scroll', () => {
                console.log('component did mount')
                const isTop = window.scrollY > 0;
                const nav = document.getElementById('nav');
                if (isTop){
                    nav.classList.add('scrolled');
                }else{
                    nav.classList.remove('scrolled');
                }
            })
            return () => {
                console.log('component did not mount')
                window.removeEventListener('scroll')
            }
        }
    );
    return(
        <Styles>
        <Navbar id='nav' expand='lg' className='sticky-nav'>
            <Container>
              <Navbar.Brand href="/">
                 <img src={require('../assets/medical bio-09.png')}
                      width = '148'
                      height = '90'
                      alt=""
                   />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav'/>
              <Navbar.Collapse>
                  <Nav className='ml-auto'>
                     <Nav.Item>
                         <Nav.Link >
                             <Link to="/Author_Guideline">Author Guideline</Link>
                         </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                         <Nav.Link >
                             <Link to="/Login">Login</Link>
                         </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                         <Nav.Link className='register'>
                             <Link to="/Register">Join for free</Link>
                         </Nav.Link>
                     </Nav.Item>
                 </Nav>
             </Navbar.Collapse>
        </Container>
        </Navbar>
    </Styles>

 
    )
}

export default NavBar;


