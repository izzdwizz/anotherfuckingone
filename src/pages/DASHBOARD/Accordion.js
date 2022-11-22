import React, { useEffect } from 'react';
import classes from './trades.module.css';
import { useState, useRef } from 'react';

import { FiChevronDown } from "react-icons/fi";

function Accordion() {


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



  return (
    <div className={classes.place_trade}>

                      <button onClick={toggleState} className={classes.accordion_visible}>Place Trade   
                      

                        <FiChevronDown className={toggle && `${classes.active}`} />
                        {/* <img 
                        className={toggle && `${classes.active}`}
                        
                        src={Chevron}/> 
                         */}
                        </button>

                    <div className={toggle ? `${classes.accordion_toggle}${classes.animated}` : `${classes.accordion_toggle}`  } style={{height: toggle ? `${heightEl}` : '0px'}}ref={refHeight}> 
                    <form>
                    <label className={classes.label} htmlFor="amount">Enter amount</label>
                <input className={classes.input} value={amount} onChange={(e) => setAmount(e.target.value)} name="amount" id="amount" placeholder="" />

                  <button className={classes.button} type='submit'>Place Order</button>
                    </form>

                    
                    
                    </div>


                  </div>
  )
}

export default Accordion
