import React from 'react';
import CartSummary from '../CartSummary/CartSummary'
import './ShoppingCart.css';

export default function ShoppingCart( props ) {
    const { selectedFeatures } = props;
 
    const total = Object.keys( selectedFeatures )
        .reduce((acc, curr) => acc + selectedFeatures[ curr ].cost, 0); 
         
    return (
        <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            <CartSummary 
                selectedFeatures={ selectedFeatures }/>
            <div className="summary__total">
                <div className="summary__total__label">Your Price: </div>
                <div className="summary__total__value">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(total) }
                </div>
            </div>
        </section>
    );
}     