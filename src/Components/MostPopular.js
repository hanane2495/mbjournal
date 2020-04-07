import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';





import {Col, Row} from 'react-bootstrap';


//icons 
import { FiDownload } from "react-icons/fi";

//images 
import virus from '../assets/virus.jpg'
import virus3 from '../assets/virus3.jpg'
import adn from '../assets/adn.jpg'
import virus2 from '../assets/virus2.jpg'



  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      boxShadow:'5px 10px 20px 1px rgba(0, 0, 0, 0.253)',
    },
  });
export default function MostPopular() {
  const classes = useStyles();

  return (
    <React.Fragment> 
        <Row style={{paddingTop:'80px', paddingBottom:'100px'}}>
            <Col>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="virus"
                        height="140"
                        image={virus}
                        title="virus"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Download pdf
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Col>
            <Col>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="virus2"
                        height="140"
                        image={virus2}
                        title="virus2"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Download PDF
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Col>
            <Col>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt=" adn"
                        height="140"
                        image={adn}
                        title=" adn"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Download PDF
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
               </Card>
            </Col>
        </Row>
    </React.Fragment> 
    
  );
}