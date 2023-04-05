import React, { useEffect } from "react";
import classes from "./trades.module.css";
import { useState, useRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Accordion from "./Accordion";
import Accordion_2 from "./Accordion_2";
import Claim_card from "./Claim_card";
import Form from 'react-bootstrap/Form';
import {FiClipboard,FiChevronDown} from "react-icons/fi";


function Trades() {
  // Accordion function
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  // button

  const [amount, setAmount] = useState("");

  
  const [text1, setText1] = useState('Copy Trade API Key');


  const handleSubmit = (e) => {
    e.preventDefault();
    setText1('LustyWhale'+ amount + '3xLev'+'80%'+ '30');
  };


  return (
    <section>
      <div className={classes.trades}>
        <h1>
          Manage and build your crypto stack.<br></br>
          Invest smarter.
        </h1>
        <h3> Choose your plan to get started</h3>

        <Container className={classes.container}>
          <Row className={classes.row}>
            <Col className={classes.col_2}>
              <div className={classes.card_3}>
                <h1>BTQ Free</h1>

                <div className={classes.roi}>
                  <h2> +40% </h2>

                  <div>
                    <p>Average ROI over a months period</p>
                  </div>
                </div>

                <div className={classes.list_4}>
                  <ul>
                    <li>
                      <p>All our standard features </p>
                      <div className={classes.span}>Coming soon</div>
                    </li>
                    <li>
                      <p>2 Active Trading Bots </p> <span>Coming soon</span>
                    </li>
                    <li>
                      <p>Applies 1X leverage </p> <span>Coming soon</span>
                    </li>
                    <li>
                      <p>$25,000 monthly limit </p>
                    </li>
                    <li>
                      <p>Recommended margin: $5,000 </p>
                    </li>

                    <Accordion />
                  </ul>
                </div>
              </div>
            </Col>

            <Col className={classes.col_2}>
              <div className={classes.card_3}>
                <h1>BTQ Lite</h1>

                <div className={classes.roi}>
                  <h2> +55% </h2>

                  <div>
                    <p>Average ROI over a months period</p>
                  </div>
                </div>

                <div className={classes.list_4}>
                  <ul>
                    <li>
                      <p>All our standard features </p>
                      <div className={classes.span}>Coming soon</div>
                    </li>
                    <li>
                      <p>3 Active Trading Bots </p> <span>Coming soon</span>
                    </li>
                    <li>
                      <p>Applies 2.5X leverage </p> <span>Coming soon</span>
                    </li>
                    <li>
                      <p>$40,000 monthly limit </p>
                    </li>
                    <li>
                      <p>Recommended margin: $15,000 </p>
                    </li>

                    <Accordion />
                  </ul>
                </div>
              </div>
            </Col>

            <Col className={classes.col_2}>
              <div className={classes.card_3}>
                <h1>BTQ Pro</h1>

                <div className={classes.roi}>
                  <h2> +80% </h2>

                  <div>
                    <p>Average ROI over a months period</p>
                  </div>
                </div>

                <div className={classes.list_4}>
                  <ul>
                    <li>
                      <p>All our standard features+ </p>
                      <div className={classes.span}>Coming soon</div>
                    </li>
                    <li>
                      <p>5 Active Trading Bots </p> <span>Coming soon</span>
                    </li>
                    <li>
                      <p>Applies 3X leverage </p> <span>Coming soon</span>
                    </li>
                    <li>
                      <p>$100,000 monthly limit </p>
                    </li>
                    <li>
                      <p>Recommended margin: $30,000 </p>
                    </li>

                    <div className={classes.place_trade}>
                      <button
                        onClick={toggleState}
                        className={classes.accordion_visible}
                      >
                        Place Trade
                        <FiChevronDown className={toggle && `${classes.active}`} />
                      </button>

                      <div
                        className={
                          toggle
                            ? `${classes.accordion_toggle}${classes.animated}`
                            : `${classes.accordion_toggle}`
                        }
                        style={{ height: toggle ? `${heightEl}` : "0px" }}
                        ref={refHeight}
                      >
                        <form>
                          <label className={classes.label} htmlFor="amount">
                            Enter amount
                          </label>
                          <input
                            className={classes.input}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            name="amount"
                            id="amount"
                            placeholder=""
                          />
                          <div className={classes.css_fky}>
                            <div className={classes.clip}>
                              <Form.Control
                                className={classes.input}
                                type="number"
                                placeholder={text1}
                                aria-label="Disabled input example"
                                readOnly
                              />

                              <button
                                onClick={() => {
                                  navigator.clipboard.writeText(text1);
                                }}
                              >
                                <FiClipboard />
                              </button>
                            </div>
                          </div>

                          <button className={classes.button} type="btn" onClick={handleSubmit}>
                            Place Order
                          </button>
                        </form>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* <div >

            <button className={classes.modal_active}> Customise your Trades </button>
          </div> */}
        {/* 
        <Accordion_2 /> */}
        {/*         
        <Claim_card /> */}
      </div>
    </section>
  );
}

export default Trades;
