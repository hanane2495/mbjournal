import React from 'react';
import styled from 'styled-components';
import {Form} from 'react-bootstrap';

//images
import background_1 from './assets/background5.png'

//components
import Datepickers from './Components/Datepickers'

const Styles = styled.div`
  background-image:url(${background_1});
  padding: 8% 15%;
  font-size:36px;
  @media only screen and (max-width: 790px) {
    font-size:28px;
    padding:0;
  }
  @media only screen and (max-width: 320px) {
    font-size:22px;
  }
  .register-card{
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    width:auto;
    height:auto;
    padding:2% 5%;
    background:#F2F0F0;
    color:#555;
    border-radius:15px;
    box-shadow:5px 10px 20px 1px rgba(0,0,0, 0.253);
  }
  .join-us{
    font-size:1em;
    font-weight:bold;
    color:rgba(63,63,179,1);
  }
  .register-welcome{
    font-size:1em;
    color:rgba(63,63,179,1);
  }
  .register-1st-row{
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width:100%;
    @media only screen and (max-width: 790px) {
      flex-direction:column;
      padding:0;
  }
  }
  .register-2nd-row{
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    width:100%;

  }
  .register-3rd-row{
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    width:100%;
    height:10vh;
    margin-top:5%;
  }
  .st-register-column{
    display:flex;
    flex-direction:column;
    width:100%;
    padding-right:2%;
    @media only screen and (max-width: 790px) {
      padding:0;
  }
  }
  .nd-register-column{
    display:flex;
    flex-direction:column;
    width:100%;
    padding-left:2%;
    @media only screen and (max-width: 790px) {
      padding:0;
    }
  }
  .register-input{
    width:100%;
    height:8vh;
    border-radius:5px;
    margin-bottom:5%;
    padding:0 4%;
    border:none;
    font-size:0.5em;
  }
  .register-radio{
    font-size:0.5em;
    margin-right:5%;
    margin-top:5%;
  }
  .register-button{
    width:20%;
    height:70%;
    background:rgba(63,63,179,1);
    border-radius:5px;
    border:none;
    color:white;
    font-weight:600;
    font-size:0.5em;
    @media only screen and (max-width: 550px) {
      width:24%;
  }
  }
  .home-button{
    width:16%;
    height:70%;
    background:#999;
    border-radius:5px;
    border:none;
    color:white;
    font-weight:600;
    font-size:0.5em;
    margin-right:2%;
    @media only screen and (max-width: 550px) {
      width:26%;
  }
  }
`;


function Register() {
    return (
       <React.Fragment>
         <Styles>
           <div className='register-card'>
           <p className='join-us'>Join Us Now</p>
           <p className='register-welcome'>Welcome to our community</p>
           <div className='register-1st-row'>
             <div className='st-register-column'>
             <input name='first-name' type='text' placeholder='Your First Name *' className='register-input'/>
             <input name='email' type='email' placeholder='Your email' className='register-input'/>
             <input name='password' type='password' placeholder='Your password' className='register-input'/>
             </div>
             <div className='nd-register-column'>
             <input name='last-name' type='text' placeholder='Your Last Name *' className='register-input'/>
             <input name='phone' type='text' placeholder='Your Phone Number' className='register-input'/>
             <input name='confirm-password' type='password' placeholder='Confirm password' className='register-input'/>
             </div>
           </div>
           <input name='address' type='text' placeholder='Your Address' className='register-input'/>
           <Datepickers/>
           <div className='register-2nd-row'>
              <Form.Check
                        className='register-radio'
                        type="radio"
                        label="Author only"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
              <Form.Check
                        className='register-radio'
                        type="radio"
                        label="Author and reviewer"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
           </div>
           <div className='register-3rd-row'>
              <button className='home-button'>Go home</button>
              <button className='register-button'>Register</button>
           </div>
           </div>
         </Styles>
       </React.Fragment>
    );
  }
  
  export default Register;


  /**
   * .register-rows-header{
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
   */