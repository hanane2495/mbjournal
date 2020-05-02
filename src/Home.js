//libraries
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Button, InputGroup, FormControl, Container, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';


//Components
import HomeAnimation from './Components/HomeAnimation';
import Fields from './Components/Fields'
import Tabulation from './Components/Tabulation';

//icons
import {FiSearch} from 'react-icons/fi'


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
      height : 65vh;
      background: linear-gradient(0deg, rgba(63,63,179,1) 0%, rgba(14,14,99,1) 55%, rgba(2,0,36,1) 100%);  
      font-size:36px;
      @media only screen and (max-width: 790px) {
           font-size:30px
        }
        @media only screen and (max-width: 590px) {
           font-size:22px
        }
        @media only screen and (max-width: 450px) {
           font-size:15px
        }
    }
     
    #suggested{
        color : white;
        opacity: 0.5;
        text-align:center;
        font-size:0.5em;
        padding:2vh;
    }
    .content{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding-top:8vh;
    }

    .input-group {
        width:45vw;
        height:9vh;
        @media only screen and (max-width: 790px) {
            width:59vw;
            height:8vh;
        }
        @media only screen and (max-width: 490px) {
            width:70vw;
            height:8vh;
        }
    }
    .form-control{
        height:100%;
    }
    .content-text{
        font-size:1em;
        font-weight:bolder;
        color:white;
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

        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

        font-size:36px;
        @media only screen and (max-width: 790px) {
           font-size:30px
        }
        @media only screen and (max-width: 490px) {
           font-size:28px
        }
        @media only screen and (max-width: 380px) {
           font-size:22px
        }
    }
    .submit-text{
        width:100%;
        color:white;
        font-size:1em;
        text-shadow: 10px black;
        text-align:center;
        font-weight:bolder;
    }
    .submit-button{
        background: rgba(240, 85, 18, 0.83);
        color:white;
        height:auto;
        width:30%;
        border:none;
        border-radius:5px;
        font-weight:900;
        font-size:0.8em;
        margin-top:1%;
        &:hover{
            color:rgba(63,63,179,1);
            text-decoration:none;
        }
        @media only screen and (max-width: 790px) {
           width:30%;
           margin-top:3%;
        }
        @media only screen and (max-width: 490px) {
           width:60%;
           margin-top:3%;
        }
        @media only screen and (max-width: 380px) {
           width:60%;
           margin-top:3%;
        }
    }
    
    
    .about-section{
        background-image:url(${background_1});
        position:relative;
        background-attachment:scroll;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:2% 5%;
        font-size:36px;
        @media only screen and (max-width: 790px) {
           font-size:30px;
           text-align:center;
        }
        @media only screen and (max-width: 320px) {
           font-size:28px;
           text-align:center;
        }
    }
    .big_title{
        color: rgba(63,63,179,1);
        font-weight:700;
        font-size:1em;
        text-align:center;
        &:after{
            content:"";
             background: rgba(63,63,179,1);
             display:block;
             height:3px;
             width:170px;
             margin: 5px auto 20px; 
             
        }
        @media only screen and (max-width: 790px) {
           margin:5% 0;
        }
        @media only screen and (max-width: 320px) {
            margin:5% 0;
        }
    }
    .section-row{
        display:flex;
        flex-direction:row;
        @media only screen and (max-width: 790px) {
            flex-direction:column;
        }
    }

    .section-column{
        display:flex;
        flex-direction:column;
        align-items:center;
        padding-top:2%;
    }
    .section-column-editor{
        display:flex;
        flex-direction:column;
        align-items:left;
        padding:1% 5%;
    }
    .editor-title{
       text-align:left; 
       font-size:0.7em;
       font-weight:bold;
       color:#777;
       @media only screen and (max-width: 790px) {
            text-align:center;
        }
        @media only screen and (max-width: 320px) {
            text-align:center;
        }
    }
    .editor-description{
        font-size:0.5em;
        @media only screen and (max-width: 790px) {
            text-align:center;
        }
        @media only screen and (max-width: 320px) {
            text-align:center;
        }
    }
    
    .about{
        text-align:Left;
        font-size:0.5em;
        @media only screen and (max-width: 790px) {
            text-align:center;
        }
        @media only screen and (max-width: 320px) {
            text-align:center;
        }
    }
    .logo{
        padding-bottom:7%;
        height: 45vh; 
        width:35vw;
        @media only screen and (max-width: 790px) {
            height: 40vh; 
            width:60vw;
        }
        @media only screen and (max-width: 320px) {
            height:40vh; 
            width:100vw;
        }
    }
