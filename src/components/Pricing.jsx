import React from 'react';
import { Button } from './Button';
import '../Css/Pricing.css';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Planes</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  
                </div>
                <h3>Humano Corriente</h3>
                <h4>$1</h4>
                <p>Pago unico </p>
                <ul className='pricing__container-features'>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  
                </div>
                <h3>Miembro Diamante</h3>
                <h4>$2</h4>
                <p>[Pago unico]</p>
                <ul className='pricing__container-features'>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    
  );
}
export default Pricing;
