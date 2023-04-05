import React, { useEffect } from 'react';
import classes from './trades.module.css';
import { useState, useRef } from 'react';
import { FiChevronDown } from "react-icons/fi";
import Form from 'react-bootstrap/Form';
import {FiClipboard} from "react-icons/fi";

function Accordion() {

  const [text1, setText1] = useState('Copy Trade API Key');


  const handleSubmit = (e) => {
    e.preventDefault();
    setText1('LustyWhale'+ amount + '3xLev'+'80%'+ '30');
  };




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
    
  


  return (
    <div className={classes.place_trade}>

                      <button onClick={toggleState} className={classes.accordion_visible}>Place Trade   
                      

                        <FiChevronDown className={toggle && `${classes.active}`} />
                       
                        </button>

                    <div className={toggle ? `${classes.accordion_toggle}${classes.animated}` : `${classes.accordion_toggle}`  } style={{height: toggle ? `${heightEl}` : '0px'}}ref={refHeight}> 
                    <form>
                    <label className={classes.label} htmlFor="amount">Enter amount</label>
                <input className={classes.input} value={amount} onChange={(e) => setAmount(e.target.value)} name="amount" id="amount" placeholder="" />
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
                  <button className={classes.button} onClick={handleSubmit} type='btn'>Place Order</button>
                    </form>

                    
                    
                    </div>


                  </div>
  )
}

export default Accordion
