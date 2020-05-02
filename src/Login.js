import React from 'react';
import styled from 'styled-components';

//images
import background_1 from './assets/background5.png'
import { Link } from 'react-router-dom';

const Styles = styled.div`
  background-image:url(${background_1});
  display:flex;
  flex-direction:row;
  padding: 8% 20%;
  font-size:36px;
  @media only screen and (max-width: 790px) {
    flex-direction:column;
    font-size:28px;
    padding:0;
  }
  @media only screen and (max-width: 320px) {
    font-size:24px;
  }
  .login-column-left{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:50%;
    height:65vh;
    padding:0 3%;
    background:rgba(63,63,179,0.7);
    color:white;
    border-radius:15px 0 0 15px;
    box-shadow:5px 10px 20px 1px rgba(63,63,179, 0.553);
    @media only screen and (max-width: 790px) {
      width:100%;
      border-radius:0;
  }
  }
  .login-column-right{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:50%;
    height:65vh;
    padding-top:2%;
    background:#F2F0F0;
    color:#555;
    border-radius:0 15px 15px 0 ;
    box-shadow:5px 10px 20px 1px rgba(0,0,0, 0.253);
    @media only screen and (max-width: 790px) {
      width:100%;
      border-radius:0;
  }
  }
  .welcome{
    font-size:0.8em;
    font-weight:bold;
  }
  .welcome-text{
    font-size:0.5em;
    text-align:center;
  }
  .welcome-home{
    font-size:0.4em;
    font-weight:bold;
    color: white;
  }
  .login-title{
    font-size:0.8em;
    font-weight:bold;
    text-align:left;
    color: rgba(63,63,179,1);
    margin-bottom:8%;
    &:after{
            content:"";
             background: rgba(63,63,179,1);
             display:block;
             height:3px;
             width:100%;
             
        }
  }
  .login-input{
    width:80%;
    height:12%;
    border-radius:5px;
    margin-bottom:5%;
    padding:0 4%;
    border:none;
    font-size:0.5em;
  }
  .login-button{
    width:80%;
    height:10%;
    background:rgba(63,63,179,1);
    border-radius:5px;
    border:none;
    color:white;
    font-weight:600;
    margin-bottom:5%;
    font-size:0.5em;
  }
  .login-link{
    font-size:0.5em
  }
`;


function Login() {
    return (
      <React.Fragment>
        <Styles>
          <div className='login-column-left'>
            <p className='welcome'>Welcome again</p>
            <p className='welcome-text'>Medical and Biology Journal is a peer-reviewed, open access, 
               current periodical journal belonging 
               to the Department of Family Medicine 
            </p>
              <Link to='/' className='welcome-home'>go back to home page !</Link>
          </div>
          <div className='login-column-right'>
            <p className='login-title'>Login</p>
            <input name='email' type='email' placeholder='Your email' className='login-input'/>
            <input name='password' type='password' placeholder='Your password' className='login-input'/>
            <p className='login-link'>
              <Link to='#'>Forgot Password ?</Link>
            </p>
            <button className='login-button'>Login</button>
            <p className='login-link'>Don't have an account?
              <Link to='/Register'>Sign Up</Link>
            </p>
          </div>
        </Styles>
      </React.Fragment>
    );
  }
  
  export default Login;

  /**
   * <MDBCard style={{background:'#F2F0F0', boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}}>
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
              
   * 


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
   */