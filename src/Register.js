import React from 'react';
import styled from 'styled-components';
import {Container, Form, Card, Col, Row} from 'react-bootstrap';

//images
import background_1 from './assets/background5.png'

//components
import Datepickers from './Components/Datepickers'

const Styles = styled.div`
  .register-rows-header{
    display:'block';
    text-align:'center';
    padding:50px 50px 20px 50px;
  }
  .register-form-subtitle{
    padding-left:32%;
    color:rgba(63,63,179,1);
    &:after{
            content:"";
             background: rgba(63,63,179,1);
             display:block;
             height:2px;
        }
  }
  .register-rows{
    padding:30px 40px 0 40px;
  }
  .register-form{
    margin-bottom:20px;
  }
`;


function Register() {
    return (
       <React.Fragment>
         <Styles>
           <div style={{
                backgroundImage:`url(${background_1})`,
                padding:'100px 200px 100px 200px'
              }}>
              <Card style={{
                height:'auto',
                width:'auto',
                boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)',
                background:'#F2F0F0'
              }}>
                <Row className='register-rows-header'>
                  <h2 style={{paddingLeft:'40%',color:'rgba(63,63,179,1)',fontWeight:'bolder'}}>Join Us Now</h2>
                  <h4 className='register-form-subtitle' >Welcome to our community</h4>
                </Row>
                <Row className='register-rows'>
                  <Col>
                    <Form.Control className='register-form' placeholder="First name *" />
                    <Form.Control className='register-form' placeholder="Email * " />
                    <Form.Control className='register-form' type="password" placeholder="Password *" />
                  </Col>
                  <Col>
                    <Form.Control className='register-form' placeholder="Last name * " />
                    <Form.Control className='register-form' placeholder="Phone number" />
                    <Form.Control className='register-form' type="password" placeholder="Confirm Password *" />
                  </Col>
                </Row>
                <Row style={{
                          paddingLeft:'55px',
                          paddingRight:'55px',
                          paddingTop:'25px' 
                          }}
                        >
                     <Form.Control className='register-form' placeholder="Address" />
                     <Datepickers/>
                  </Row>
                <Row style={{
                          paddingLeft:'55px',
                          paddingRight:'55px',
                          paddingTop:'25px' 
                          }}>
                  <Form.Check
                    className='register-form'
                    type="radio"
                    label="Author only"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    style={{paddingLeft:'50px'}}
                    type="radio"
                    label="Author and reviewer"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                </Row>
                <Row style={{paddingLeft:'79%', paddingTop:'30px',paddingBottom:'30px'}}>
                    <button style={{
                             background:'rgba(63,63,179,1)', 
                             color:'white', 
                             textAlign:'center',
                             fontWeight:'bolder',
                             borderRadius:'5px',
                             border:'none',
                             width:'170px',
                             height:'50px',
                             }}
                             type='submit'>
                        Register
                    </button>
                </Row>
              </Card>
           </div>
         </Styles>
       </React.Fragment>
    );
  }
  
  export default Register;