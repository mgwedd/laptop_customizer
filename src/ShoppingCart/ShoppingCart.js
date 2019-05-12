import React from 'react';

export default function ShoppingCart( props ) {
    const { selectedFeatures } = props;
    const cartSummary = Object.keys( selectedFeatures )
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
                        }); 
    const total = Object.keys( selectedFeatures )
        .reduce((acc, curr) => acc + selectedFeatures[ curr ].cost, 0);  
    return (
        <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            { cartSummary }
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