`;

function useWindowSize() {
    const isClient = typeof window === 'object';
  
    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }
  
    const [windowSize, setWindowSize] = useState(getSize);
  
    useEffect(() => {
      if (!isClient) {
        return false;
      }
      
      function handleResize() {
        setWindowSize(getSize());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return windowSize;
  }


//Home page 
function Home() {

    //collapse abstract
    const [open, setOpen] = useState(false);
    //window size
    const size = useWindowSize();

    return (
        <React.Fragment>
          <Styles>
            <Jumbotron fluid>
                <HomeAnimation/>
                <div className='content'>
                    <p className='content-text'>Discover Medical Knowledge And stay </p>
                    <p className='content-text'> connected to The World of Biology. </p>
                    <InputGroup className='search-section'>
                        <FormControl
                          placeholder="Search for articles..."
                          aria-label="search"
                          aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                           <Button classeName='search-button' variant="outline-secondary">
                               { size.width< 790 ? <FiSearch/> : 'Search' }
                            </Button>
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
                    <h3 className='big_title'>A bout Our Journal</h3> 
                    <div className='section-row'>
                        <div className='section-column'>
                            <p className='about'>
                                Medical and Biology Journal is a peer-reviewed, open access, current periodical journal belonging 
                                to the Department of Family Medicine of Yıldırım Beyazıt University, Faculty of Medicine.<br/>
                                All article evaluation and publishing processes are completely afree of charge. 
                                Our journal is published four times annually and is listed in EBSCOhost, Google Scholar.
                                <br/>
                                Our Journal covers the following fields :<br/>
                            
                            <Link 
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                                style={{ marginTop:'2%'}}
                                > 
                                Read more
                            </Link>
                            </p>
                        </div>            
                        <div className='section-column'>
                             <img alt='Medical and biology journal' src={logo} className='logo'/>
                        </div>
                    </div>
                </section>
                <section className='about-section'>  
                    <h3 className='big_title'>Editor-in-chief</h3>
                    <div className='section-row'>
                        <div className='section-column-editor'>
                            <h3 className='editor-title'>Professor YAFOUR, EHU, Algeria</h3>
                            <p className='editor-description'>Dr. Yafour's research has centred on screening, early detection and treatment of oral cancer
                                . His aspiration for high quality research for cancer can be seen from his love of science 
                                and dedication to producing research in the specialty. Apart from being Editor-in-Chief 
                                of MBJ, he has published a total of 330 publications in his area of expertise.<br/>
                            
                            <Link 
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                                style={{ marginTop:'2%'}}
                                > 
                                Read more
                            </Link>
                            </p>
                        </div>  
                        <div className='section-column-editor'>
                            <h3 className='editor-title'>Professor Brahimi, EHU, Algeria</h3>
                            <p className='editor-description'>Dr. Yafour's research has centred on screening, early detection and treatment of oral cancer
                                . His aspiration for high quality research for cancer can be seen from his love of science 
                                and dedication to producing research in the specialty. Apart from being Editor-in-Chief 
                                of MBJ, he has published a total of 330 publications in his area of expertise.<br/>
                           
                            <Link 
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                                style={{ marginTop:'2%'}}
                                > 
                                Read more
                            </Link>
                            </p>
                        </div>
                    </div>
                </section>
          </Styles>
      </React.Fragment>
    );
  }
  
  export default Home;

  /**#3f3fb3 
   * 

   * 
  */