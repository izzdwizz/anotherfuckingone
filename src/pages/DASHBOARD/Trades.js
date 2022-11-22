import React, { useEffect } from 'react';
import classes from './trades.module.css';
import { useState, useRef } from 'react';
import {Row, Col, Container} from 'react-bootstrap';

// import Chevron from './chevron.svg';
import Accordion from './Accordion';
import Modal from './Modal';
import Backdrop from './Backdrop';
import Grid_reformed from './Grid/Grid_reformed';

function Trades() {

  // Accordion function

  const [toggle, setToggle] = useState(false)
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef()

  useEffect(()=>{

      setHeightEl(`${refHeight.current.scrollHeight}px`)


  }, [])

  const toggleState = ()=>{

    setToggle(!toggle)
  }

  // button


  const [amount, setAmount] = useState('');
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(amount);
  }



  //Modal

  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  const [isOpen, setIsOpen]= useState(false)
  return (



    // Add discuss the bots
    // fixate on their performances and ROI in given periods
    // trading limit
    // suggested trade amounts
    // 

<section>
    <div className={classes.trades}>

            <h1>
            Manage and build your crypto stack.<br></br>
              Invest smarter.

            </h1>
            <h3>  Choose your plan to get started</h3>

        <Container className={classes.container}>
          <Row className={classes.row}>
          {/* <Col className={classes.col_2}>
        <div className={classes.card_3}>
          <h1>Bitsquant Advanced</h1>

          <div className={classes.roi}> 

            <h2> +300% </h2>

              <div>
                <p>Average ROI over a months period</p>
              </div>


          </div>

            <div className={classes.list_4}>

                <ul>
                  <li><p>All our standard features </p><div className={classes.span}>Coming soon</div></li>
                  <li><p>2 Active Trading Bots </p> <span>Coming soon</span></li>
                  <li><p>Applies 3X leverage </p> <span>Coming soon</span></li>
                  <li><p>$25,000 monthly limit </p></li>
                  <li><p>Recommended margin: $5,000 </p></li>

                  <Accordion className={classes.accord}/>
                  

                  </ul>

                 


            </div>
         
           

        </div>
        </Col> */}

        <Col className={classes.col_2}>
        <div className={classes.card_3}>
          <h1>Bitsquant Standard</h1>

          <div className={classes.roi}> 

            <h2> +40% </h2>

              <div>
                <p>Average ROI over a months period</p>
              </div>


          </div>

            <div className={classes.list_4}>

                <ul>
                  <li><p>All our standard features </p><div className={classes.span}>Coming soon</div></li>
                  <li><p>2 Active Trading Bots </p> <span>Coming soon</span></li>
                  <li><p>Applies 1X leverage </p> <span>Coming soon</span></li>
                  <li><p>$25,000 monthly limit </p></li>
                  <li><p>Recommended margin: $5,000 </p></li>

                  <Accordion/>

                  </ul>

                 


            </div>
         
           

        </div>
        </Col>

        <Col className={classes.col_2}>
        <div className={classes.card_3}>
          <h1>Bitsquant Lite</h1>

          <div className={classes.roi}> 

            <h2> +55% </h2>

              <div>
                <p>Average ROI over a months period</p>
              </div>


          </div>

            <div className={classes.list_4}>

                <ul>
                  <li><p>All our standard features </p><div className={classes.span}>Coming soon</div></li>
                  <li><p>3 Active Trading Bots </p> <span>Coming soon</span></li>
                  <li><p>Applies 2.5X leverage </p> <span>Coming soon</span></li>
                  <li><p>$40,000 monthly limit </p></li>
                  <li><p>Recommended margin: $15,000 </p></li>

                  <Accordion/>

                  </ul>

                 


            </div>
         
           

        </div>
        </Col>



        <Col className={classes.col_2}>
        <div className={classes.card_3}>
          <h1>Bitsquant Advanced</h1>

          <div className={classes.roi}> 

            <h2> +80% </h2>

              <div>
                <p>Average ROI over a months period</p>
              </div>


          </div>

            <div className={classes.list_4}>

                <ul>
                  <li><p>All our standard features+ </p><div className={classes.span}>Coming soon</div></li>
                  <li><p>5 Active Trading Bots </p> <span>Coming soon</span></li>
                  <li><p>Applies 3X leverage </p> <span>Coming soon</span></li>
                  <li><p>$100,000 monthly limit </p></li>
                  <li><p>Recommended margin: $30,000 </p></li>

                   <div className={classes.place_trade}>

                      <button onClick={toggleState} className={classes.accordion_visible}>Place Trade   
                      
                       
                        
                        </button>

                    <div className={toggle ? `${classes.accordion_toggle}${classes.animated}` : `${classes.accordion_toggle}`  } style={{height: toggle ? `${heightEl}` : '0px'}}ref={refHeight}> 
                    <form>
                    <label className={classes.label} htmlFor="amount">Enter amount</label>
                <input className={classes.input} value={amount} onChange={(e) => setAmount(e.target.value)} name="amount" id="amount" placeholder="" />

                  <button className={classes.button} type='submit'>Place Order</button>
                    </form>

                    
                    
                    </div>


                  </div>

                  </ul>

                 


            </div>
         
           

        </div>
        </Col>
        
        </Row>
        </Container>
        <Row>
          <div >

            <button className={classes.modal_active}  onClick={showModalHandler}> Customise your Trades </button>

            {showModal && <Backdrop onClick={closeModalHandler} />}

            {showModal && <Modal onClose={closeModalHandler}/>}
          </div>

        </Row>
    </div>
    </section>

    


  )
}

export default Trades;
