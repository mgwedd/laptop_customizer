import React from 'react';
import './CartSummary.css'

export default function CartSummary(props) {
    const { selectedFeatures } = props;
    const selectedFeatureCategories = Object.keys( selectedFeatures );
    return (
        selectedFeatureCategories
            .map((category, index) => {
                return (
                    <div className="summary__option" key={ index }>
                        <div className="summary__option__label">{ category }</div>
                        <div className="summary__option__value">{ selectedFeatures[ category ].name }</div>
                        <div className="summary__option__cost">
                        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                            .format(selectedFeatures[ category ].cost) }
                        </div>
                    </div>)
                })
    )
}
