import React from 'react';
import './Feature.css'

export default function Feature(props) {
    const uuidv1 = require('uuid/v1');
    const {featureObj, featureCategory } = props;
    return (
        <li key={ uuidv1() } className="feature__item">
            <div 
                className={props.featureClass}
                onClick={ e => props.updateFeatureSelection( featureCategory, featureObj )}>
                { props.featureName }
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(props.featureCost) })
            </div>
        </li>
    )
}
