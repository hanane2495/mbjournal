import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Tab, Tabs, Card, Container, Collapse, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';

//components
import MostPopular from './MostPopular'
import Archive from './Archive';


const Styles = styled.div`
    nav.nav-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    }
    a{
        font-weight: bold;
        font-size:1.2em;
        color: rgba(63,63,179,1);
        &:hover{
            color:rgba(240, 85, 18, 0.83);
        }
        @media only screen and (max-width: 790px) {
           font-size:1rem
        }
        @media only screen and (max-width: 490px) {
           font-size:0.8rem
        }
        @media only screen and (max-width: 330px) {
           font-size:0.5rem
        }

    }
    .latest-articles-card{
        width: 100%;
        margin:3% 0;
        box-shadow:5px 10px 20px 1px rgba(0, 0, 0, 0.253);
        overflow:hidden;
    }
    .card-title{
        color:rgba(240, 85, 18, 0.83);
        @media only screen and (max-width: 790px) {
           font-size:1.3rem
        }
        @media only screen and (max-width: 490px) {
           font-size:1rem
        }
        @media only screen and (max-width: 320px) {
           font-size:0.8rem
        }
    }
    .card-subtitle{
        @media only screen and (max-width: 790px) {
           font-size:1rem
        }
        @media only screen and (max-width: 490px) {
           font-size:0.8rem
        }
        @media only screen and (max-width: 320px) {
           font-size:0.6rem
        }
    }
    .article-links{
        font-size:1rem;
        color:rgba(63,63,179,1);
        @media only screen and (max-width: 370px) {
           font-size:0.7rem
        }
        @media only screen and (max-width: 490px) {
           font-size:0.8rem
        }
        @media only screen and (max-width: 320px) {
           font-size:0.6rem
        }
        &:hover{
            color:rgba(240, 85, 18, 0.83);
            background:#fff;
            text-decoration:none;
            padding-top:4px;
            padding-bottom:4px;
        }
    }
    .see-more{
        display:flex;
         justify-content: center;
         align-items: center;
         font-size:1rem;
         padding: 10px 0 20px 0;
         &:hover{
            color:rgba(240, 85, 18, 0.83);
            background:#fff;
            text-decoration:none;
            
        }
    }
    
`;

function Tabulation() {

    //collapse abstract
    const [open, setOpen] = useState(false);
  return(
    <React.Fragment> 
          <Styles>
              <Container>
                  <Tabs defaultActiveKey="Latest articles" id="uncontrolled-tab-example">
                        <Tab eventKey="Latest articles" title="Latest articles">
                            <Container>
                                <Card className='latest-articles-card'>
                                    <Card.Body>
                                        <Card.Title>A pooled analysis of risk factors of surgically treated leiomyosarcoma of the colon in adults</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Yun Wang, Hao Wang, Zhi-Lu Yuan, Jing-Fei Zhao, Dian-Bo Dong and Qian Gao</Card.Subtitle>
                                        <Card.Text>
                                            Research | 28 March 2020
                                        </Card.Text>
                                        <Collapse in={open}>
                                            <div id="example-collapse-text">
                                            <h5>Abstarct</h5>    
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </Collapse>
                                        <Card.Link
                                            className='article-links'
                                            onClick={() => setOpen(!open)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={open}
                                            >
                                            view abstract
                                        </Card.Link>
                                        <Card.Link >
                                            <Link className='article-links' to="#">Download PDF</Link>
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                                <Card className='latest-articles-card'>
                                    <Card.Body>
                                        <Card.Title>A pooled analysis of risk factors of surgically treated leiomyosarcoma of the colon in adults</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Yun Wang, Hao Wang, Zhi-Lu Yuan, Jing-Fei Zhao, Dian-Bo Dong and Qian Gao</Card.Subtitle>
                                        <Card.Text>
                                        Research | 28 March 2020
                                        </Card.Text>
                                        <Collapse in={open}>
                                            <div id="example-collapse-text">
                                            <h5>Abstarct</h5>    
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </Collapse>
                                        <Card.Link
                                            className='article-links'
                                            onClick={() => setOpen(!open)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={open}
                                            >
                                            view abstract
                                        </Card.Link>
                                        <Card.Link >
                                            <Link className='article-links' to="#">Download PDF</Link>
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                                <Card className='latest-articles-card'>
                                    <Card.Body>
                                        <Card.Title>A pooled analysis of risk factors of surgically treated leiomyosarcoma of the colon in adults</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Yun Wang, Hao Wang, Zhi-Lu Yuan, Jing-Fei Zhao, Dian-Bo Dong and Qian Gao</Card.Subtitle>
                                        <Card.Text>
                                        Research | 28 March 2020
                                        </Card.Text>
                                        <Collapse in={open}>
                                            <div id="example-collapse-text">
                                            <h5>Abstarct</h5>    
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </Collapse>
                                        <Card.Link
                                            className='article-links'
                                            onClick={() => setOpen(!open)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={open}
                                            >
                                            view abstract
                                        </Card.Link>
                                        <Card.Link >
                                            <Link className='article-links' to="#">Download PDF</Link>
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                                <Collapse in={open}>
                                    <div id="example-collapse-text">
                                    <Card className='latest-articles-card'>
                                        <Card.Body>
                                            <Card.Title>A pooled analysis of risk factors of surgically treated leiomyosarcoma of the colon in adults</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Yun Wang, Hao Wang, Zhi-Lu Yuan, Jing-Fei Zhao, Dian-Bo Dong and Qian Gao</Card.Subtitle>
                                            <Card.Text>
                                            Research | 28 March 2020
                                            </Card.Text>
                                            <Collapse in={open}>
                                                <div id="example-collapse-text">
                                                <h5>Abstarct</h5>    
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                                labore wes anderson cred nesciunt sapiente ea proident.
                                                </div>
                                            </Collapse>
                                            <Card.Link
                                                className='article-links'
                                                onClick={() => setOpen(!open)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open}
                                                >
                                                view abstract
                                            </Card.Link>
                                            <Card.Link >
                                                <Link className='article-links' to="#">Download PDF</Link>
                                            </Card.Link>
                                        </Card.Body>
                                    </Card>

                                    <Card className='latest-articles-card'>
                                        <Card.Body>
                                            <Card.Title>A pooled analysis of risk factors of surgically treated leiomyosarcoma of the colon in adults</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Yun Wang, Hao Wang, Zhi-Lu Yuan, Jing-Fei Zhao, Dian-Bo Dong and Qian Gao</Card.Subtitle>
                                            <Card.Text>
                                                Research | 28 March 2020
                                            </Card.Text>
                                            <Collapse in={open}>
                                                <div id="example-collapse-text">
                                                <h5>Abstarct</h5>    
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                                labore wes anderson cred nesciunt sapiente ea proident.
                                                </div>
                                            </Collapse>
                                            <Card.Link
                                                className='article-links'
                                                onClick={() => setOpen(!open)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open}
                                                >
                                                view abstract
                                            </Card.Link>
                                            <Card.Link >
                                                <Link className='article-links' to="#">Download PDF</Link>
                                            </Card.Link>
                                        </Card.Body>
                                    </Card>
                                    </div>
                                </Collapse>
                                <Link 
                                    className='see-more'
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}
                                    > 
                                    see more
                                </Link>
                          </Container>
                        </Tab>
                        <Tab eventKey="Most popular" title="Most popular">
                             <MostPopular/>
                        </Tab>
                        <Tab eventKey="Archive" title="Archive" >
                             <Archive/> 
                        </Tab>
                 </Tabs>
             </Container>
          </Styles>
    </React.Fragment>      
 )
}
export default Tabulation;