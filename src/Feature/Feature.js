import React from 'react';
// This function generates a single feature option and returns it. 
// It's the lowest child of the productcustomizer heirarchy and also of the ShoppingCart
// for shopping cart, it's ok that the click events do nothing... worth reusing the component.
export default function Feature(props) {
    const uuidv1 = require('uuid/v1');
    return (
        <li key={ uuidv1() } className="feature__item">
            <div 
                className={props.featureClass}
                onClick={ e => props.updateFeatureSelection(props.featureCategory, props.featureObj )}>
                { props.featureName }
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(props.featureCost) })
            </div>
        </li>
    )
}
