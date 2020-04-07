//libraries
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Button, InputGroup, FormControl, Container, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';


//Components
import HomeAnimation from './Components/HomeAnimation';
import Fields from './Components/Fields'
import Tabulation from './Components/Tabulation';


//images
import background_1 from './assets/background5.png'
import background from './assets/background6.png'
import editor from './assets/editor.jpg'
import logo from './assets/medical bio-08.png'


//Styled components
const Styles = styled.div`
    .jumbotron{
      transition : 0.4s;
      border-radius : 0;
      height : 400px;
      background: linear-gradient(0deg, rgba(63,63,179,1) 0%, rgba(14,14,99,1) 55%, rgba(2,0,36,1) 100%);  
      align-items:center;
      transition:0.4s;
    }
     
    #landing_div{
        width: 60%;
        margin: 20px auto;
        padding: 20px;
        
    }

    #landing_text_1{
        color: white;
        font-weight: bolder;
        text-align : center;
        padding : 5px;
    }
    #landing_text_2{
        color: white;
        font-weight: bolder;
        text-align : center;
        margin-top : 15px;
    }
    
    #suggested{
        color : white;
        opacity: 0.5;
        text-align:center;
        font-size:12px;
        padding:10px;
    }

    .input-group {
        padding : 15px;
        margin : auto;
        width:60% !important;
        height:60% !important;
       
    }

    .btn-outline-secondary{
        background: rgba(240, 85, 18, 0.83);
        color:white;
        z-index: 0;
        font-weight: bold;
        &:hover{
            background-color : #4d8abc;
        }
    }
    .submit-article-section{
        background-image:url(${background});
        min-height:400px;

        position:relative;
        background-position:center;
        background-attachment:fixed;
    }
    .submit-text{
        position:absolute;
        top:30%;
        width:100%;
        color:white;
        text-shadow: 10px black;
        text-align:center;
        font-size:40px;
        font-weight:bolder;
    }
    .submit-button{
        background: rgba(240, 85, 18, 0.83);
        color:white;
        width:300px;
        height:50px;
        border:none;
        border-radius:5px;
        font-size:25px;
        font-weight:900;
        &:hover{
            color:rgba(63,63,179,1);
            text-decoration:none;
            
        }
    }
    .big_title1{
        color: rgba(63,63,179,1);
        font-weight:700;
        margin-top :20px;
        padding: 20px;
        text-align:center;

        &:after{
            content:"";
             background: rgba(63,63,179,1);
             display:block;
             height:3px;
             width:170px;
             margin: 5px auto 20px; 
             
        }
    }
    .about{
        text-align:Left;
        font-size:18px;
        padding: 10px;
    }

    .fields_text{
        padding :10px;
        font-size:20px;
    }
    
    .about-section{
        background-image:url(${background_1});
        position:relative;
        background-attachment:scroll;
    }

    .cercle{
        position:relative;
        top:50px;
        left:90px;
    }
`;

//Home page 
function Home() {

    //collapse abstract
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
          <Styles>
            <Jumbotron fluid>
                <HomeAnimation/>
                <div className='container-fluid' id='landing_div'>
                    <h2 id='landing_text_1'>Discover Medical Knowledge And stay </h2>
                    <h2 id='landing_text_2'> connected to The World of Biology. </h2>
                    <InputGroup>
                        <FormControl
                          placeholder="Search for articles..."
                          aria-label="search"
                          aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                           <Button classeName='search-button' variant="outline-secondary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                   <p id='suggested'>Suggested : Title of articles, Author's name, subject, field... </p>
                </div>  
            </Jumbotron>
            <Tabulation/>
            <div className='submit-article-section'>
                <div className="submit-text">
                    Join our community and <br/>share your knowledge.<br/> 
                    <Button className='submit-button'>Submit an article</Button>
                </div>
            </div>
            <section className='about-section'>
            <section >
                <Container>
                    <Row style={{ paddingTop:'100px'}}>
                        <Col >
                            <h3 className='big_title1'>A bout Our Journal</h3>
                            <p className='about'>
                                Medical and Biology Journal is a peer-reviewed, open access, current periodical journal belonging 
                                to the Department of Family Medicine of Yıldırım Beyazıt University, Faculty of Medicine.<br/>
                                All article evaluation and publishing processes are completely afree of charge. 
                                Our journal is published four times annually and is listed in DOAJ, DRJI, EBSCOhost, Google Scholar, 
                                HINARI, Index Copernicus, J-Gate, Journal Index, Journal TOCs, SHERPA/RoMEO.<br/>
                                Our Journal covers the following fields :<br/>
                            </p>
                            <Link 
                                className='article-links'
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                                style={{ marginTop:'20px', paddingLeft:'10px'}}
                                > 
                                Read more
                            </Link>
                        </Col> 
                        <Col>
                            <div className='cercle'>
                            <svg width="446" height="418" viewBox="0 0 446 418" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="346" cy="100" r="100" fill="#E87C19" fill-opacity="0.1"/>
                                <circle cx="50" cy="346" r="50" fill="#E87C19" fill-opacity="0.2"/>
                                <circle cx="200" cy="218" r="200" fill="#B4EBFA" fill-opacity="0.2"/>
                            </svg>
                                <img style={{ height: '350px', width:'550px', position:'absolute',left:'-70px',top:'40px'  }} src={logo}/>
                            </div>
                        </Col>
                    </Row>     
                </Container>
            </section>
            <section>    
                <Container>
                    <Row style={{ paddingTop:'100px', paddingBottom:'100px'}}>
                        <Col>
                          <img style={{  boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)', height: '20rem', width:'30rem', marginTop:'50px' }} src={editor}/>
                        </Col>
                        <Col>
                            <h3 className='big_title1'>Editor-in-chief</h3>
                            <h3>Professor YAFOUR Nabil, EHU, Algeria</h3>
                            <p>Dr. Yafour's research has centred on screening, early detection and treatment of oral cancer
                                . His aspiration for high quality research for cancer can be seen from his love of science 
                                and dedication to producing research in the specialty. Apart from being Editor-in-Chief 
                                of MBJ, he has published a total of 330 publications in his area of expertise.<br/>
                            </p>
                            <Link 
                                className='article-links'
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                                > 
                                Read more
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            </section> 
          </Styles>
      </React.Fragment>
    );
  }
  
  export default Home;

  /**#3f3fb3 
   * 
  */