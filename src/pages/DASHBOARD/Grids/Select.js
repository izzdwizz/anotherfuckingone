import React, { useState} from 'react';
import classes from './Grid.module.css';
import {Row} from "react-bootstrap";


function Select() {

    
const [Preference, setPreference] = useState('');
const [leverage, setLeverage] = useState('');
const Cross = "Cross";
const Isolated = "Isolated";

  return (

    
<Row className={classes.css_pref2}>
              <div className={classes.css_pref}> 
                
                <select  className={classes.select} value={Preference} onChange={(e) => setPreference(e.target.value)}>
            <option  value="bnb" className="option">Cross</option>
            <option  value="btc" className="option">Isolated</option>
            
        </select>
        
        </div>

        <div>
              <select  className={classes.select} value={leverage} onChange={(e) => setLeverage(e.target.value)}>
            <option  value="10X" className="option">10X</option>
            <option  value="20X" className="option">20X</option>
            <option  value="30X" className="option">30X</option>
            <option  value="40X" className="option">40X</option>
            <option  value="50X" className="option">50X</option>
            
            
        </select>

        </div>

                
              </Row>

   
  )
}

export default Select