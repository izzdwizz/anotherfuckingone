import React from 'react';
import classed from './wallet.module.css';
import { useState, useRef } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {FiClipboard} from "react-icons/fi";

function Wallet() {

  

  // button


  const [amount, setAmount] = useState('');
  const [amount_2, setAmount_2] = useState('');
  const [password, setPassword] = useState('');
  const [password_2, setPassword_2] = useState('');
  const text1 = "16dFcd4migQWoP4vwykApVg5EsCGYNd5G1";
  const text2 = "16dFcd4migQWoP4vwykApVg5EsCGYNd5G4";
  const text3 = "16dFcd4migQWoP4vwykApVg5EsCGYNd5G3";
  const text4 = "16dFcd4migQWoP4vwykApVg5EsCGYNd5G2";
  const text5 = "16dFcd4migQWoP4vwykApVg5EsCGYNd5G9";


       
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(amount);
  }





  return (



    // Add discuss the bots
    // fixate on their performances and ROI in given periods
    // trading limit
    // suggested trade amounts
    // 

<section>
    <div className={classed.wallet}>

        

        <Container className={classed.container}>
          <Row className={classed.row}>

          <Col className={classed.col_2}>
        <div className={classed.card_3}>
        <div className={classed.header}> 

<h1>Deposit</h1>


</div>
        <form className={classed.formfield_1}>
                    <label className={classed.label} htmlFor="amount">Enter deposit amount</label>
                <input className={classed.input} value={amount} onChange={(e) => setAmount(e.target.value)} name="amount" id="amount" placeholder="" />
                <label className={classed.label} htmlFor="password">Confirm Password</label>
                <input className={classed.input} value={password_2} onChange={(e) => setPassword_2(e.target.value)} type='password' name="password" id="password" placeholder="" />

                  <button className={classed.button} type='submit'>Place Order</button>
                    </form>
         

           
           

        </div>
        </Col>

        
        <Col className={classed.col_2}>
        <div className={classed.card_3}>
        <div className={classed.header}> 

<h1>Withdrawal</h1>


</div>
        <form className={classed.formfield_1}>
                    <label className={classed.label} htmlFor="amount">Enter withdrawal amount</label>
                <input className={classed.input} value={amount_2} onChange={(e) => setAmount_2(e.target.value)} name="amount" id="amount" placeholder="" />

                <label className={classed.label} htmlFor="password">Confirm Password</label>
                <input className={classed.input} value={password} onChange={(e) => setPassword(e.target.value)} type='password' name="password" id="password" placeholder="" />

                  <button className={classed.button} type='submit'>Place Order</button>
                    </form>
         

           
           

        </div>
        </Col>

  

        <Col className={classed.col_2}>
        <div className={classed.card_3}>
          <div className={classed.header}> 

          <h1>Wallet Addresses</h1>
          
          
          </div>
          <Form.Group controlId="formFileDisabled" className={classed.formfield}>
        <Form.Label className={classed.label}>Bitcoin Wallet Address</Form.Label>
        <div className={classed.clip}>
        <Form.Control
        className={classed.input}
        type="text"
        placeholder="16dFcd4migQWoP4vwykApVg5EsCGYNd5G1"
        aria-label="Disabled input example"
        readOnly
      />

    <button onClick={() => {
         navigator.clipboard.writeText(text1);}}>

    <FiClipboard/>
    
    </button>
    </div>

    <Form.Label className={classed.label}>Ethereum Wallet Address</Form.Label>
        <div className={classed.clip}>
        <Form.Control className={classed.input}
        type="text"
        placeholder="16dFcd4migQWoP4vwykApVg5EsCGYNd5G1"
        aria-label="Disabled input example"
        readOnly
      />

    <button onClick={() => {
         navigator.clipboard.writeText(text2);}}>

    <FiClipboard/>
    
    </button>
    </div>

    <Form.Label className={classed.label}>USDT Wallet Address</Form.Label>
        <div className={classed.clip}>
        <Form.Control className={classed.input}
        type="text"
        placeholder="16dFcd4migQWoP4vwykApVg5EsCGYNd5G1"
        aria-label="Disabled input example"
        readOnly
      />

    <button onClick={() => {
         navigator.clipboard.writeText(text5);}}>

    <FiClipboard/>
    
    </button>
    </div>

    <Form.Label className={classed.label}>Ripple Wallet Address</Form.Label>
        <div className={classed.clip}>
        <Form.Control className={classed.input}
        type="text"
        placeholder="16dFcd4migQWoP4vwykApVg5EsCGYNd5G1"
        aria-label="Disabled input example"
        readOnly
      />

    <button onClick={() => {
         navigator.clipboard.writeText(text3);}}>

    <FiClipboard/>
    
    </button>
    </div>
    <Form.Label className={classed.label}>BNB Wallet Address</Form.Label>
        <div className={classed.clip}>
        <Form.Control className={classed.input}
        type="text"
        placeholder="16dFcd4migQWoP4vwykApVg5EsCGYNd5G1"
        aria-label="Disabled input example"
        readOnly
      />

    <button onClick={() => {
         navigator.clipboard.writeText(text4);}}>

    <FiClipboard/>
    
    </button>
    </div>
      
      </Form.Group>
      
         

          

        </div>
        </Col>



      
        </Row>
        </Container>
       
    </div>
    </section>

    


  )
}

export default Wallet;


