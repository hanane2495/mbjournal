import React from "react";
import { Link } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import styled from 'styled-components';
import reactstrap from 'react-bootstrap';

//icons 
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";


const Styles = styled.div`
   .font-small{
     background: rgba(63,63,179,1);
     color:white;
   }
   .footer-copyright{
     color : white;
     border-top : solid;
     margin-top: 10px;
   }
   .title{
     margin-left:10px;
     font-size: 28px;
     font-weight:bolder;
   }
   .subtitle{
    margin-left:20px;
    padding-left:15px;
     font-size: 24px;
     font-weight:bold;
   }
   .list-unstyled, a {
     color:white;
     font-size:18px;
     text-decoration:none;
     padding-top:20px;

     &:hover{
       color:#cd4339;
     }
   }
   .Style-icon{
      width:30px;
      height:30px;
      margin: 10px;
      &:hover{
        color:#cd4339;
      }
   }
   .description{
     margin:10px;
     padding:10px 0 10px 0;
   }

   .contact-input{
     background: rgba(63,63,179,1);
     color:white;
     border:none;
     padding : 20px;
     margin-bottom :10px;
     border-bottom: solid white;
     width: 300px;
   }
   .bouton-contact{
     background:#4d8abc;
     color:whitesmoke;
     border:none;
     font-weight:bold;
     margin-left: 20px;
     width:100px;
     height:40px;
     border-radius:5px;
     &:hover{
       color:#cd4339;
     }
   }
`;


const FooterPage = () => {
  return (
    <Styles>
    <MDBFooter color="blue" className="font-small pt-4 ">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4" style={{ padding:' 0 0 0 80px'}}>
            <h5 className="title">Medical & Biology Journal</h5>
            <p className='description'>
              Exercitation culpa nostrud est velit qui culpa. 
              Lorem cupidatat velit magna aliquip elit aliquip.  
            </p>
            <p><FaPhone style={{ height: '20px', width:'20px', margin:' 0 10px 0 10px'}}/> 043 79 04 05</p>
            <p><MdMail style={{ height: '20px', width:'20px', margin:' 0 10px 0 10px'}}/> Yafour.nabil@yahoo.fr</p>

            <FaFacebookF className='Style-icon'/>
            <FaInstagram className='Style-icon' />
            <FaLinkedin className='Style-icon'/>
            <FaTwitter className='Style-icon'/>
            
          </MDBCol>
          <MDBCol md="4" style={{ padding:' 0 50px 0 50px'}}>
            <h5 className="subtitle">Quick Links</h5>
            <ul>
              <li className="list-unstyled">
                 <Link to="#">Medical and Biology Journal</Link>
              </li>
              <li className="list-unstyled">
              <Link to="#">Submit an article</Link>
              </li>
              <li className="list-unstyled">
              <Link to="#">Author Guideline</Link>
              </li>
              <li className="list-unstyled">
              <Link to="#">Login</Link>
              </li>
              <li className="list-unstyled">
              <Link to="#">Register</Link>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="subtitle">Contact Us</h5>
            <form style={{display:'block', paddingLeft:'20px', marginTop:'10px'}} >
                <input type='email' name='email' placeholder='Your email' className='text-input contact-input'/>
                <textarea style={{ height:'120px' }} name='message' placeholder='Your message...' className='text-input contact-input'/>
            </form>
            <button type='submit' className='bouton-contact'><IoIosSend/> send</button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.monsterstudio.org/"> Monster studio </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </Styles>
  );
}

export default FooterPage;