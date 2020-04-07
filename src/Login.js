import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import styled from 'styled-components';

//images
import background_1 from './assets/background5.png'

const Styles = styled.div`
  .form-simple .font-small {
      font-size: 0.8rem; 
    }

.form-simple .header {
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem; 
  }

.form-simple input[type=text]:focus:not([readonly]) {
    border-bottom: 1px solid rgba(63,63,179,1);
    -webkit-box-shadow: 0 1px 0 0 rgba(63,63,179,1);
    box-shadow: 0 1px 0 0 rgba(63,63,179,1); 
  }

.form-simple input[type=text]:focus:not([readonly]) + label {
    color: #4f4f4f; 
  }

.form-simple input[type=password]:focus:not([readonly]) {
    border-bottom: 1px solid rgba(63,63,179,1);
    -webkit-box-shadow: 0 1px 0 0 rgba(63,63,179,1);
    box-shadow: 0 1px 0 0 rgba(63,63,179,1); 
  }

.form-simple input[type=password]:focus:not([readonly]) + label {
    color: #4f4f4f;
  }
`;


function Login() {
    return (
      <React.Fragment>
        <Styles>
          <div style={
             {
               backgroundImage:`url(${background_1})`,
               padding:'100px 400px 100px 400px'
             }
          }> 
           
              
                <MDBCard style={{background:'#F2F0F0', boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}}>
                  <div className="header pt-3 grey lighten-2">
                    <MDBRow className="d-flex justify-content-start"
                            style={{color:'rgba(63,63,179,1)'}}
                    >
                      <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                        Log in
                      </h3>
                    </MDBRow>
                  </div>
                  <MDBCardBody className="mx-4 mt-4">
                    <p>Your email</p>
                    <MDBInput  group type="text" validate />
                    <p>Your password</p>
                    <MDBInput group type="password" validate containerClass="mb-0"
                    />
                    <p className="font-small grey-text d-flex justify-content-end">
                      Forgot
                      <a
                        href="#!"
                        className="dark-grey-text font-weight-bold ml-1"
                      >
                        Password?
                      </a>
                    </p>
                    <div className="text-center mb-4 mt-5">
                      <MDBBtn
                        type="button"
                        className="btn-block z-depth-2"
                        style={{background:'rgba(63,63,179,1)', color:'white'}}
                      >
                        Log in
                      </MDBBtn>
                    </div>
                    <p className="font-small grey-text d-flex justify-content-center">
                      Don't have an account?
                      <a
                        href="#!"
                        className="dark-grey-text font-weight-bold ml-1"
                      >
                        Sign up
                      </a>
                    </p>
                  </MDBCardBody>
                </MDBCard>
              
           
          </div>
        </Styles>
      </React.Fragment>
    );
  }
  
  export default Login;