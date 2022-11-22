import React from 'react';
import classes from './Grid.module.css';
import {Container,Row, Col} from "react-bootstrap";
import {Link} from 'react';

function Grid() {
  return (

    
    <div className={classes.card}>

        <Container className={classes.css_container}>
            <Col className={classes.col} xs={6}>
            Manual
            
            </Col>

            <Col className={classes.col} xs={6}>
                Auto
            </Col>
       
        </Container>

                {/* Body of the form */}

                <Row>
                        <div className={classes.css_rec}>
                            Recommended parameters are automatically generated based on technical analysis of the symbol price
                        <a href="#" target="_blank" class={classes.css_det}> Details</a>
                        </div>


                </Row>

                    <Row className={classes.css_tp}>
                    <div data-bn-type="text" className={classes.css_18k}>Time period</div>

                        <div className={classes.css_ego2}>
                        <div data-bn-type="text" className={classes.css_ego}>7D</div>
                        <div data-bn-type="text" className={classes.css_ego}>30D</div>
                        <div data-bn-type="text" className={classes.css_ego}>180D</div>
                  </div>
                    
                    </Row>
                    <Container className={classes.css_formcont}>
                        <div className={classes.css_1y}>

                        <div className={classes.css_formcontainer}>

                                    <Row className={classes.css_rowcont}>
                                        <span className={classes.css_parname}>Lower Price </span>

                                        <span className={classes.css_parval}>51235.23</span>

                                        
                                    </Row>
                                        

                                    <Row className={classes.css_rowcont}>

                                    <span className={classes.css_parname}>Upper Price </span>

                                    <span className={classes.css_parval}>34123.53 </span>

                                    

                                    </Row>

                                    <Row className={classes.css_rowcont}>

                                    <span className={classes.css_parname}>Grid Number </span>

                                    <span className={classes.css_parval} id={classes.grid_span}>33 </span>


                                    </Row>


                                    <Row className={classes.css_r8}>
                        
                        <div className={classes.grid_profit_value_container}>
                        <div className={classes.css_75}>
                            <div className={classes.css_bas}>
                            <span>Profit/Grid (fees deducted)</span>
                            </div>
                            <div className={classes.grid_profit_value}> 0.53% - 0.75%</div>
                        </div>

                        
                        </div>
        
                    </Row>  

                                    </div>


                                   

                            
                        </div>
                        
                        
                    </Container>
                    
        
        



      
        </div>
       



      
 
  )
}

export default Grid;
